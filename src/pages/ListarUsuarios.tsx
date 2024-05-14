import { useEffect, useState } from "react";
import { UpdateUserDialog } from "../components/UpdateUserDialog";
import { deleteUser } from "../utils/deleteUser";
import { updateUser } from "../utils/updateUser";
import { UserProps } from "../utils/types/UserProps";

export function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState<UserProps[]>([]);

  async function handleDeletarUsuario(id: number) {
    const resultado = await deleteUser(id);
    if (resultado) {
      const usuariosAtualizados = usuarios.filter(
        (usuario) => usuario.id !== id
      );
      setUsuarios(usuariosAtualizados);
    }
  }

  async function handleAtualizarUsuario(user: UserProps) {
    if (!user.name || !user.email) {
      return;
    }
    try {
      const resultado = await updateUser(user);
      if (resultado) {
        console.log("Dados atualizados!");
        setUsuarios(
          usuarios.map((usuario) => (usuario.id === user.id ? user : usuario))
        );
      } else {
        console.error("Algum erro ocorreu.");
      }
    } catch (err) {
      console.error("Erro interno da API: " + err);
    }
  }

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsuarios(data);
    }
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Deletar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>
                <button onClick={() => handleDeletarUsuario(usuario.id)}>
                  Deletar usuário
                </button>
              </td>
              <td>
                <UpdateUserDialog
                  user={usuario}
                  updateFunction={handleAtualizarUsuario}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
