const fs=require('fs');const {chromium}=require('playwright');
const S=process.argv[2], dir=process.argv[3];
let logo=fs.readFileSync(S+'/logo-datx.svg','utf8').replace(/class="logo"/,'class="logo" role="img" aria-label="datx"');
const claro=logo, oscuro=logo.replace('fill="#FFFFFF"','fill="#082121"');
const uid=(s,k)=>s.replace(/cd18cw/g,'cd'+k).replace(/bl18cw/g,'bl'+k);
let n=0;
let html=fs.readFileSync(dir+'/datx-presentacion.html','utf8')
 .replace(/\{\{LOGO_CLARO\}\}/g,()=>uid(claro,'c'+(n++)))
 .replace(/\{\{LOGO_CLARO_CHICO\}\}/g,()=>uid(claro,'c'+(n++)))
 .replace(/\{\{LOGO_OSCURO\}\}/g,()=>uid(oscuro,'o'+(n++)))
 .replace('{{CONTACTO}}','[mail o WhatsApp de contacto]');
fs.writeFileSync(S+'/render.html',html);
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:794,height:1123}});
await p.goto('file://'+S+'/render.html');await p.emulateMedia({media:'print'});
await p.pdf({path:dir+'/datx-presentacion.pdf',format:'A4',printBackground:true,preferCSSPageSize:true});
await p.emulateMedia({media:'screen'});
const pages=await p.$$('.pagina');
for(let i=0;i<pages.length;i++){await pages[i].screenshot({path:S+`/p${i+1}.png`});}
// overflow check
const of=await p.$$eval('.pagina',ps=>ps.map((pg,i)=>{const r=pg.getBoundingClientRect();let max=0;pg.querySelectorAll('*').forEach(e=>{if(e.closest(".pie"))return;const b=e.getBoundingClientRect();if(b.height)max=Math.max(max,b.bottom-r.top)});return i+1+':'+Math.round(max)+'/'+Math.round(r.height)}));
console.log(of.join(' '));await b.close();})();
