---
title: Contributing to Catalyst Guides
description: How to contribute to Catalyst Guides!
authors:
 - ArcTrooper
---

# Contributing to Catalyst Guides

[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTcuNDUzMTYzMTQ2OTcyNjYiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxOTcuNDUzMTYzMTQ2OTcyNjYgMzUiPjxyZWN0IHdpZHRoPSIxMDYuODQzNzcyODg4MTgzNiIgaGVpZ2h0PSIzNSIgZmlsbD0iI2UzNmQyNSIvPjxyZWN0IHg9IjEwNi44NDM3NzI4ODgxODM2IiB3aWR0aD0iOTAuNjA5MzkwMjU4Nzg5MDYiIGhlaWdodD0iMzUiIGZpbGw9IiNkMTVkMjciLz48dGV4dCB4PSI1My40MjE4ODY0NDQwOTE4IiB5PSIyMS41IiBmb250LXNpemU9IjEyIiBmb250LWZhbWlseT0iJ1JvYm90bycsIHNhbnMtc2VyaWYiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIyIj5CVUlMVCBXSVRIPC90ZXh0Pjx0ZXh0IHg9IjE1Mi4xNDg0NjgwMTc1NzgxMiIgeT0iMjEuNSIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9IidNb250c2VycmF0Jywgc2Fucy1zZXJpZiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjkwMCIgbGV0dGVyLXNwYWNpbmc9IjIiPk1LRE9DUzwvdGV4dD48L3N2Zz4=)](https://www.mkdocs.org)
![](https://forthebadge.com/images/badges/made-with-markdown.svg)

## Contributing Guidelines

???+ warning "Guidelines"
    1. Do **NOT** touch `mkdocs.yml`, `pyproject.toml`, or workflow files unless given **explicit permission** AND you know what you're doing.
    2. Do **NOT** republish **Catalyst Guides** live on another site.
    3. You should not get any warning or errors when running `uv run mkdocs serve | build`.
        a. Resolve/get help for any warnings/errors before pushing.
        b. Never disable.
    4. Do **NOT** delete or drastically change another author's work (unless they're typos or factual errors) without permission from the *original* author.
    5. No inappropriate content (Profanity, NSFW, Paid content)
        a. Violaters will be banned from future PRs
    6. All guides should follow the [Writing Your Guide](#writing-your-guide) format.
    7. File and folder names must be **lowercase** with no spaces. Images can use [camelCase](https://en.wikipedia.org/wiki/Camel_case).
    8. Eliminate/minimize external links to content like document, images, or videos.
        a. This helps to keep everything together for offline use.

---

## Requirements

- [Python 3.1+](https://www.python.org/downloads/)
- [Github Desktop](https://desktop.github.com/download/), [Git CLI](https://cli.github.com), or [Visual Studio Code](https://code.visualstudio.com/download)
- [UV Package Manager](https://docs.astral.sh/uv/getting-started/installation/#winget)

## Getting Started

You will be required to [Serve (Live preview)](#serve) and [Build](#build) this site.

### Fork and Enable Workflows

Fork [Catalyst Guides](https://github.com/Catalyst-Studios/catalystguides/fork) then enable GitHub Workflows

![](img/workflow.png)

### Clone/Checkout `main` Branch

a

### Installing UV and Plugin Dependencies

```yaml title='Install UV'
winget install --id=astral-sh.uv  -e
```

Catalyst Guides has a few Python dependencies that provide additional features for making guides.

```yaml title='Install Dependencies'
uv sync
```

## Writing Your Guide

!!! warning "The highlighted lines are required!"

```yaml title='exampleGuide.md' hl_lines="1 2 3 4 8 10 18"
---
title: documentName
description: some description
authors:
 - John
 - Jane
 - Bob
---

# Guide Title

Content.

## Second Header

More content.

> Mod Name | [Curseforge](legacy.curseforge link) 
```

> Catalyst Studios | [GitHub](https://github.com/Catalyst-Studios) | [Discord](https://discord.gg/YCHPXeW9GZ)
