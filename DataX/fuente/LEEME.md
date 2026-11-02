# Presentación datx (PDF para clientes)

- `../datx-presentacion.pdf`: el PDF listo para entregar.
- `../datx-presentacion.html`: la fuente (marcadores `{{LOGO_*}}` y `{{CONTACTO}}`).

Para regenerar el PDF (requiere Node y Playwright):

```
node fuente/generar-pdf.js "$PWD/fuente" "$PWD"
```

Antes de regenerar, reemplazá `[mail o WhatsApp de contacto]` en `generar-pdf.js` por el contacto real.
