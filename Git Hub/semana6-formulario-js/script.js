const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

// NOMBRE
nombre.addEventListener("input", () => {
    if (nombre.value.length < 3) {
        errorNombre.textContent = "Mínimo 3 caracteres";
        nombre.className = "invalido";
    } else {
        errorNombre.textContent = "";
        nombre.className = "valido";
    }
    validarTodo();
});

// CORREO
correo.addEventListener("input", () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(correo.value)) {
        errorCorreo.textContent = "Correo inválido";
        correo.className = "invalido";
    } else {
        errorCorreo.textContent = "";
        correo.className = "valido";
    }
    validarTodo();
});

// CONTRASEÑA
password.addEventListener("input", () => {
    if (password.value.length < 8 || !/[0-9]/.test(password.value) || !/[!@#$%^&*]/.test(password.value)) {
        errorPassword.textContent = "Debe tener 8 caracteres, un número y un símbolo";
        password.className = "invalido";
    } else {
        errorPassword.textContent = "";
        password.className = "valido";
    }
    validarTodo();
});

// CONFIRMAR CONTRASEÑA
confirmar.addEventListener("input", () => {
    if (confirmar.value !== password.value) {
        errorConfirmar.textContent = "No coinciden";
        confirmar.className = "invalido";
    } else {
        errorConfirmar.textContent = "";
        confirmar.className = "valido";
    }
    validarTodo();
});

// EDAD
edad.addEventListener("input", () => {
    if (edad.value < 18) {
        errorEdad.textContent = "Debe ser mayor de 18";
        edad.className = "invalido";
    } else {
        errorEdad.textContent = "";
        edad.className = "valido";
    }
    validarTodo();
});

// VALIDAR TODO
function validarTodo() {
    if (
        nombre.className === "valido" &&
        correo.className === "valido" &&
        password.className === "valido" &&
        confirmar.className === "valido" &&
        edad.className === "valido"
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

// SUBMIT
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulario enviado correctamente");
});
