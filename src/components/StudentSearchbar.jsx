import React, { useState } from 'react';

const StudentSearchbar = ({ onFilter }) => {
  const [name, setName] = useState('');

  const handleFilter = () => {
    onFilter(name);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleFilter}>Search</button>
    </div>
  );
};

export default StudentSearchbar;
