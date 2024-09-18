//css
import "./App.css";

//imports methods
import { useCallback, useEffect, useState } from "react";

//data
import { wordsList } from "./data/words";

//components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

//criando os estados que o usuário pode estar
const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
];

function App() {
    //fazendo com que comece no stage de start
    const [GameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    console.log(words);

    return (
        <div>
            {GameStage === "start" ? <StartScreen /> : null}
            {GameStage === "game" ? <Game /> : null}
            {GameStage === "end" ? <GameOver /> : null}
        </div>
    );
}

export default App;
