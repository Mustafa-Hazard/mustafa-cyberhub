# ══════════════════════════════════════════════
# STAGE 1: Install dependencies
# ══════════════════════════════════════════════
FROM node:20-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files for caching optimization
COPY package.json package-lock.json ./
RUN npm ci

# ══════════════════════════════════════════════
# STAGE 2: Build the modular Next.js application
# ══════════════════════════════════════════════
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data. Let's disable it during build.
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ══════════════════════════════════════════════
# STAGE 3: Production Runner (Hardened Runtime)
# ══════════════════════════════════════════════
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Hardening: Create a non-privileged system user/group to avoid running as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set up correct permissions for Next.js standalone tracing features
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the secure non-root user
USER nextjs

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]