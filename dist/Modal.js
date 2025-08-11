import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative", children: [_jsx("button", { onClick: onClose, className: "absolute top-2 right-2 text-gray-500 hover:text-gray-800", children: "\u2715" }), children] }) }));
};
