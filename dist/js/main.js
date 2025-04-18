"use strict";
function dropMenu() {
    const $button = document.querySelector(".head__btn");
    const $iconClose = document.querySelector(".head__icon--close");
    const $menu = document.querySelector(".nav");
    $button === null || $button === void 0 ? void 0 : $button.addEventListener("click", () => {
        $button === null || $button === void 0 ? void 0 : $button.classList.toggle("head__btn--active");
        $iconClose === null || $iconClose === void 0 ? void 0 : $iconClose.classList.toggle("head__icon--close--active");
        $menu === null || $menu === void 0 ? void 0 : $menu.classList.toggle("nav--active");
    });
}
dropMenu();
