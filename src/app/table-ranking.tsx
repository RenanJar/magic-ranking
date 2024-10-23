import React from 'react';
import { Player } from './player';

interface TableFromPlayers {
  players: Player[];
}

const TableFromPlayers: React.FC<TableFromPlayers> = ({ players }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="text-center">Jogador</th>
          <th className="text-center">Winrate</th>
          <th className="text-center">Ranking</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td className="text-center">{player.name}</td>
            <td className="text-center">{player.winRate}%</td>
            <td className="text-center">{player.ranking} pts.</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableFromPlayers;