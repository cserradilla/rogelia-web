# Rogelia CMS — Sistema de Gestión de Contenidos

## Descripción

Este es un sistema CMS (Content Management System) simple y ligero para el sitio web de Rogelia. Permite editar todo el contenido del sitio sin necesidad de tocar código.

## Archivos del Proyecto

- `index.html` — Página de inicio
- `nosotros.html` — Página "Nosotros"
- `admin.html` — Panel de administración
- `config.json` — Archivo de configuración con todo el contenido
- `js/content-loader.js` — Script que carga el contenido dinámicamente

## Cómo Usar el CMS

### 1. Acceder al Panel de Administración

Abrí el archivo `admin.html` en tu navegador. La contraseña por defecto es: `rogelia2024`

### 2. Editar Contenido

El panel está organizado por secciones:
- **Sitio**: Nombre, descripción, email, website
- **Hero**: Título principal, subtítulo, CTAs
- **Manifiesto**: Texto del manifiesto
- **Servicios**: Lista de servicios
- **Enfoque**: Pasos del método
- **Demo**: Controles de la calculadora
- **Trayectoria**: Estadísticas
- **Casos**: Testimonios
- **Contacto**: Formulario y datos de contacto
- **Nosotros**: Historia, timeline, valores, equipo
- **Footer**: Enlaces y texto final

### 3. Guardar Cambios

1. Hacé clic en "Guardar cambios"
2. El sistema intentará guardar automáticamente (requiere servidor)
3. Si falla, se descargará automáticamente el `config.json` actualizado
4. Reemplazá el archivo `config.json` en tu hosting con el descargado

### 4. Ver los Cambios

Recargá `index.html` o `nosotros.html` para ver los cambios aplicados.

## Integración con Formspree (Opcional)

Para que el formulario de contacto funcione realmente:

1. Registrate en [formspree.io](https://formspree.io)
2. Creá un nuevo form y copiá tu Form ID
3. Editá `config.json` y agregá `"formspreeId": "tu_form_id"` en la sección `site`
4. Actualizá el script del formulario en `index.html` para usar Formspree

## Estructura del config.json

```json
{
  "site": { "name", "tagline", "email", "website", "description" },
  "hero": { "eyebrow", "title", "subtitle", "ctaPrimary", "ctaSecondary", "trustText" },
  "manifiesto": { "eyebrow", "title", "lines": [], "closing" },
  "servicios": { "eyebrow", "title", "items": [{ "index", "title", "desc" }] },
  "enfoque": { "eyebrow", "title", "steps": [], "towerLayers": [] },
  "demo": { "tag", "title", "desc", "controls": [], "footnote" },
  "trayectoria": { "eyebrow", "title", "stats": [] },
  "casos": { "eyebrow", "title", "testimonios": [] },
  "contacto": { "eyebrow", "title", "desc", "directContact": [], "formFields": [] },
  "nosotros": { "hero", "story", "timeline", "valores", "equipo", "ctaBand" },
  "footer": { "navLinks", "closingText" },
  "admin": { "password" }
}
```

## Personalización Avanzada

### Cambiar la Contraseña

Editá `config.json` y modificá el valor de `admin.password`.

### Agregar/Quitar Elementos

Desde el panel admin podés:
- Agregar nuevos servicios, testimonios, miembros del equipo
- Eliminar elementos existentes
- Reordenar (eliminando y agregando en nueva posición)

### Colores y Estilos

Los colores están definidos en las variables CSS al inicio de cada HTML. Para cambiarlos:
1. Editá las variables `--ink`, `--ochre`, etc. en `<style>`
2. O agregá una sección `theme` en `config.json` y extendé el content-loader.js

## Hosting Recomendado

- **Netlify**: Arrastrá la carpeta con los archivos. Funciona inmediatamente.
- **Vercel**: Conectá el repositorio GitHub.
- **GitHub Pages**: Subí los archivos a un repo y activá Pages.

## Soporte

Para problemas o consultas, contactá a hola@rogelia.com.

---

© 2024 Rogelia. Todos los derechos reservados.
