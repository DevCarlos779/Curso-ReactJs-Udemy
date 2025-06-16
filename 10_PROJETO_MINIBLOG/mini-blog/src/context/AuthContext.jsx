import { useContext, createContext } from "react";

//cria contexto
const AuthContext = createContext();

//função de provider do contexto
export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

//usa o contexto
export function useAuthValue() {
  return useContext(AuthContext);
}
