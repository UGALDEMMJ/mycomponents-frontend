import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="outline-1 outline-cyan-400 rounded-lg p-6 max-w-[90vw] max-h-[80vh] w-full sm:w-[50vw] overflow-y-auto relative bg-black"
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
