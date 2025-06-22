
export type Component = {
    id: string;
    user_id: string;
    category_id: string | null;
    name: string;
    description: string;
    code: string;
    created_at?: Date;
    tags?:[]
};

export const getComponents = async (token: string) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/components/dashboard`,
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
            throw new Error(data.msg || "Failed to get components");
        }
        return data;
    } catch (error) {
        throw error;
    }
};
