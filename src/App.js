import React, { useState } from 'react';
import NegociosList from './components/NegociosList';
import NegociosForm from './components/NegociosForm';
import './App.css';

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const addBusiness = (business) => {
    setBusinesses([...businesses, business]);
  };

  const updateBusiness = (index, updatedBusiness) => {
    const newBusinesses = businesses.map((business, i) => 
      i === index ? updatedBusiness : business
    );
    setBusinesses(newBusinesses);
  };

  const removeBusiness = (index) => {
    setBusinesses(businesses.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Lista de Negócios</h1>
      <NegociosForm addBusiness={addBusiness} />
      <NegociosList 
        businesses={businesses} 
        updateBusiness={updateBusiness} 
        removeBusiness={removeBusiness} 
      />
    </div>
  );
};

export default App;
