import React, { useState } from 'react';

function InputTask({add}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    add(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-task">
      <input
        type="text"
        placeholder="New task ..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default InputTask;
