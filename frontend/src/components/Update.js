import React, { useState, useEffect } from 'react';
import { updateData, getChampion } from './apiService';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [name, setName] = useState('');
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const getItem = async () => {
      const data = await getChampion(id);
      setName(data.data.name);
    };

    getItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateData(id, { name });
    history.push('/');
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
