(() => {
  const cfg = window.CB_GASTOS || {};
  const $all = (s) => [...document.querySelectorAll(s)];

  document.querySelectorAll("[data-price]").forEach(el => el.textContent = cfg.price || "$19.500");
  document.querySelectorAll("[data-currency]").forEach(el => el.textContent = cfg.currency || "ARS");
  document.getElementById("year").textContent = new Date().getFullYear();

  $all(".js-buy").forEach(a => {
    a.href = cfg.paymentUrl || "#comprar";
    if (cfg.paymentUrl) {
      a.target = "_blank";
      a.rel = "noopener";
    }
  });

  $all(".js-instagram").forEach(a => {
    a.href = cfg.instagramUrl || "#";
    if (cfg.instagramUrl) {
      a.target = "_blank";
      a.rel = "noopener";
    }
  });

  $all(".js-email").forEach(a => {
    const mail = cfg.contactEmail || "";
    a.href = mail ? `mailto:${mail}?subject=${encodeURIComponent("Consulta sobre la guía Gastos Previos a Construir")}` : "#";
  });

  const modal = document.getElementById("previewModal");
  const modalImg = modal?.querySelector("img");
  const modalTitle = modal?.querySelector("[data-modal-title]");

  $all(".preview-card").forEach(card => {
    card.addEventListener("click", () => {
      if (!modal || !modalImg) return;
      modalImg.src = card.dataset.image;
      modalImg.alt = card.dataset.title || "Vista previa";
      if (modalTitle) modalTitle.textContent = card.dataset.title || "Vista previa";
      modal.showModal();
    });
  });

  modal?.querySelector(".modal-close")?.addEventListener("click", () => modal.close());
  modal?.addEventListener("click", e => { if (e.target === modal) modal.close(); });

  // Gentle reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
})();