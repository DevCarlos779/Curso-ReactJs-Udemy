import { useState, useEffect } from "react";

//exporto a função useFetch que criei
export const useFetch = (url) => {
  //crio um state do resultado da requisição
  const [data, setData] = useState(null);

  const [method, setMethod] = useState(null);
  const [config, setConfig] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [id, setId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  const httpConfigDelete = (method, id) => {
    if (method === "DELETE") {
      setConfig({
        method,
      });

      setMethod(method);
      setId(id);
    }
  };

  //faço um useEffect que monitora o url, toda vez que o url mudar ou ele receber url, ele executa
  useEffect(() => {
    //crio uma função assyncrona que espera todas as etapas da requisição
    const fetchData = async () => {
      //faço a requisição

      setLoading(true);

      try {
        const res = await fetch(url);

        //transformo os dados de string para json
        const json = await res.json();

        //seto o state de data como a resposta em json
        setData(json);
      } catch (error) {
        setError("Houve um erro ao mostrar os dados!");
      }

      setLoading(false);
    };

    //executo a função de requisição
    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        setLoading(true);
        let fetchConfig = [url, config];

        const res = await fetch(...fetchConfig);

        const json = await res.json();

        setCallFetch(json);
      }
      if (method === "DELETE") {
        setLoading(true);
        let fetchConfig = [url + "/" + id, config];

        const res = await fetch(...fetchConfig);

        const json = await res.json();
        console.log("resposta delete:" + json);

        setCallFetch(json);
        setId(null);
      }
    };

    httpRequest();
  }, [config, method, url]);

  //digo que ao chamar a função exportada (useFetch) do meu useFetch, ela terá como resultado/retorno os dados recebidos da requisição
  return { data, httpConfig, loading, error, httpConfigDelete };
};
