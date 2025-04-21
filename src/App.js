
import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';


function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const enlistBot = (bot) => {
    
    if (!yourBotArmy.find(b => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setYourBotArmy(yourBotArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setBots(bots.filter(bot => bot.id !== botId));
          setYourBotArmy(yourBotArmy.filter(bot => bot.id !== botId));
        }
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battlr</h1>
        <h2>Build Your Bot Army!</h2>
      </header>
      <div className="bot-army-container">
        <YourBotArmy 
          bots={yourBotArmy} 
          releaseBot={releaseBot} 
          dischargeBot={dischargeBot} 
        />
      </div>
      <div className="bot-collection-container">
        <BotCollection 
          bots={bots} 
          enlistBot={enlistBot} 
        />
      </div>
    </div>
  );
}

export default App;
