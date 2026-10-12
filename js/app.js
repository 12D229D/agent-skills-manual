/**
 * SKILL Manual SPA - Main Application Logic
 * Agent Skills (SKILL.md) Interactive Guide
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initProgressBar();
    initSearch();
    initCompletionTracker();
    initSkillInspector();
    initCopyButtons();
});

/* ==========================================================================
   1. NAVIGATION & SECTION DISPLAY
   ========================================================================== */
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.doc-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            if (!targetId) return;

            // Activate nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Scroll to target section smoothly or display section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ScrollSpy for Active Nav Link Update
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navItems.forEach(nav => {
                if (nav.getAttribute('data-target') === currentSectionId) {
                    nav.classList.add('active');
                } else {
                    nav.classList.remove('active');
                }
            });
        }

        updateReadingProgress();
    });
}

/* ==========================================================================
   2. READING PROGRESS BAR
   ========================================================================== */
function updateReadingProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;

    const progressPercentage = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
    
    const progressFill = document.getElementById('progress-fill');
    const progressVal = document.getElementById('progress-val');

    if (progressFill) progressFill.style.width = `${progressPercentage}%`;
    if (progressVal) progressVal.textContent = `${progressPercentage}%`;
}

function initProgressBar() {
    updateReadingProgress();
}

/* ==========================================================================
   3. SEARCH IN MANUAL
   ========================================================================== */
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const contentElements = document.querySelectorAll('.doc-section p, .doc-section li, .doc-section h1, .doc-section h2, .doc-section h3, .doc-section h4');

        if (query === '') {
            contentElements.forEach(el => {
                el.style.backgroundColor = '';
            });
            return;
        }

        contentElements.forEach(el => {
            const text = el.textContent.toLowerCase();
            if (text.includes(query)) {
                el.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
                el.style.borderRadius = '4px';
            } else {
                el.style.backgroundColor = '';
            }
        });
    });
}

/* ==========================================================================
   4. COMPLETION TRACKER
   ========================================================================== */
const completedSections = new Set();

function initCompletionTracker() {
    const completionBtns = document.querySelectorAll('.completion-btn');

    completionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            if (section) {
                completedSections.add(section);
                btn.textContent = '✅ Completado';
                btn.style.backgroundColor = '#059669';
                btn.style.color = '#ffffff';
                btn.disabled = true;
            }
        });
    });
}

/* ==========================================================================
   5. DEMO: SKILL INSPECTOR
   ========================================================================== */
const mockSkills = {
    pdf: {
        name: 'pdf-to-markdown',
        description: 'Extrae texto y tablas estructuradas desde archivos PDF a Markdown plano.',
        content: `---
name: pdf-to-markdown
description: Extrae texto y tablas estructuradas desde archivos PDF a Markdown plano. Usar al recibir documentos PDF.
version: 1.0.0
author: Antigravity Team
tools_required:
  - pdftotext
  - pdfimages
---

# Instructions for pdf-to-markdown

## Guidelines
1. Inspecciona el PDF con \`pdftotext -layout input.pdf output.txt\`.
2. Si contiene tablas complejas, formatea las celdas en sintaxis GFM Markdown.
3. Preserva las notas a pie de página y títulos originales.`
    },
    git: {
        name: 'git-release-notes',
        description: 'Genera notas de versión (Changelog) automáticas a partir de los commits formateados.',
        content: `---
name: git-release-notes
description: Genera notas de versión a partir de los commits formateados con Conventional Commits.
version: 1.2.0
author: DevOps Skill Kit
---

# Instructions for git-release-notes

## Commit Rules
- \`feat:\` se agrupa en **Nuevas Características**.
- \`fix:\` se agrupa en **Corrección de Errores**.
- \`docs:\` se agrupa en **Documentación**.`
    },
    csv: {
        name: 'csv-summarizer',
        description: 'Analiza archivos CSV pesados, calcula estadísticas de columnas e identifica valores nulos.',
        content: `---
name: csv-summarizer
description: Analiza archivos CSV pesados, calcula estadísticas descriptivas e identifica anomalías de datos.
version: 2.0.0
author: Data Analysis Agents
---

# Instructions for csv-summarizer

## Workflow
1. Detecta la codificación (UTF-8, ISO-8859-1) y el delimitador.
2. Imprime un resumen de tipos de columna, valores nulos y distribuciones básicas.
3. Genera un reporte Markdown descargable.`
    }
};

function initSkillInspector() {
    const selector = document.getElementById('skill-selector');
    const loadBtn = document.getElementById('load-skill-btn');
    const renderArea = document.getElementById('skill-render');

    if (!selector || !loadBtn || !renderArea) return;

    loadBtn.addEventListener('click', () => {
        const selectedKey = selector.value;
        const skill = mockSkills[selectedKey];

        if (!skill) return;

        renderArea.innerHTML = `
            <div class="skill-card" style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(16, 185, 129, 0.3); padding: 1.5rem; border-radius: 8px; font-family: monospace;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">
                    <span style="color: #10b981; font-weight: bold;">📦 ${skill.name}.md</span>
                    <span style="background: #047857; color: white; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">VALID FRONTMATTER</span>
                </div>
                <pre style="white-space: pre-wrap; color: #e2e8f0; font-size: 0.9rem; line-height: 1.5;">${escapeHtml(skill.content)}</pre>
            </div>
        `;
    });
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* ==========================================================================
   6. COPY TO CLIPBOARD BUTTONS
   ========================================================================== */
function initCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
        const parent = block.parentElement;
        if (!parent) return;

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.textContent = '📋 Copiar';
        copyBtn.style.position = 'absolute';
        copyBtn.style.top = '8px';
        copyBtn.style.right = '8px';
        copyBtn.style.padding = '4px 8px';
        copyBtn.style.fontSize = '0.75rem';
        copyBtn.style.background = 'rgba(255,255,255,0.1)';
        copyBtn.style.border = '1px solid rgba(255,255,255,0.2)';
        copyBtn.style.color = '#fff';
        copyBtn.style.borderRadius = '4px';
        copyBtn.style.cursor = 'pointer';

        parent.style.position = 'relative';
        parent.appendChild(copyBtn);

        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent).then(() => {
                copyBtn.textContent = '✅ Copiado';
                setTimeout(() => { copyBtn.textContent = '📋 Copiar'; }, 2000);
            });
        });
    });
}
