import React from "react";
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};
export declare const Modal: React.FC<ModalProps>;
export {};
