# Playwright Hybrid Automation Framework

A Playwright + TypeScript automation framework covering API, UI, and hybrid API-to-UI authentication workflows for EventHub.

## Prerequisites

- Node.js 20 or later
- npm
- Docker, optional for containerized test execution

## Setup

```bash
npm ci
npx playwright install chromium
```

Create an `.env` file in the project root:

```env
EVENTHUB_EMAIL=your-email@example.com
EVENTHUB_PASSWORD=your-password
API_BASE=https://api.eventhub.rahulshettyacademy.com/api
```

Never commit `.env` or credentials. `.env` is excluded through `.gitignore`.

## Run Tests

```bash
# List discovered tests
npx playwright test --list

# Run the complete suite
npx playwright test

# Run a project
npx playwright test --project=ui-chromium
npx playwright test --project=api

# Run one test file
npx playwright test tests/hybrid/hybrid.spec.ts --project=ui-chromium

# Run headed
npx playwright test --project=ui-chromium --headed

# Open the HTML report
npx playwright show-report
```

## Docker

Build and run the container with environment variables supplied at runtime:

```bash
docker build -t hybrid-automation .
docker run --rm --init --ipc=host --env-file .env hybrid-automation
```

The Docker image uses Playwright 1.64.1 with the Noble base image.

## Project Structure

```text
api/             API client wrappers
fixtures/        Custom Playwright fixtures
pages/           Page Object Model classes
test-data/       Test data and Faker factories
tests/api/       API tests
tests/ui/        Browser UI tests
tests/hybrid/    API and UI hybrid tests
playwright.config.ts
Dockerfile
```

## Reports and Artifacts

- `playwright-report/`: HTML report
- `test-results/`: traces, screenshots, videos, and failure context

These generated directories are excluded from Git and Docker builds.

## CI

GitHub Actions is configured under `.github/workflows/` and runs Playwright tests in a container-compatible environment.
