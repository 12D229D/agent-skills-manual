# Plan y Bitácora — Manual y Guía de Agent Skills (SKILL) en HTML5

## 📌 Resumen

SPA interactiva (HTML5 semántico + CSS3 Vanilla + JS ES6+, 100% sin dependencias, sin 
ode_modules, sin build step) que documenta **Agent Skills**: estructura (SKILL.md + scripts/assets), frontmatter, discovery, trigger de modelos, revelación progresiva (*progressive disclosure*) y mejores prácticas de diseño.

Todo el proyecto vive dentro de la carpeta SKILL/ cumpliendo AGENTS.md.

---

## 🎯 Objetivos

- [x] Proveer una SPA responsiva, accesible y de alto nivel visual sobre **Agent Skills**.
- [x] Explicar estructura de archivos (SKILL.md, scripts, assets) y frontmatter (
ame, description, llowed-tools).
- [x] Documentar modelos de descubrimiento e invocación explícita vs declarativa.
- [x] Mostrar el principio de *progressive disclosure* para optimización de ventanas de contexto en LLMs.
- [x] Incluir una **demo interactiva** que renderiza y valida la estructura de un SKILL.md.
- [x] Tema claro/oscuro persistente, hash routing SPA, buscador y progreso de lectura.

---

## 🏗️ Arquitectura de Archivos

- **Patrón**: SPA modular interactiva sin dependencias ni build step.

`	ext
SKILL/
├── index.html        # SPA completa con guía de Agent Skills y generador interactivo
├── css/
│   └── styles.css    # Sistema de diseño dark/light y glassmorphism
├── js/
│   └── app.js        # Lógica SPA, visualizador de SKILL.md y buscador
├── README.md         # Documentación de uso
└── plan.md           # Plan de desarrollo y bitácora
`

---

## 🧠 Paradigma de Programación

- **Híbrido: Declarativo + Event-Driven**
- Vistas declarativas y reactividad por eventos DOM para la previsualización dinámica de skills.

---

## 🌐 Propósito de Visibilidad y Destino Remoto

- **Visibilidad**: Público (Open Source / Portafolio).
- **Plataforma Remota Asignada**: GitHub.
- **Plataforma de Despliegue CI/CD**: GitHub Pages / Cloudflare Pages.
- **Justificación**: Guía abierta y generador interactivo de Agent Skills para agentes de IA (Antigravity / Claude Code / Codex); perfecto para GitHub Pages.

---

## 📊 Estado Actual

🟢 **Completado** — Entregable funcional y verificado.
