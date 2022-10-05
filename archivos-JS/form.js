let infoForm = [];

class Datos {
  constructor(nombre, tel, correo) {
    this.nombre = nombre;
    this.tel = tel;
    this.correo = correo;
  }
}

const formulario = document.querySelector("#formulario");
const button = document.querySelector("#submitButton");

//crear el evento
formulario.addEventListener("submit", validarFormulario);

//mi funcion
function validarFormulario(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const tel = document.querySelector("#tel").value;
  const correo = document.querySelector("#correo").value;

  const respuesta = document.getElementById("respuesta");

  respuesta.textContent = `Hola ${nombre}, Gracias por comprar con nosotros. En breve nos contactaremos contigo al tel:${tel} y/o correo:${correo} para definir el modo de pago. Esperamos verte pronto..`;

  infoForm.push(new Datos(nombre, tel, correo));

  Swal.fire({
    position: "center",
    icon: "success",
    html: `<span class="swal-title"> Hola ${nombre}, Gracias por comprar con nosotros. En breve nos contactaremos contigo al tel:${tel} y/o correo:${correo} para definir el modo de pago. Esperamos verte pronto..</span>`,
    background: "rgba(0, 0, 0, 0.265)",
    showConfirmButton: false,
    timer: 1500,
  });
}

sessionStorage.setItem("guardarForm", JSON.stringify(infoForm));
let guardarForm = JSON.parse(sessionStorage.getItem("guardarForm"));

