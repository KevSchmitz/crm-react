import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Error from "../components/Error";
import Formulario from "../components/Formulario";
import { agregarCliente } from "../data/clientes";

export async function action({ request }) {
  const formData = await request.formData(); // Hay una propiedad del formData que se llama entries, Object.fromEntries traerá los datos desde ahí
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  // Validación
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios"); // Se usa push ya que no se está creando un State
  }

  let regex = new RegExp( // Es una expresión regular, ya está creada y permite para validar el email
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("El email no es válido");
  }

  // Retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarCliente(datos); // Al ser una función asíncrona, no quiero que se ejecute el siguiente código hasta que no finalice esta función

  return redirect("/"); // Para redireccionar con actions y loaders
}

const NuevoCliente = () => {
  const errores = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)} // Para ir al inicio es con '/' pero para ir a la página anterior es con -1.
          // Es preferible utilizarlo cuando quieres redireccionar por medio de un botón.
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post">
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
