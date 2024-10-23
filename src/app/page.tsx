import { Player } from "./player";
import TableFromPlayers from "./table-ranking";
import TableHistory from "./table-from-history";
import data from './data.json';

export default function Home() {
  const players: Player[] = []

  players.push(new Player("Renan O.", 40, 0))
  players.push(new Player("Henrique L.", 40, 0))
  players.push(new Player("Martins G.", 40, 0))
  players.push(new Player("Denilson .", 40, 0))
  players.push(new Player("Marlon O.", 40, 0))
  players.push(new Player("Rodrigo O.", 40, 0))

  return (
    <div className="container sm">
      <div className="place-content-center bg-blue-300 flex ">
        Magic Ranking
      </div>
      <div
        className="block rounded-lg bg-slate-600 p-2 m-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <TableFromPlayers players={players} />
      </div>
      <h1 className="text-2xl font-bold mb-4 text-center">Historico de partidas</h1>

      <div>
        <TableHistory data={data} />
      </div>

    </div>
  );
}
