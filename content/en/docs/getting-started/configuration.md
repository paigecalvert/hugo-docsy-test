---
title: "Configuration"
linkTitle: "Configuration"
weight: 20
description: >
  Basic configuration options for your Hugo Docsy site
---

## Site Configuration

Your Hugo Docsy site is configured through the `hugo.yaml` file in your site's root directory. This file controls everything from basic site information to advanced theme features.

### Basic Site Settings

The most important settings to configure first:

```yaml
baseURL: https://your-site.com
title: Your Site Title
theme: docsy

# Language settings
contentDir: content/en
defaultContentLanguage: en
defaultContentLanguageInSubdir: false
```

### Site Parameters

The `params` section controls Docsy-specific features:

```yaml
params:
  # Repository configuration
  github_repo: https://github.com/your-username/your-repo
  github_branch: main
  
  # Search functionality
  offlineSearch: true
  
  # Copyright information
  copyright:
    authors: Your Name | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
    from_year: 2024
```

## Navigation Configuration

### Main Navigation

The main navigation menu can be configured in two ways:

#### 1. Automatic (Recommended)
Let Hugo automatically generate navigation from your content structure by using proper front matter weights.

#### 2. Manual Menu Configuration
Define menus explicitly in `hugo.yaml`:

```yaml
menu:
  main:
    - name: "Documentation"
      url: "/docs/"
      weight: 20
    - name: "Blog"
      url: "/blog/"
      weight: 30
```

### Sidebar Navigation

The documentation sidebar is automatically generated from:
- Directory structure under `content/en/docs/`
- Front matter `weight` values
- `_index.md` files in each directory

## Content Organization

### Directory Structure

```
content/
└── en/
    ├── _index.md          # Homepage
    ├── docs/
    │   ├── _index.md      # Docs landing page
    │   ├── getting-started/
    │   │   ├── _index.md  # Section landing page
    │   │   ├── installation.md
    │   │   └── configuration.md
    │   └── user-guide/
    │       └── _index.md
    └── blog/
        └── _index.md
```

### Front Matter

Each content file should include proper front matter:

```yaml
---
title: "Page Title"
linkTitle: "Short Title"  # Used in navigation
weight: 10               # Controls ordering
description: >
  Brief description for SEO and page listings
---
```

## Theme Features

### Search

Enable offline search (recommended for most sites):

```yaml
params:
  offlineSearch: true
```

For larger sites, consider using Algolia:

```yaml
params:
  gcs_engine_id: your-search-engine-id
```

### User Interface

Customize the UI behavior:

```yaml
params:
  ui:
    breadcrumb_disable: false
    navbar_logo: true
    sidebar_menu_compact: false
    sidebar_search_disable: false
```

## Next Steps

With your basic configuration complete, you're ready to start [Creating Content](../content-creation/) for your site.

{{% alert title="Tip" color="info" %}}
Remember to restart your Hugo development server (`hugo server -D`) after making configuration changes to see the updates.
{{% /alert %}} 