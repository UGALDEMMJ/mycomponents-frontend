  export type Tag = {
    name: string;
    id: string;
  };

  export interface AlertaType {
    msg: string;
    error: boolean;
  };


export const getTags = async (token: string) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/tags/dashboard`,
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
