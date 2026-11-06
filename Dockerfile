# Fake image for testing gantry's build check. No real app or data.
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY src ./src
CMD ["node", "-e", "console.log('sandbox ok')"]
