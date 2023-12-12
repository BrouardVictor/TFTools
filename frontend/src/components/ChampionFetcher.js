import React, { useState } from 'react';
import { getChampion } from './apiService';

const ChampionFetcher = () => {
  const [name, setName] = useState('');
  const [championData, setChampionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getChampion(name);
      setChampionData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Fetch Champion Data</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Champion Name"
      />
      <button onClick={handleFetch} disabled={loading}>
        Get
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {championData && <pre>{JSON.stringify(championData, null, 2)}</pre>}
    </div>
  );
};

export default ChampionFetcher;
