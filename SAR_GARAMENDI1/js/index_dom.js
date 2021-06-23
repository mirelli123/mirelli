import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import { countDown } from "./countdown.js";
import countdown from "./cuenta_regresiva.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.ogg", "#activar-alarma", "#desactivar-alarma");
  countDown("#countDown", "#startcountdown", "#deadline");
  countdown(
    "countdown",
    "Mar 19 2022 00:00:00",
    " HAPPY BIRTHDAY  RICHARD"
  );
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".circle", ".blackBox");
});
