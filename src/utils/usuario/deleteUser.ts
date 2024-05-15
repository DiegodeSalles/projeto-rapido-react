export async function deleteUser(id: number) {
  try {
    const response = await fetch(`http://localhost:3000/user/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log(`Usuário com ID ${id} foi deletado com sucesso.`);
      return true;
    } else {
      console.error(`Erro ao deletar o usuário ${id}`);
      return false;
    }
  } catch (err) {
    console.log("Erro ao se comunicar com a API: " + err);
    return false;
  }
}
