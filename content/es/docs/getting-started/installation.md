---
title: "Instalación"
linkTitle: "Instalación"
weight: 10
description: >
  Cómo instalar Hugo y configurar tu sitio Docsy
---

## Instalando Hugo

Hugo está disponible para macOS, Windows y Linux. Elige el método de instalación que funcione mejor para tu sistema operativo.

### macOS

La forma más fácil de instalar Hugo en macOS es usando Homebrew:

```bash
brew install hugo
```

Asegúrate de instalar la **versión extendida** de Hugo, que es requerida para Docsy:

```bash
brew install hugo --extended
```

### Windows

Para usuarios de Windows, puedes descargar Hugo desde la [página oficial de releases](https://github.com/gohugoio/hugo/releases) o usar gestores de paquetes como Chocolatey:

```bash
choco install hugo-extended
```

### Linux

La mayoría de las distribuciones de Linux tienen Hugo disponible en sus repositorios de paquetes:

```bash
# Ubuntu/Debian
sudo apt install hugo

# Fedora
sudo dnf install hugo

# Arch Linux
sudo pacman -S hugo
```

## Verificando la Instalación

Después de la instalación, verifica que Hugo esté funcionando correctamente:

```bash
hugo version
```

Deberías ver una salida similar a:
```
hugo v0.147.7+extended+withdeploy darwin/arm64 BuildDate=2025-05-31T12:41:12Z VendorInfo=brew
```

{{% alert title="Importante" color="warning" %}}
Asegúrate de tener la versión **extendida** de Hugo instalada. El tema Docsy requiere Hugo Extended para el procesamiento de SCSS.
{{% /alert %}}

## Instalando Node.js y npm

El tema Docsy requiere Node.js y npm para procesar assets:

### Usando Node Version Manager (Recomendado)

```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Instalar y usar la última versión LTS de Node.js
nvm install --lts
nvm use --lts
```

### Instalación Directa

Visita [nodejs.org](https://nodejs.org/) y descarga la versión LTS para tu sistema operativo.

## Próximos Pasos

Una vez que tengas Hugo y Node.js instalados, estás listo para continuar con [Configuración](../configuration/) para configurar tu sitio. 