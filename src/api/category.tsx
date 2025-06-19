export type Category = {
    name: string;
    id: string;
};

export const getCategories = async (token: string) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/categories/dashboard`,
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
            throw new Error(data.msg || "Failed to get tags");
        }
        return data;
    } catch (error) {
        throw error;
    }
};
