import React from 'react';
import { PlayerPlacement } from './player-placement';

interface GameData {
    date: String;
    numberOfTurns: number;
    placing: PlayerPlacement[]
}

interface TableProps {
    data: GameData[];
}

const TableHistory: React.FC<TableProps> = ({ data }) => {
    return (
        <div>
            {data.map((game, gameIndex) => (
                <div key={gameIndex} className="mb-4 block rounded-lg bg-slate-600 p-2 m-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="text-center">Jogador</th>
                                <th className="text-center">Comandante</th>
                                <th className="text-center">Posição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {game.placing.map((placement, index) => (
                                <tr key={index}>
                                    <td className="text-center">{placement.player}</td>
                                    <td className="text-center">
                                        {Array.isArray(placement.commander) ? placement.commander.join(', ') : placement.commander}
                                    </td>
                                    <td className="text-center">{placement.placing}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-xs mt-2 text-end">{game.date}</p>
                </div>
            ))}
        </div>
    );
};

export default TableHistory;