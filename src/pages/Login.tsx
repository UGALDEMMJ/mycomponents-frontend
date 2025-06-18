import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

const Login = () => {
    type UserInfo = {
        email: string;
        password: string;
    };

    interface AlertaType {
        msg: string;
        error: boolean;
    }

    const [user, setUser] = useState<UserInfo>({ email: "", password: "" });
    const [alert, setAlert] = useState<AlertaType | null>(null);
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        e.preventDefault();

        if (!user.email || !user.password) {
            setAlert({ msg: "Invalid Credentials", error: true });
            return;
            
        }
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                },
            );
            console.log(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`)
            const data = await response.json();
            if (!response.ok) {
                setAlert({ msg: data.msg || "Failed Login", error: true });
                return;
            }

            localStorage.setItem("token", data.token);
            setAuth({ id: data.id, email: data.email }); 
            setAlert({ msg: "Successful Login", error: false });
            navigate("/admin");
        } catch (error) {
            setAlert({ msg: "Conexion Error", error: true });
        }
    };

    return (
        <div className="relative flex h-screen flex-col items-center justify-center bg-cover bg-center font-space-mono">
            <div className="absolute inset-0 bg-black"></div>
            <div className="z-100 relative max-w-md sm:max-w-md mt-6 p-1 bg-gradient-to-tr from-black to-cyan-500 shadow-md overflow-hidden sm:rounded-xl rounded-xl">
                <div className="bg-black w-full h-full rounded-xl">
                    <header className="rounded-lg bg-black p-4">
                        <div className="flex justify-center">
                            <h1 className="text-white text-2xl">Login</h1>
                        </div>
                    </header>
                    <div className="mb-8 space-y-3">
                        <p className="text-white text-xl font-semibold text-center my-10 mx-10">
                            Sign in to manage your <br />
                            <span className="text-cyan-500">Components</span>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="space-y-1 m-4">
                            {alert?.msg && <Alerta alert={alert} />}
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="email"
                                ></label>
                                <input
                                    className="border rounded-md h-10 w-full py-2 text-sm px-4 border-cyan-950 placeholder-white text-white focus:outline focus:outline-cyan-500"
                                    id="email"
                                    placeholder="Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="password"
                                ></label>
                                <div className="relative">
                                    <input
                                        className="border rounded-md h-10 w-full py-2 text-sm px-4 border-cyan-950 placeholder-white text-white focus:outline focus:outline-cyan-500 "
                                        id="password"
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        value={user.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-tr from-black to-cyan-500 group-hover:from-black group-hover:to-cyan-500 text-white ">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-transparent">
                                    Submit
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
