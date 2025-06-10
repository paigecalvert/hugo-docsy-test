---
title: "Configuración"
linkTitle: "Configuración"
weight: 20
description: >
  Opciones básicas de configuración para tu sitio Hugo Docsy
---

## Configuración del Sitio

Tu sitio Hugo Docsy se configura a través del archivo `hugo.yaml` en el directorio raíz de tu sitio. Este archivo controla todo, desde información básica del sitio hasta características avanzadas del tema.

### Configuraciones Básicas del Sitio

Las configuraciones más importantes para configurar primero:

```yaml
baseURL: https://tu-sitio.com
title: Título de Tu Sitio
theme: docsy

# Configuraciones de idioma
contentDir: content/es
defaultContentLanguage: es
defaultContentLanguageInSubdir: false
```

### Parámetros del Sitio

La sección `params` controla las características específicas de Docsy:

```yaml
params:
  # Configuración del repositorio
  github_repo: https://github.com/tu-usuario/tu-repo
  github_branch: main
  
  # Funcionalidad de búsqueda
  offlineSearch: true
  
  # Información de copyright
  copyright:
    authors: Tu Nombre | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
    from_year: 2024
```

## Configuración de Navegación

### Navegación Principal

El menú de navegación principal se puede configurar de dos maneras:

#### 1. Automática (Recomendada)
Permite que Hugo genere automáticamente la navegación desde tu estructura de contenido usando pesos apropiados en el front matter.

#### 2. Configuración Manual del Menú
Define menús explícitamente en `hugo.yaml`:

```yaml
menu:
  main:
    - name: "Documentación"
      url: "/docs/"
      weight: 20
    - name: "Blog"
      url: "/blog/"
      weight: 30
```

### Navegación de la Barra Lateral

La barra lateral de documentación se genera automáticamente desde:
- Estructura de directorios bajo `content/es/docs/`
- Valores de `weight` en el front matter
- Archivos `_index.md` en cada directorio

## Organización del Contenido

### Estructura de Directorios

```
content/
└── es/
    ├── _index.md          # Página de inicio
    ├── docs/
    │   ├── _index.md      # Página de inicio de docs
    │   ├── primeros-pasos/
    │   │   ├── _index.md  # Página de inicio de sección
    │   │   ├── instalacion.md
    │   │   └── configuracion.md
    │   └── guia-usuario/
    │       └── _index.md
    └── blog/
        └── _index.md
```

### Front Matter

Cada archivo de contenido debe incluir el front matter apropiado:

```yaml
---
title: "Título de la Página"
linkTitle: "Título Corto"  # Usado en navegación
weight: 10                # Controla el orden
description: >
  Breve descripción para SEO y listados de páginas
---
```

## Características del Tema

### Búsqueda

Habilita búsqueda offline (recomendada para la mayoría de sitios):

```yaml
params:
  offlineSearch: true
```

Para sitios más grandes, considera usar Algolia:

```yaml
params:
  gcs_engine_id: tu-id-de-motor-de-busqueda
```

### Interfaz de Usuario

Personaliza el comportamiento de la UI:

```yaml
params:
  ui:
    breadcrumb_disable: false
    navbar_logo: true
    sidebar_menu_compact: false
    sidebar_search_disable: false
```

## Próximos Pasos

Con tu configuración básica completa, estás listo para comenzar a [Crear Contenido](../creacion-contenido/) para tu sitio.

{{% alert title="Consejo" color="info" %}}
Recuerda reiniciar tu servidor de desarrollo de Hugo (`hugo server -D`) después de hacer cambios de configuración para ver las actualizaciones.
{{% /alert %}} 