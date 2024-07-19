import React from 'react';

const NegociosList = ({ businesses, updateBusiness, removeBusiness }) => {
  return (
    <div>
      <h2>Negócios</h2>
      <ul>
        {businesses.map((business, index) => (
          <li key={index}>
            <span>{business.name}</span>
            <button onClick={() => removeBusiness(index)}>Remover</button>
            <button onClick={() => updateBusiness(index, prompt("Editar Negócio", business.name))}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NegociosList;
