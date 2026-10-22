# 📦 Sample Node.js Application with Docker Support

This repository contains a Node.js application packaged with Docker and managed via Docker Compose. It allows you to run the application in a containerized environment for easy setup and deployment.

## 📁 Project Structure
```
├── .github/workflows/main.yml   # CI/CD pipeline
├── app
│ ├── public
│ │ └── styles
│ │     └── styles.css
│ ├── routes.js
│ └── server
│     └── views
│         └── index.ejs
├── app.js

├── docker-compose.yml
├── Dockerfile
├── package-lock.json
├── package.json
└── README.md
```


## 🚀 Getting Started

These instructions will get your application up and running using Docker.

### 🛠️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (for local development)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

## Pipeline (`.github/workflows/main.yml`)
| Job | What it does |
|---|---|
| `Secret scan` | Checkout → gitleaks for secret scanning |
| `Dependency scan` | Checkout → setup Node 20 → Dependency scan → upload reports to artifacts |
| `Docker scan` | Checkout → setup Node 20 → Docker file lint → Docker build → Trivy vulnerability scan |
| `test` | Checkout → setup Node 20 → `npm install` → `npm test` |
| `build-and-push` | (needs `test`) Buildx → Docker Hub login → build image → push `<commit-sha>` tags |
| `deploy on push` | (needs `build and push`) → Docker Hub login → Deploy with docker compose → push `<commit-sha>` tags |

Trigger: push to `main` (plus `workflow_call`).

## Setup
1. Create a Docker Hub account and an **access token** (Account Settings → Security).
2. In the GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**
   - `DOCKERHUB_USERNAME` — your Docker Hub username
   - `DOCKERHUB_TOKEN` — the access token
3. Push to `main` and watch the **Actions** tab.

3. **Access the application**

Once the containers are up, you can access the app at: [http://localhost:3000](http://localhost:3000)
