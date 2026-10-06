(() => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const WHATSAPP_NUMBER = "5215512345678";

  /* ---------- Navbar sólida al hacer scroll ---------- */
  const navbar = $("#navbar");
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menú móvil ---------- */
  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Animaciones al hacer scroll ---------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  $$(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- Contadores animados ---------- */
  const animateCount = (el) => {
    const target = Number(el.dataset.count);
    const decimal = el.dataset.decimal ? Number(el.dataset.decimal) : 0;
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = decimal ? (value + 0.5).toFixed(1) : Math.round(value);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = decimal ? (target + 0.5).toFixed(1) : target + "+";
    };
    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  $$("[data-count]").forEach((el) => counterObserver.observe(el));

  /* ---------- Lightbox de galería ---------- */
  const lightbox = $("#lightbox");
  const lbImg = $("#lbImg");
  const items = $$(".gallery-item img");
  let currentIndex = 0;

  const openLightbox = (index) => {
    currentIndex = (index + items.length) % items.length;
    lbImg.src = items[currentIndex].src.replace("w=800", "w=1600");
    lbImg.alt = items[currentIndex].alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  };

  items.forEach((img, i) => {
    img.parentElement.addEventListener("click", () => openLightbox(i));
    img.parentElement.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(i);
      }
    });
  });

  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => openLightbox(currentIndex - 1));
  $("#lbNext").addEventListener("click", () => openLightbox(currentIndex + 1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(currentIndex - 1);
    if (e.key === "ArrowRight") openLightbox(currentIndex + 1);
  });

  /* ---------- Formulario de pedido → WhatsApp ---------- */
  const form = $("#orderForm");
  const formError = $("#formError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const required = ["nombre", "telefono", "producto", "direccion", "cantidad"];
    let valid = true;

    required.forEach((name) => {
      const field = form.elements[name];
      const empty = !field.value.trim();
      field.classList.toggle("invalid", empty);
      if (empty) valid = false;
    });

    if (!valid) {
      formError.hidden = false;
      form.querySelector(".invalid")?.focus();
      return;
    }
    formError.hidden = true;

    const data = Object.fromEntries(new FormData(form).entries());
    const message = [
      "🍓 *Nuevo pedido — Puertos de la Fresa*",
      "",
      `👤 Nombre: ${data.nombre}`,
      `📱 Teléfono: ${data.telefono}`,
      `🍨 Producto: ${data.producto}`,
      `🔢 Cantidad: ${data.cantidad}`,
      `📍 Dirección: ${data.direccion}`,
      data.notas ? `📝 Notas: ${data.notas}` : "",
      "",
      "¡Gracias!",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    form.reset();
  });

  form.addEventListener("input", (e) => e.target.classList.remove("invalid"));

  /* ---------- Año del footer ---------- */
  $("#year").textContent = new Date().getFullYear();
})();
