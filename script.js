(() => {
  const cfg = window.CB_CONFIG || {};
  const $all = (s) => [...document.querySelectorAll(s)];

  $all('[data-launch]').forEach(el => el.textContent = cfg.launchPrice || '$14.900');
  $all('[data-regular]').forEach(el => el.textContent = cfg.regularPrice || '$19.900');
  document.getElementById('year').textContent = new Date().getFullYear();

  const configDialog = document.getElementById('configDialog');
  const imageDialog = document.getElementById('imageDialog');

  $all('.js-buy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (!cfg.paymentUrl || !/^https?:\/\//.test(cfg.paymentUrl)) {
        e.preventDefault();
        configDialog.showModal();
      } else {
        btn.href = cfg.paymentUrl;
        btn.target = '_blank';
        btn.rel = 'noopener';
      }
    });
    if (cfg.paymentUrl && /^https?:\/\//.test(cfg.paymentUrl)) {
      btn.href = cfg.paymentUrl; btn.target = '_blank'; btn.rel='noopener';
    }
  });

  const waMessage = encodeURIComponent('Hola Carlos, estoy analizando una operación inmobiliaria y quisiera consultar por una reunión personalizada.');
  const mailSubject = encodeURIComponent('Consulta inmobiliaria personalizada');
  const mailBody = encodeURIComponent('Hola Carlos, estoy analizando una operación inmobiliaria y quisiera consultar por una reunión personalizada.');
  $all('.js-whatsapp').forEach(a => {
    if (cfg.whatsappNumber) {
      a.href = `https://wa.me/${cfg.whatsappNumber}?text=${waMessage}`; a.target='_blank'; a.rel='noopener';
    } else if (cfg.contactEmail) {
      a.href = `mailto:${cfg.contactEmail}?subject=${mailSubject}&body=${mailBody}`;
    } else {
      a.addEventListener('click', e => { e.preventDefault(); configDialog.showModal(); });
    }
  });

  $all('.js-email').forEach(a => {
    if (cfg.contactEmail) { a.href = `mailto:${cfg.contactEmail}`; a.textContent = cfg.contactEmail; }
    else a.style.display='none';
  });

  $all('.js-instagram').forEach(a => {
    if (cfg.instagramUrl) { a.href=cfg.instagramUrl; a.target='_blank'; a.rel='noopener'; }
    else a.style.display='none';
  });

  $all('.preview-item').forEach(btn => btn.addEventListener('click', () => {
    const img = imageDialog.querySelector('img'); img.src = btn.dataset.image; imageDialog.showModal();
  }));

  $all('.dialog-close').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));
  $all('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));

  if (cfg.launchEnds) {
    const el = document.getElementById('countdown');
    const end = new Date(cfg.launchEnds + 'T23:59:59-03:00').getTime();
    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) { el.hidden = true; return; }
      const d=Math.floor(diff/86400000), h=Math.floor(diff/3600000)%24, m=Math.floor(diff/60000)%60;
      el.textContent = `Precio lanzamiento disponible por ${d}d ${h}h ${m}m`;
      el.hidden = false;
    };
    tick(); setInterval(tick,60000);
  }

  // Optional Meta Pixel
  if (cfg.metaPixelId) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init',cfg.metaPixelId); fbq('track','PageView');
  }

  // Optional Google Analytics 4
  if (cfg.gaMeasurementId) {
    const s=document.createElement('script'); s.async=true; s.src=`https://www.googletagmanager.com/gtag/js?id=${cfg.gaMeasurementId}`; document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[]; function gtag(){dataLayer.push(arguments)} window.gtag=gtag; gtag('js',new Date()); gtag('config',cfg.gaMeasurementId);
  }
})();
