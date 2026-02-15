# Contributing to Agent Management Forum

Thank you for your interest in contributing to the Agent Management Forum! We welcome articles about AI agents, multi-agent systems, agent orchestration, and related topics.

## How to Contribute an Article

### 1. Fork the Repository

Fork this repository to your own GitHub account and clone it locally.

### 2. Create Your Author Profile

If this is your first contribution, create an author profile in `src/content/authors/`:

**File location**: `src/content/authors/your-name.md` (use kebab-case, e.g., `john-smith.md`)

**Author frontmatter template**:

```markdown
---
name: Your Full Name
bio: A short bio (1-2 sentences)
website: https://yourwebsite.com (optional)
github: yourusername (optional, without @)
twitter: yourhandle (optional, without @)
avatar: https://link-to-your-avatar.jpg (optional)
---

This is your extended biography that will appear on your author profile page.
You can write multiple paragraphs here to provide more detail about your
background, expertise, and interests in AI agents and related technologies.
```

**Author frontmatter fields**:
- `name` (required): Your full name as you want it displayed
- `bio` (required): A concise bio, typically 1-2 sentences
- `website` (optional): Your personal or company website (must be valid URL)
- `github` (optional): Your GitHub username (without the @ symbol)
- `twitter` (optional): Your Twitter/X handle (without the @ symbol)
- `avatar` (optional): URL to your profile photo

**Extended bio**: The markdown content below the frontmatter will appear on your dedicated author profile page.

### 3. Write Your Article

Create a new markdown file in `src/content/articles/`:

**File location**: `src/content/articles/your-article-title.md` (use kebab-case)

**Article frontmatter template**:

```markdown
---
title: Your Article Title
description: A compelling description of your article that summarises the key points
author: your-name
date: 2026-02-15
tags: [ai-agents, orchestration, multi-agent-systems]
original_url: https://original-publication-url.com (optional)
draft: false
---

Your article content goes here in markdown format...
```

**Article frontmatter fields**:
- `title` (required): Article title, maximum 120 characters
- `description` (required): Article summary, maximum 300 characters
- `author` (required): Must match your author file slug (e.g., if your author file is `john-smith.md`, use `john-smith`)
- `date` (required): Publication date in YYYY-MM-DD format
- `tags` (required): Array of 1-5 relevant tags, e.g., `[ai-agents, orchestration]`
- `original_url` (optional): Link to original publication if this is a repost
- `draft` (optional): Set to `true` to mark as draft (default: `false`)

### 4. File Naming Conventions

- Use **kebab-case** for all file names (lowercase with hyphens)
- Do **not** use underscore prefixes (files starting with `_` are ignored)
- Examples:
  - ✅ `multi-agent-orchestration.md`
  - ✅ `introduction-to-llm-agents.md`
  - ❌ `Multi_Agent_Orchestration.md`
  - ❌ `_draft-article.md`

### 5. Validate Locally

Before submitting your pull request, validate your article locally:

```bash
npm install
npm run build
```

The build process will validate your frontmatter against the Zod schemas. If there are any errors (missing required fields, invalid formats, etc.), the build will fail with a descriptive error message.

### 6. Submit a Pull Request

1. Commit your changes:
   - Add your author profile: `src/content/authors/your-name.md`
   - Add your article: `src/content/articles/your-article-title.md`

2. Push to your fork

3. Open a pull request against the `main` branch of this repository

4. Use the article submission PR template and fill in all required information

## Content Guidelines

- Articles should be relevant to AI agents, multi-agent systems, orchestration, or related topics
- Write in clear, accessible language
- Include code examples where appropriate
- Properly attribute any external sources
- Ensure your content is original or you have permission to republish

## Questions?

If you have questions about the contribution process, please open an issue in this repository.

## Licence

By contributing, you agree that your contributions will be licenced under the same licence as this project.
