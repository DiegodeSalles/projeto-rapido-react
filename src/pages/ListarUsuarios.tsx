import { useEffect, useState } from "react";

interface UserProps {
  id: number;
  name: string;
  email: string;
}

export function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState<UserProps[]>([]);

  function handleDeletarUsuario(id: number) {
    deletarUsuario(id);
  }

  async function deletarUsuario(id: number) {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`Usuário com ID ${id} foi deletado com sucesso.`);
        const usuariosAtualizados = usuarios.filter(
          (usuario) => usuario.id !== id
        );
        setUsuarios(usuariosAtualizados);
      } else {
        console.error(`Erro ao deletar o usuário ${id}`);
      }
    } catch (err) {
      console.log("Erro ao se comunicar com a API: " + err);
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
