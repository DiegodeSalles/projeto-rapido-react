import { useEffect, useState } from "react";
import styles from "../styles/CriarPostagem.module.css";

interface UserProps {
  id: number;
  name: string;
  email: string;
}

interface formDataProps {
  authorId: number;
  title: string;
  content: string;
  publishedAt: Date;
  published: boolean;
}

export function CriarPostagem() {
  const [usuarios, setUsuarios] = useState<UserProps[]>([]);
  const [formData, setFormData] = useState<formDataProps>({
    authorId: 0,
    title: "",
    content: "",
    publishedAt: new Date(),
    published: true,
  });
  const [invalid, setInvalid] = useState(false);

  async function handleCreatePost(e: React.FormEvent) {
    const resultado = document.querySelector("#resultado");
    e.preventDefault();
    if (!formData.content || !formData.title) {
      setInvalid(() => true);
      resultado!.textContent =
        "O campo título e postagem não podem estar vazios!";
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/user/${formData.authorId}/post/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        if (invalid) setInvalid(() => false);
        resultado!.textContent = "Postagem realizada com sucesso!";
        setFormData({
          authorId: formData.authorId,
          title: "",
          content: "",
          publishedAt: new Date(),
          published: true,
        });
      } else {
        console.error("Erro: " + response.statusText);
      }
    } catch (err) {
      console.error("Erro no servidor da API: " + err);
    }
  }

  function handleInputData(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  }

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsuarios(data);
      if (data.length > 0) {
        setFormData({
          authorId: data[0].id,
          title: "",
          content: "",
          publishedAt: new Date(),
          published: true,
        });
      }
    }
    getUsers();
  }, []);
  return (
    <div className={styles.container}>
      <form className={styles.formulario} onSubmit={handleCreatePost}>
        <label htmlFor="authorId">Usuarios</label>
        <select
          name="authorId"
          onChange={handleInputData}
          value={formData.authorId}
          id="authorId"
        >
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.name}
            </option>
          ))}
        </select>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          onChange={handleInputData}
          value={formData.title}
          name="title"
          id="title"
          required
        />
        <label htmlFor="content">Postagem:</label>
        <textarea
          name="content"
          onChange={handleInputData}
          value={formData.content}
          id="content"
          rows={20}
          required
        />
        <button>Publicar</button>
      </form>
      <div className={styles.resultado}>
        <span
          className={invalid ? styles.erro : styles.sucesso}
          id="resultado"
        ></span>
      </div>
    </div>
  );
}
