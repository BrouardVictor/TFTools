import React, { useEffect, useState } from 'react';
import { getChampion, deleteData } from './apiService';
import { Link } from 'react-router-dom';

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await getChampion();
      setItems(data.data);
    };

    getItems();
  }, []);

  const handleDelete = async (id) => {
    await deleteData(id);
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>List of Items</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={`/update/${item.id}`}>Edit</Link>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
