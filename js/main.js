  function mostrarFechaCompleta() {
    const ahoraFecha = new Date();

    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                   "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const diaSemana = dias[ahoraFecha.getDay()];
    const diaMes = ahoraFecha.getDate();
    const mes = meses[ahoraFecha.getMonth()];
    const anio = ahoraFecha.getFullYear();

    const fechaFormateada = `${diaSemana} ${diaMes} de ${mes} de ${anio}`;

    document.getElementById("fechaCompleta").textContent = fechaFormateada;
  }
    mostrarFechaCompleta();

const estado = document.getElementById("estado");
function actualizarReloj() {
  const ahora = new Date();
  const horas = ahora.getHours();
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");

  const horasFormateadas = String(horas).padStart(2, "0");
  document.getElementById(
    "reloj"
  ).textContent = `${horasFormateadas} : ${minutos} : ${segundos}`;

  estado.textContent = horas >= 12 ? "PM" : "AM";
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
