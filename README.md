# Bosetti — Estudio de Arquitectura

Sitio web del estudio de arquitectura Bosetti. Estructura inspirada en gkcarch.com, con estética glassmorphism y soporte para dark/light mode.

## Stack
- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Tipografía **Manrope** (Google Fonts)
- 100% estático — despliegue directo en GitHub Pages

## Estructura

```
.
├── index.html        # Página principal (single page)
├── css/styles.css    # Estilos, variables y temas
├── js/main.js        # Toggle de tema, menú móvil, reveal on scroll
├── assets/images/    # Imágenes locales (placeholder)
└── .nojekyll         # Evita procesado Jekyll en GitHub Pages
```

## Secciones
1. **Hero** — presentación + estadísticas
2. **Sobre el estudio** — filosofía + perfil del fundador
3. **Servicios** — 4 servicios principales
4. **Proceso** — 6 fases de trabajo
5. **Sostenibilidad** — compromiso ambiental
6. **Proyectos** — grid de portfolio
7. **FAQs** — preguntas frecuentes con accordion
8. **Contacto** — formulario + datos

## Probar localmente

Cualquier servidor estático funciona. Las opciones más rápidas:

```bash
# Python 3
python3 -m http.server 8000

# Node (si tienes npx)
npx serve .
```

Luego abrir [http://localhost:8000](http://localhost:8000).

## Desplegar en GitHub Pages

1. Sube el repositorio a GitHub.
2. En el repo: **Settings → Pages**.
3. **Source**: `Deploy from a branch`.
4. **Branch**: `main` · folder: `/ (root)`.
5. Guarda. El sitio quedará disponible en `https://<usuario>.github.io/<repo>/`.

> El archivo `.nojekyll` ya está incluido para evitar el procesado Jekyll por defecto.

## Personalización rápida

- **Colores y tema**: edita las variables CSS en `css/styles.css` bajo `[data-theme="dark"]` y `[data-theme="light"]`.
- **Tipografía**: cambia la importación de Google Fonts en `index.html` y la variable `--ff-base`.
- **Contenido**: edita directamente `index.html` — cada sección está claramente comentada.
- **Imágenes**: reemplaza las URLs de Unsplash por imágenes propias en `assets/images/` y actualiza los `background-image` en `css/styles.css`.
