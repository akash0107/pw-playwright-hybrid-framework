
# Match this tag to your installed Playwright version
FROM mcr.microsoft.com/playwright:v1.64.1-noble

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npx", "playwright", "test", "--workers=1"]