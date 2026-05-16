# IntelliDev Agent

An AI-powered engineering assistant that connects GitHub and Jira to help teams understand development activity, summarize commits, manage stories, and automate engineering workflows.

---

# Features

## GitHub Integration

* Read repositories and branches
* Analyze and summarize commits
* Track pull requests and code changes
* Create commits and push updates
* Generate release summaries

## Jira Integration

* Create stories, tasks, and bugs
* Link commits with Jira tickets
* Update ticket status and comments
* Generate sprint summaries

## AI Capabilities

* Explain code changes in plain English
* Summarize commit history
* Detect impacted modules
* Generate engineering insights

---

# Example Commands

```bash
Summarize commits for release/v2.4
Create a Jira story for dark mode support
Find commits related to JIRA-2045
```

---

# Architecture

```text
User Interface
      |
AI Orchestration Layer
      |
+-------------------+
| GitHub | Jira |
+-------------------+
      |
AI Intelligence Engine
```

---

# Tech Stack

* Backend: Node.js / Python
* AI: OpenAI
* Integrations: GitHub API, Jira API
* Database: PostgreSQL
* Deployment: Docker

---

# Installation

```bash
git clone https://github.com/your-org/intellidev-agent.git
cd intellidev-agent
npm install
```

---

# Environment Variables

```env
OPENAI_API_KEY=your_key
GITHUB_TOKEN=your_token
JIRA_API_TOKEN=your_token
```

---

# Run

```bash
npm run dev
```

---

# Security

* OAuth2 authentication
* Role-based access control
* Secure API communication
