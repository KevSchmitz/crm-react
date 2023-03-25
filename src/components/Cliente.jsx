import { Form, useNavigate, redirect } from "react-router-dom";
import { obtenerCliente } from "../data/clientes";
import { eliminarCliente } from "../data/clientes.js";

export async function action({ params }) {
  await eliminarCliente(params.clienteId);
  return redirect("/");
}

const Cliente = ({ cliente }) => {
  const navigate = useNavigate();

  const { nombre, empresa, email, telefono, id } = cliente;

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        {" "}
        {/* Te da un resultado similar a un marginTop-2 y si tienes varios elementos, afecta a cada uno de ellos en vez de colocar a cada hijo un marginTop */}
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className="p-6">
        <p className="text-grey-600">
          <span className="text-gray-800 font-bold">Email: </span> {email}
        </p>
        <p className="text-grey-600">
          <span className="text-gray-800 font-bold">Tel: </span> {telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>

        <Form
          method="post"
          action={`clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("¿Deseas eliminar este registro?")) {
              e.preventDefault(); // La acción por default es eliminar al darle aceptar y al darle a cancelar, si colocamos el '!' entraría en false, por lo que permite ejecutar la función y no evitar el preventDefault que en este caso es eliminar
            }
          }}
        >
          {/* Puedes enviar la action a donde quieras */}
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Cliente;
