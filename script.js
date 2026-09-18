// Navbar mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open")),
  );

// Typewriter Hero
const words = [
  "Pengembang SIMBADA Madina",
  "Berpengalaman Sejak 2023",
  "Panyabungan, Mandailing Natal",
];
const typedEl = document.getElementById("typed");
let wi = 0,
  ci = 0,
  deleting = false;
function typeLoop() {
  const word = words[wi];
  if (!deleting) {
    ci++;
    if (ci >= word.length) {
      ci = word.length;
      deleting = true;
      setTimeout(typeLoop, 1400);
      typedEl.textContent = word;
      return;
    }
  } else {
    ci--;
    if (ci <= 0) {
      ci = 0;
      deleting = false;
      wi = (wi + 1) % words.length;
    }
  }
  typedEl.textContent = word.slice(0, ci);
  setTimeout(typeLoop, deleting ? 35 : 70);
}
typeLoop();

// Slider Testimoni
const slides = Array.from(document.querySelectorAll(".testi-card"));
const dotsWrap = document.getElementById("dots");
let idx = 0,
  timer;

slides.forEach((_, i) => {
  const d = document.createElement("i");
  if (i === 0) d.classList.add("on");
  d.addEventListener("click", () => goTo(i));
  dotsWrap.appendChild(d);
});
const dots = Array.from(dotsWrap.children);

function goTo(i) {
  idx = (i + slides.length) % slides.length;
  slides.forEach((s, k) => s.classList.toggle("active", k === idx));
  dots.forEach((d, k) => d.classList.toggle("on", k === idx));
  restart();
}
function restart() {
  clearInterval(timer);
  timer = setInterval(() => goTo(idx + 1), 5000);
}
document
  .getElementById("prevBtn")
  .addEventListener("click", () => goTo(idx - 1));
document
  .getElementById("nextBtn")
  .addEventListener("click", () => goTo(idx + 1));
restart();

// Download CV -> print / save PDF (ganti dengan link file CV asli bila sudah ada)
["downloadCvHero", "downloadCvMain", "downloadCvSide"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", () => window.print());
});

// Form kontak (demo front-end)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = e.target.nama.value.trim();
  document.getElementById("formNote").textContent =
    `Terima kasih ${nama || "Anda"}! Pesan Anda sudah tercatat. Untuk respon cepat, hubungi saya via WhatsApp 0819-3252-0077.`;
  e.target.reset();
});
