export function countDown(countdown, startCountDown, deadLine) {
  const d = document;
  let deadline = d.querySelector(deadLine);

  d.addEventListener("click", (e) => {
    if (e.target.matches(startCountDown)) {
      let finalDate = new Date(deadline.value);

      if (isNaN(finalDate))
        return console.warn("La fecha No se ingreso ó esta Incorrecta");
      if (finalDate < new Date())
        return console.warn(
          "La fecha final no puede ser menor que la fecha actual"
        );
      if (!(finalDate instanceof Date))
        return console.error("No es una fecha valida");

      d.querySelector(deadLine).hidden = true;
      d.querySelector(startCountDown).hidden = true;
      const countDown = setInterval(() => {
        let t = remainingTime(finalDate);
        //   console.log(t);
        d.querySelector(countdown).innerHTML = `<h3>
               ${t.remanenteEnDias} días
               ${t.remanenteEnHoras} horas
               ${t.remanenteEnMinutos} minutos
               ${t.remanenteEnSegundos} segundos
               </h3>`;

        if (t.remainingSeconds <= 1) {
          clearInterval(countDown);
          d.querySelector(deadLine).hidden = false;
          d.querySelector(startCountDown).hidden = false;
          d.querySelector(deadLine).value = "";
          d.querySelector(
            countdown
          ).innerHTML = `<h3> El conteo ha finalizado </h3>`;
        }
      }, 1000);
    }
  });
}

const remainingTime = (finalDate) => {
  let remainingSeconds = (finalDate.getTime() - new Date().getTime()) / 1000;
  let remanenteEnSegundos = Math.floor(remainingSeconds % 60);
  let remanenteEnMinutos = Math.floor((remainingSeconds / 60) % 60);
  let remanenteEnHoras = Math.floor((remainingSeconds / 3600) % 24);
  let remanenteEnDias = Math.floor((remainingSeconds / 86400) % 365);

  return {
    remanenteEnDias,
    remanenteEnHoras,
    remanenteEnMinutos,
    remanenteEnSegundos,
    remainingSeconds,
  };
};
