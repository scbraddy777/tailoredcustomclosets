const navToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    mobileMenu.classList.toggle("is-open");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("is-open");
    });
  });
}

const mailForm = document.querySelector("[data-mail-form]");

if (mailForm) {
  mailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(mailForm);
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const city = data.get("city");
    const projectType = data.get("projectType");
    const details = data.get("details");

    const subject = `Consultation Request - ${projectType || "Custom Project"}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `City: ${city}`,
      `Project type: ${projectType}`,
      "",
      "Project details:",
      details,
    ].join("\n");

    window.location.href = `mailto:Reed@tailoredcustomclosets.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
