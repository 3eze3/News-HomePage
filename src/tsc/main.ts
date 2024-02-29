function dropMenu(): void {
  const $button = document.querySelector(".head__btn");
  const $iconClose = document.querySelector(".head__icon--close");
  const $menu = document.querySelector(".nav");
  $button?.addEventListener("click", () => {
    $button?.classList.toggle("head__btn--active");
    $iconClose?.classList.toggle("head__icon--close--active");
    $menu?.classList.toggle("nav--active");
  });
}
dropMenu();
