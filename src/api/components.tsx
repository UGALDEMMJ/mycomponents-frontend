
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

export const getComponents = async () => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/components/dashboard`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
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

export const updateComponentClicks = async (componentId: string) => {
    try {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/components/clicks/${componentId}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error updating clicks:", error);
    }
};

export const getMostUsed = async () => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/components/mostused`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
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