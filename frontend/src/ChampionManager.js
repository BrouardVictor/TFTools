import React, { useState, useEffect } from 'react';

function ChampionManager() {
    const [champions, setChampions] = useState([]);
    const [newChampion, setNewChampion] = useState('');
    const [updateChampionName, setUpdateChampionName] = useState('');
    const [championToUpdate, setChampionToUpdate] = useState(null);
    const apiUrl = 'http://localhost:8000';

    useEffect(() => {
        fetchChampions();
    }, []);

    const fetchChampions = () => {
        fetch(`${apiUrl}/champions`)
            .then(response => response.json())
            .then(data => setChampions(data))
            .catch(error => console.error('Error fetching champions:', error));
    };

    const handleAddChampion = () => {
        fetch(`${apiUrl}/champion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newChampion }),
        })
        .then(fetchChampions)
        .catch(error => console.error('Error adding champion:', error));
        setNewChampion('');
    };

    const handleUpdateChampion = () => {
        fetch(`${apiUrl}/champion/${championToUpdate.name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...championToUpdate, name: updateChampionName }),
        })
        .then(fetchChampions)
        .catch(error => console.error('Error updating champion:', error));
        setChampionToUpdate(null);
        setUpdateChampionName('');
    };

    const handleDeleteChampion = (championName) => {
        fetch(`${apiUrl}/champion/${championName}`, { method: 'DELETE' })
            .then(fetchChampions)
            .catch(error => console.error('Error deleting champion:', error));
    };

    const startUpdate = (champion) => {
        setChampionToUpdate(champion);
        setUpdateChampionName(champion.name);
    };

    return (
        <div>
            <h1>Champion Manager</h1>
            <div>
                <input
                    type="text"
                    value={newChampion}
                    onChange={e => setNewChampion(e.target.value)}
                />
                <button onClick={handleAddChampion}>Add Champion</button>
            </div>
            {championToUpdate && (
                <div>
                    <h2>Update Champion</h2>
                    <input
                        type="text"
                        value={updateChampionName}
                        onChange={e => setUpdateChampionName(e.target.value)}
                    />
                    <button onClick={handleUpdateChampion}>Update</button>
                </div>
            )}
            <h2>Champion List</h2>
            <ul>
                {champions.map(champion => (
                    <li key={champion.name}>
                        {champion.name}
                        <button onClick={() => startUpdate(champion)}>Update</button>
                        <button onClick={() => handleDeleteChampion(champion.name)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChampionManager;
