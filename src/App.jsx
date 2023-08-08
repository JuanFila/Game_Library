import Game from "./components/Game";
import NewGameForm from "./components/NewGameForme";
import useGameCollection from "./hook/useGameCollection";

export default function App() {
  const {addGame ,games ,removeGame} = useGameCollection()

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.map((game) => (
          <Game
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          />
        ))}
      </div>
    </div>
  )
}
