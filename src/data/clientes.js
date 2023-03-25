export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();

  return resultado;
}

export async function obtenerCliente(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const resultado = await respuesta.json();

  return resultado;
}

export async function agregarCliente(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos), // Pasamos los datos de un objeto a un string para que puedar ser leido en el formato json
      headers: {
        // Para que sepa que el tipo de contenido es un formato json
        "Content-Type": "application/json",
      },
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function actualizarCliente(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT", // Es el método para actualizar tambien puede usarse PATCH, pero el mas común es PUT
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarCliente(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE", // Es el método para eliminar
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}
