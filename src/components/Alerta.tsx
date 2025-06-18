import React from 'react'

interface AlertProps {
    alert: {
        msg: string;
        error: boolean;
    } | null;
}

const Alerta: React.FC<AlertProps> = ({ alert}) => {
    if(!alert?.msg) return null;

    return (
        <div
        className={`${alert.error ? 'bg-red-400' : 'bg-green-500}'} text-white text-center rounded-md py-2 m-5`}
        >
            {alert.msg}
        </div>
    );
};

export default Alerta