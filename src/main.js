for (const card of document.querySelectorAll("[data-question-card]")) {
  const answer = card.querySelector(".card-body + .card-body");
  const toggle = () => {
    const hidden = answer.classList.toggle("hidden");
    card.setAttribute("aria-expanded", String(!hidden));
  };
  card.addEventListener("click", () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      toggle();
    }
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });
}
