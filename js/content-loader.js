// Content Loader for Rogelia CMS
(function(){
  "use strict";
  let config = null;
  function setText(selector, text){ const el = document.querySelector(selector); if(el) el.innerHTML = text || ''; }
  function setAttr(selector, attr, value){ const el = document.querySelector(selector); if(el && value) el.setAttribute(attr, value); }
  function renderSite(){
    if(!config.site) return;
    document.title = config.site.name + ' — ' + (config.site.description || '');
    setAttr('meta[name="description"]', 'content', config.site.description);
    const yr = document.getElementById('yr'); if(yr) yr.textContent = new Date().getFullYear();
  }
  function renderHero(){
    if(!config.hero) return;
    setText('.hero .eyebrow', config.hero.eyebrow);
    setText('.hero h1', config.hero.title);
    setText('.hero .sub', config.hero.subtitle);
    setText('.hero .trust', config.hero.trustText);
  }
  function renderManifiesto(){
    if(!config.manifiesto) return;
    setText('.mani .eyebrow', config.manifiesto.eyebrow);
    setText('.mani h2', config.manifiesto.title);
    setText('.mani .close', config.manifiesto.closing);
  }
  function renderServicios(){
    if(!config.servicios) return;
    setText('.servicios .eyebrow', config.servicios.eyebrow);
    setText('.servicios h2', config.servicios.title);
  }
  function renderEnfoque(){
    if(!config.enfoque) return;
    setText('.enfoque .eyebrow', config.enfoque.eyebrow);
    setText('.enfoque h2', config.enfoque.title);
  }
  function renderDemo(){
    if(!config.demo) return;
    setText('.demo .tag', config.demo.tag);
    setText('.demo-head h2', config.demo.title);
    const desc = document.querySelector('.demo-head p'); if(desc) desc.textContent = config.demo.desc;
    const foot = document.querySelector('.demo .foot'); if(foot) foot.textContent = config.demo.footnote;
  }
  function renderTrayectoria(){
    if(!config.trayectoria) return;
    setText('.tray .eyebrow', config.trayectoria.eyebrow);
    setText('.tray h2', config.trayectoria.title);
  }
  function renderCasos(){
    if(!config.casos) return;
    setText('.casos .eyebrow', config.casos.eyebrow);
    setText('.casos h2', config.casos.title);
  }
  function renderContacto(){
    if(!config.contacto) return;
    setText('.contacto .eyebrow', config.contacto.eyebrow);
    setText('.cta-left h2', config.contacto.title);
    const desc = document.querySelector('.cta-left p'); if(desc) desc.textContent = config.contacto.desc;
  }
  function renderFooter(){
    if(!config.footer) return;
    setText('.foot-tag', config.site?.tagline || '');
    const footBot = document.querySelector('.foot-bot span:last-child'); if(footBot) footBot.textContent = config.footer.closingText;
  }
  function renderNosotros(){
    if(!config.nosotros) return;
    setText('.phero .eyebrow', config.nosotros.hero.eyebrow);
    setText('.phero h1', config.nosotros.hero.title);
    const pheroDesc = document.querySelector('.phero .neg'); if(pheroDesc) pheroDesc.innerHTML = config.nosotros.hero.desc;
    setText('.story .eyebrow', config.nosotros.story.eyebrow);
    setText('.story h2', config.nosotros.story.title);
    setText('.tray .eyebrow', config.nosotros.timeline.eyebrow);
    setText('.tray h2', config.nosotros.timeline.title);
    setText('.values .eyebrow', config.nosotros.valores.eyebrow);
    setText('.values h2', config.nosotros.valores.title);
    setText('.team .eyebrow', config.nosotros.equipo.eyebrow);
    setText('.team h2', config.nosotros.equipo.title);
    setText('.ctaband .eyebrow', config.nosotros.ctaBand.eyebrow);
    setText('.ctaband h2', config.nosotros.ctaBand.title);
    const ctaDesc = document.querySelector('.ctaband p'); if(ctaDesc) ctaDesc.textContent = config.nosotros.ctaBand.desc;
  }
  function loadContent(){
    fetch('config.json').then(r => { if(!r.ok) throw new Error('Config no encontrado'); return r.json(); })
      .then(data => { config = data; const isNosotros = document.querySelector('.phero'); renderSite(); if(!isNosotros){ renderHero(); renderManifiesto(); renderServicios(); renderEnfoque(); renderDemo(); renderTrayectoria(); renderCasos(); renderContacto(); renderFooter(); } else { renderNosotros(); renderFooter(); } })
      .catch(err => { console.warn('Usando contenido estático:', err.message); });
  }
  if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', loadContent); } else { loadContent(); }
})();
