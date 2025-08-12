# 🟦 TailwindCSS React Modal

A lightweight, accessible modal component for React, styled with TailwindCSS.

---

## 🚀 Installation

```bash
npm install tailwindcss-react-modal
```

> **Prerequisite:** Make sure [TailwindCSS](https://tailwindcss.com/docs/installation) is set up in your project.

### TailwindCSS v3+ Setup

Add the following to your CSS file to ensure Tailwind scans the modal package for class names:

```css
@source "../node_modules/tailwindcss-react-modal/**/*.{js,jsx,ts,tsx}";
```

---

## ✨ Features

- ⚡ **Simple & Accessible**: Keyboard and screen reader friendly.
- 🎨 **TailwindCSS Styled**: Easily customizable via Tailwind utility classes.
- 🛠️ **Easy Integration**: Plug-and-play with any React project.

---

## 🧑‍💻 Usage

```jsx
import { Modal } from "tailwindcss-react-modal";
import React from "react";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Hello 👋</h2>
        <p>This is a Tailwind modal!</p>
        <button
          className="mt-6 px-4 py-2 bg-gray-200 rounded"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </Modal>
    </>
  );
}
```

---

## ⚙️ Props

| Name     | Type         | Required | Description                 |
|----------|--------------|----------|-----------------------------|
| isOpen   | `boolean`    | Yes      | Controls modal visibility   |
| onClose  | `() => void` | Yes      | Callback to close the modal |
| children | `ReactNode`  | Yes      | Modal content               |

---

## 📋 Requirements

- **React** `^18.0.0` or newer
- **TailwindCSS** `^3.0.0` or newer

---

## 📝 License

[MIT](LICENSE)

---

## 🤝 Contributing

Contributions are welcome!  
Please open issues or pull requests for bug fixes, improvements, or new features.

---

## 📦 Related

-
