# Presentación datx (PDF para clientes)

- `../datx-presentacion.pdf`: el PDF listo para entregar.
- `../datx-presentacion.html`: la fuente (marcadores `{{LOGO_*}}` y `{{CONTACTO}}`).

Para regenerar el PDF (requiere Node y Playwright):

```
node fuente/generar-pdf.js "$PWD/fuente" "$PWD"
```

Antes de regenerar, reemplazá `[mail o WhatsApp de contacto]` en `generar-pdf.js` por el contacto real.

## Ficha de una página (versión corta)

- `../datx-una-pagina-corta.pdf`, `../datx-una-pagina-corta.png` y `../datx-una-pagina-corta.html`

Para regenerar el PDF y el PNG (requiere Node y Playwright; la carpeta de salida intermedia es a elección):

```
node fuente/generar-pdf.js "$PWD/fuente" "$PWD" datx-una-pagina-corta /ruta/temporal
node fuente/exportar-png.js /ruta/temporal/render-datx-una-pagina-corta.html "$PWD/datx-una-pagina-corta.png"
```
