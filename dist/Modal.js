import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen)
        return null;
    return ReactDOM.createPortal(_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: _jsx("div", { className: "fixed inset-0 bg-black/35 transition-opacity flex items-center justify-center", children: _jsx("div", { className: "relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-md w-full", children: children }) }) }), document.body);
};
