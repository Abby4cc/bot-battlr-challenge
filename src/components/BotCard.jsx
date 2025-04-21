
import React from 'react';

function BotCard({ bot, handleClick, inArmy, dischargeBot }) {
  const getBotClassIcon = (botClass) => {
    switch (botClass) {
      case 'Support': return '';
      case 'Medic': return '';
      case 'Assault': return '';
      case 'Defender': return '';
      case 'Captain': return '';
      case 'Witch': return '';
      default: return '';
    }
  };
  
  return (
    <div className="bot-card" onClick={() => handleClick(bot)}>
      <div className="bot-card-header">
        <h3>{bot.name}</h3>
        {inArmy && (
          <button 
            className="discharge-btn" 
            onClick={(e) => {
              e.stopPropagation(); 
              dischargeBot(bot.id);
            }}
          >
            X
          </button>
        )}
      </div>
      <img src={bot.avatar_url} alt={bot.name} />
      <div className="bot-details">
        <p className="bot-class">
          {getBotClassIcon(bot.bot_class)} {bot.bot_class}
        </p>
        <div className="bot-stats">
          <span>❤️ {bot.health}</span>
          <span>💥 {bot.damage}</span>
          <span>🛡️ {bot.armor}</span>
        </div>
        <p className="bot-catchphrase">"{bot.catchphrase}"</p>
      </div>
    </div>
  );
}

export default BotCard;