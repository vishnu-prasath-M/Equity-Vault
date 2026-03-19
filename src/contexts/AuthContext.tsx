import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface SavedIdea {
  id: string;
  niche: string;
  category: string;
  marketSize: string;
  capitalRequired: string;
  trending?: boolean;
  savedAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  savedIdeas: SavedIdea[];
  login: (user: User) => void;
  logout: () => void;
  saveIdea: (idea: Omit<SavedIdea, 'savedAt'>) => boolean;
  removeIdea: (ideaId: string) => void;
  isIdeaSaved: (ideaId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [savedIdeas, setSavedIdeas] = useState<SavedIdea[]>([]);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('equityvault_user');
    const storedIdeas = localStorage.getItem('equityvault_saved_ideas');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedIdeas) {
      setSavedIdeas(JSON.parse(storedIdeas));
    }
  }, []);

  // Persist auth state to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('equityvault_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('equityvault_user');
    }
  }, [user]);

  // Persist saved ideas to localStorage
  useEffect(() => {
    localStorage.setItem('equityvault_saved_ideas', JSON.stringify(savedIdeas));
  }, [savedIdeas]);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setSavedIdeas([]);
    localStorage.removeItem('equityvault_user');
    localStorage.removeItem('equityvault_saved_ideas');
  };

  const saveIdea = (idea: Omit<SavedIdea, 'savedAt'>): boolean => {
    if (!isAuthenticated) return false;
    
    if (isIdeaSaved(idea.id)) {
      return false; // Already saved
    }

    const newIdea: SavedIdea = {
      ...idea,
      savedAt: new Date().toISOString(),
    };

    setSavedIdeas(prev => [newIdea, ...prev]);
    return true;
  };

  const removeIdea = (ideaId: string) => {
    setSavedIdeas(prev => prev.filter(idea => idea.id !== ideaId));
  };

  const isIdeaSaved = (ideaId: string) => {
    return savedIdeas.some(idea => idea.id === ideaId);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        savedIdeas,
        login,
        logout,
        saveIdea,
        removeIdea,
        isIdeaSaved,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
