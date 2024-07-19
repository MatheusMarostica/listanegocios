import React, { useState } from 'react';

const NegociosForm = ({ addBusiness }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      addBusiness({ name });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Novo Negócio" 
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default NegociosForm;
