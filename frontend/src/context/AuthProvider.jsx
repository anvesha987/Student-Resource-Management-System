import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { getToken, removeToken } from "../utils/auth";

function AuthProvider({ children }) {
  const [token, setTokenState] = useState(() => getToken());
  const [user, setUser] = useState(null);

  const logout = () => {
    removeToken();
    setTokenState(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, setUser, setTokenState, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
