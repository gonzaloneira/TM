// Exporta la ficha a PNG en alta resolución, sin bordes ni sombras de la vista en pantalla.
// Uso: node fuente/exportar-png.js <html-ya-armado> <salida.png>
const {chromium}=require('playwright');
(async()=>{
  const [entrada,salida]=process.argv.slice(2);
  const b=await chromium.launch();
  const p=await b.newPage({viewport:{width:794,height:1123},deviceScaleFactor:3});
  await p.goto('file://'+entrada);
  await p.addStyleTag({content:'html,body{background:#fff!important;margin:0!important}.pagina{margin:0!important;box-shadow:none!important;width:794px!important;height:1123px!important}'});
  await p.waitForTimeout(400);
  await p.screenshot({path:salida,clip:{x:0,y:0,width:794,height:1123}});
  await b.close();
})();
