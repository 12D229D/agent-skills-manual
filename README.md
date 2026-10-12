# Manual y Guía Técnica de Agent Skills (SKILL.md)

Este subproyecto forma parte de la suite de manuales interactivos del monorrepo **Codex**. Proporciona una guía interactiva SPA (Single Page Application) construida con HTML5 vanilla, CSS3 (diseño futurista Emerald/Slate con glassmorphism) y JavaScript puro para entender, diseñar, validar y mantener **Agent Skills** estructuradas mediante archivos `SKILL.md`.

---

## 🎯 Características Principales

- **Navegación SPA Integrada:** Desplazamiento fluido entre secciones técnicas (Frontmatter, Discovery, Progressive Disclosure, Ciclo de Autoría).
- **Skill Inspector (Demo Interactiva):** Visualizador de archivos `SKILL.md` mock con validación de metadatos.
- **Tracker de Progreso:** Indicador dinámico de lectura y botones de completado por sección.
- **Buscador en Tiempo Real:** Resaltado instantáneo de términos clave en el documento.
- **Copiar Código con un Clic:** Botón para copiar bloques de código YAML y Markdown al portapapeles.

---

## 📁 Estructura del Proyecto

```text
SKILL/
├── index.html          # Interfaz principal SPA HTML5
├── css/
│   └── styles.css      # Sistema de diseño con variables CSS, glassmorphism y dark mode
├── js/
│   └── app.js          # Lógica interactiva JS (Inspector, ScrollSpy, Buscador)
├── plan.md             # Bitácora y plan de desarrollo del subproyecto
└── README.md           # Documentación técnica del repositorio
```

---

## 🚀 Uso Local

Abre directamente `index.html` en cualquier navegador web moderno. No requiere instalación de dependencias npm ni servidor backend.
