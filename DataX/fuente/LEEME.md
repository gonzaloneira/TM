# Presentación datx (PDF para clientes)

- `../datx-presentacion.pdf`: el PDF listo para entregar.
- `../datx-presentacion.html`: la fuente (marcadores `{{LOGO_*}}` y `{{CONTACTO}}`).

Para regenerar el PDF (requiere Node y Playwright):

```
node fuente/generar-pdf.js "$PWD/fuente" "$PWD"
```

Antes de regenerar, reemplazá `[mail o WhatsApp de contacto]` en `generar-pdf.js` por el contacto real.

## Versión de una página

- `../datx-una-pagina.pdf` / `../datx-una-pagina.html`

```
node fuente/generar-pdf.js "$PWD/fuente" "$PWD" datx-una-pagina
```

## Versión de una página, verde y ámbar

- `../datx-una-pagina-verde-ambar.pdf` / `.html` (misma base, con un bloque de estilos al final que combina los verdes con el ámbar)

```
node fuente/generar-pdf.js "$PWD/fuente" "$PWD" datx-una-pagina-verde-ambar
```
