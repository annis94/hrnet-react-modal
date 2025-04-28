import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Modal } from './index';
import './index.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        className="p-4 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="text-center">
          Hello from Modal!
        </div>
      </Modal>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
