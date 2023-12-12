import React, { useState, useEffect } from 'react';

function ChampionManager() {
    const [champions, setChampions] = useState([]);
    const [newChampion, setNewChampion] = useState('');
    const apiUrl = 'http://localhost:8000';

    useEffect(() => {
        // Fetch all champions on component mount
        fetch(`${apiUrl}/champions`)
            .then(response => response.json())
            .then(data => setChampions(data))
            .catch(error => console.error('Error fetching champions:', error));
    }, []);

    const handleAddChampion = () => {
        fetch(`${apiUrl}/champion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newChampion }),
        })
        .then(response => response.json())
        .then(data => {
            setChampions([...champions, data]);
            setNewChampion('');
        })
        .catch(error => console.error('Error adding champion:', error));
    };

    const handleDeleteChampion = (championName) => {
        fetch(`${apiUrl}/champion/${championName}`, { method: 'DELETE' })
            .then(() => {
                setChampions(champions.filter(champion => champion.name !== championName));
            })
            .catch(error => console.error('Error deleting champion:', error));
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
            <ul>
                {champions.map(champion => (
                    <li key={champion.name}>
                        {champion.name}
                        <button onClick={() => handleDeleteChampion(champion.name)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChampionManager;
