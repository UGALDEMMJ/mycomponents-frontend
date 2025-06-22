export interface User {
    id:string;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    token: string;
    confirmed: boolean;
}

export const getUser = async (token: string) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/user/profile`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.msg || "Failed to get the user");
        }
        return data;
    } catch (error) {
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/user/users`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.msg || "Failed to get the user");
        }
        return data;
    } catch (error) {
        throw error;
    }
};
