import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocuments } from "../../hooks/useInsertDocuments";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { insertDocument, response } = useInsertDocuments();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.createPost}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            value={title}
            placeholder="Insira o título do post"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            required
            value={image}
            placeholder="Insira a imagem do post"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            type="text"
            name="body"
            value={body}
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            value={tags}
            placeholder="Insira as tags (separadas por vírgula)"
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {/* {!loading && <button className="btn">Cadastrar</button>} */}
        {/* {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )} */}
        {/* {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  );
};

export default CreatePost;
