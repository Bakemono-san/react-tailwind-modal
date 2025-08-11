# TailwindCSS React Modal

A simple modal component for React, styled with TailwindCSS.

## Installation

```bash
npm install tailwindcss-react-modal
```

> **Note:** Ensure TailwindCSS is set up in your project.

## Usage

```jsx
import { Modal } from "tailwindcss-react-modal";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello">
        <p>This is a Tailwind modal!</p>
      </Modal>
    </>
  );
}
```

## Features

- Simple and accessible modal for React
- Styled with TailwindCSS
- Easy to integrate

## Requirements

- React 18+
- TailwindCSS configured in your project

## Modal Props

| Name     | Type         | Description                 |
|----------|--------------|-----------------------------|
| isOpen   | `boolean`    | Controls modal visibility   |
| onClose  | `() => void` | Callback to close the modal |
| children | `ReactNode`  | Modal content               |

## License

MIT

## Contributing

Contributions are welcome! Please open issues or pull requests.