// src/contexts/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import client from "../services/api-client.ts";

interface AuthData {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthData {
  login: (access: string, refresh: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>({
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedAccessToken = localStorage.getItem("accessToken");
        const storedRefreshToken = localStorage.getItem("refreshToken");

        if (storedAccessToken && storedRefreshToken) {
          try {
            await client.post("auth/jwt/verify/", {
              token: storedAccessToken,
            });

            setAuthData({
              accessToken: storedAccessToken,
              refreshToken: storedRefreshToken,
              isAuthenticated: true,
            });
          } catch (verifyError) {
            try {
              const response = await client.post("auth/jwt/refresh/", {
                refresh: storedRefreshToken,
              });

              const newAccessToken = response.data.access;
              localStorage.setItem("accessToken", newAccessToken);

              setAuthData({
                accessToken: newAccessToken,
                refreshToken: storedRefreshToken,
                isAuthenticated: true,
              });
            } catch (refreshError) {
              console.error("Refresh token failed:", refreshError);
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");

              setAuthData({
                accessToken: null,
                refreshToken: null,
                isAuthenticated: false,
              });
            }
          }
        }
      } catch (error) {
        // Any unexpected error: clear storage and state
        console.error("Error initializing auth from localStorage:", error);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setAuthData({
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        });
      }
    };

    initializeAuth();
  }, []);

  const login = (access: string, refresh: string) => {
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);

    setAuthData({
      accessToken: access,
      refreshToken: refresh,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setAuthData({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
