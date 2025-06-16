import { useState, useEffect, createContext, ReactNode } from "react";

interface AuthContextType {
    auth: any;
    setAuth: React.Dispatch<React.SetStateAction<any>>;
    loading: boolean;
    logOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const authUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `${import.meta.env.VITE_BACKEND_URL}/api/user/profile`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    setAuth(data);
                } else {
                    setAuth({});
                }
            } catch (error) {
                setAuth({});
            }
            setLoading(false);
        };
        authUser();
    }, []);

    const logOut = () => {
        localStorage.removeItem('token');
        setAuth({});
    };

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                loading,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;