// ===============================
// Lista Dinámica de Productos
// Uso de plantillas básicas en JavaScript
// ===============================

// Arreglo de productos (datos dinámicos)
const productos = [
    {
        nombre: "Cuaderno",
        precio: 2.50,
        descripcion: "Cuaderno de 100 hojas"
    },
    {
        nombre: "Lápiz",
        precio: 0.50,
        descripcion: "Lápiz de grafito"
    }
];

// Referencia al elemento <ul> del HTML
const lista = document.getElementById("listaProductos");

// Función plantilla: combina HTML con datos dinámicos
function crearPlantillaProducto(producto) {
    return `
        <li>
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        </li>
    `;
}

// Función que renderiza toda la lista de productos
function renderizarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        lista.innerHTML += crearPlantillaProducto(producto);
    });
}

// Renderizar la lista automáticamente al cargar la página
renderizarProductos();

// Evento para agregar un nuevo producto ingresado por el usuario
document.getElementById("btnAgregar").addEventListener("click", () => {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = prompt("Ingrese el precio del producto:");
    const descripcion = prompt("Ingrese una descripción del producto:");

    if (nombre && precio && descripcion) {
        const nuevoProducto = {
            nombre: nombre,
            precio: parseFloat(precio),
            descripcion: descripcion
        };

        productos.push(nuevoProducto);
        renderizarProductos();
    } else {
        alert("Debe ingresar todos los datos del producto");
    }
});
