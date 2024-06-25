import React from 'react';

const Modal = ({ show, onClose, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs w-full">
        <img src={content.imageUrl} alt={content.name} className="w-full h-40 object-contain mb-4 rounded-t-lg" />
        <h2 className="text-xl font-semibold mb-2 text-center">{content.name}</h2>
        <p className="text-center">{content.type}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">Close</button>
      </div>
    </div>
  );
};

export default Modal;
