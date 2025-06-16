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
        className={`${alert.error ? 'bg-red-500' : 'bg-green-500}'} 
        text-white text-center p-2 rounded-md my-2`}
        >
            {alert.msg}
        </div>
    );
};

export default Alerta