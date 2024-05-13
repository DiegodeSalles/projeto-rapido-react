import { useState } from "react";
import styles from "../styles/CriarUsuario.module.css";

interface UserDataProps {
  email: string;
  name: string;
}

export default function CriarUsuario() {
  const [formData, setFormData] = useState<UserDataProps>({
    email: "",
    name: "",
  });

  function handleInputData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  }

  async function handleCreateUser(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Usuário criado com sucesso!");
        setFormData({ email: "", name: "" });
      } else {
        console.error("Erro: " + response.statusText);
      }
    } catch (err) {
      console.log("Erro no servidor da API: " + err);
    }
    console.log(formData);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.conteudo}>
        <form onSubmit={handleCreateUser}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={handleInputData}
            value={formData.email}
            name="email"
            id="email"
            required
          />
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            onChange={handleInputData}
            value={formData.name}
            name="name"
            id="name"
            required
          />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}
