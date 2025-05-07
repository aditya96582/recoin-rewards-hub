
import React, { createContext, useState, useContext, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  recoins: number;
  avatar?: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // In a real app, this would be an API call to validate credentials
    try {
      // For demo purposes, we'll simulate a successful login with mock data
      // In a real app, you'd verify credentials with a backend
      if (email && password) {
        const mockUser: User = {
          id: "user-123",
          name: "Jane Doe",
          email: email,
          recoins: 145,
          avatar: "JD"
        };
        
        // Save to localStorage for persistence
        localStorage.setItem("user", JSON.stringify(mockUser));
        setUser(mockUser);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
