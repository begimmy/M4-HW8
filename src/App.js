import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
 useEffect(() => {
    const saveNames = localStorage.getItem('names');
    if (saveNames) {
      setNames(JSON.parse(saveNames));
    }
  }, []);

 useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const nameSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setNames([...names, name]);
      setName('');
    }
  };

  return (
    <div>
      <form onSubmit={nameSubmit}>
        <input
          type="text"
          value={name}
          onChange={nameChange}
          
        />
        <button type="submit">Add name</button>
      </form>
      <ul>
        {names.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
