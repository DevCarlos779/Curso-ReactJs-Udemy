import { useState, useEffect, useReducer } from "react";
import { db, app } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

//criei o estado inicial da resposta
const initialState = {
  loading: null,
  error: null,
};

//criei a função que é executada quando a action muda
const insertReducer = (state, action) => {
  //tratando cada caso da action
  switch (action.type) {
    case "LOADIND":
      return { loading: true, error: null };
    case "INSERTED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//criei o hook de inserir documentos passando como parametro a coleção (tabela) do banco para qual desejo enviar o documento
export const useInsertDocuments = (docCollection) => {
  //criei o reducer com respota e dispatch(determina a action)
  //disse q a função que é executada quando a action mudar (dispatch ser usado) é a insertReducer
  //passei o estado inicial
  const [response, dispatch] = useReducer(insertReducer, initialState);

  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  //função que muda a ação usando o dispatch, mas antes verifica se as açoes nao ja foram canceladas/encerradas (deal memory leak)
  const checkCancelBeforeDispach = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  //criei a função do meu hook que vai inserir o documento
  //ele vai receber o documento que vai ser enviado
  const insertDocument = async (document) => {
    //de inicio ele vai passar a action como LOADING
    checkCancelBeforeDispach({
      type: "LOADING",
      payload: insertedDocument,
    });

    try {
      //crio uma variavel de documento com o documento que eu quero enviar mais o horarios que ele vai ser enviado
      const newDocument = { ...document, createdAt: Timestamp.now() };

      //crio uma variavel que vai armazenar o resultado da inserção do documento no banco de dados, usando a função addDoc do firebase
      //passando com parametros a coleção (tabela) para qual desejo enviar o documento
      //e o proprio documento
      const insertedDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

      //após enviar, caso dê tudo certo, defino a action como INSERTED_DOC
      checkCancelBeforeDispach({
        type: "INSERTED_DOC",
        payload: error.message,
      });
    } catch (error) {
      //caso dê algo errado, defino a action como ERROR
      checkCancelBeforeDispach({
        type: "ERROR",
        payload: insertedDocument,
      });
    }
  };

  //ao final de tudo, depois de usar o que desejo no hook, uso o deal memory leak para ter certeza que encerrei todas as operações
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  //depois retorno tudo que desejo usar
  //a função de inserir documento
  //o meu state atual do processo (response)
  return { insertDocument, response };
};
