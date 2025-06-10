---
title: "Installation"
linkTitle: "Installation"
weight: 10
description: >
  How to install Hugo and set up your Docsy site
---

## Installing Hugo

Hugo is available for macOS, Windows, and Linux. Choose the installation method that works best for your operating system.

### macOS

The easiest way to install Hugo on macOS is using Homebrew:

```bash
brew install hugo
```

Make sure you install the **extended version** of Hugo, which is required for Docsy:

```bash
brew install hugo --extended
```

### Windows

For Windows users, you can download Hugo from the [official releases page](https://github.com/gohugoio/hugo/releases) or use package managers like Chocolatey:

```bash
choco install hugo-extended
```

### Linux

Most Linux distributions have Hugo available in their package repositories:

```bash
# Ubuntu/Debian
sudo apt install hugo

# Fedora
sudo dnf install hugo

# Arch Linux
sudo pacman -S hugo
```

## Verifying Installation

After installation, verify that Hugo is working correctly:

```bash
hugo version
```

You should see output similar to:
```
hugo v0.147.7+extended+withdeploy darwin/arm64 BuildDate=2025-05-31T12:41:12Z VendorInfo=brew
```

{{% alert title="Important" color="warning" %}}
Make sure you have the **extended** version of Hugo installed. The Docsy theme requires Hugo Extended for SCSS processing.
{{% /alert %}}

## Installing Node.js and npm

The Docsy theme requires Node.js and npm for processing assets:

### Using Node Version Manager (Recommended)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use the latest LTS version of Node.js
nvm install --lts
nvm use --lts
```

### Direct Installation

Visit [nodejs.org](https://nodejs.org/) and download the LTS version for your operating system.

## Next Steps

Once you have Hugo and Node.js installed, you're ready to move on to [Configuration](../configuration/) to set up your site. 