const d = document;

export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = (countdownDate - now) / 1000,
      days = Math.floor(limitTime / (60 * 60 * 24)),
      hours = ("0" + Math.floor((limitTime / (60 * 60)) % 24)).slice(-2),
      minutes = ("0" + Math.floor((limitTime / 60) % 60)).slice(-2),
      seconds = ("0" + Math.floor(limitTime % 60)).slice(-2);

    $countdown.innerHTML  = `<h3>RICHARD VASQUEZ FALTAN: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

    console.log(countdownDate, now, limitTime);
    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = finalMessage;
    }
  }, 1000);
}
