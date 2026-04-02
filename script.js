const expandPosterButton = document.getElementById("expandPoster");
const jumpArchiveButton = document.getElementById("jumpArchive");
const posterModal = document.getElementById("posterModal");
const closePosterBackdrop = document.getElementById("closePoster");
const closePosterButton = document.getElementById("closePosterButton");

const openModal = () => {
  posterModal.classList.add("is-open");
  posterModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  posterModal.classList.remove("is-open");
  posterModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

if (expandPosterButton) {
  expandPosterButton.addEventListener("click", openModal);
}

if (jumpArchiveButton) {
  jumpArchiveButton.addEventListener("click", () => {
    document.getElementById("archive")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (closePosterBackdrop) {
  closePosterBackdrop.addEventListener("click", closeModal);
}

if (closePosterButton) {
  closePosterButton.addEventListener("click", closeModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && posterModal.classList.contains("is-open")) {
    closeModal();
  }
});
