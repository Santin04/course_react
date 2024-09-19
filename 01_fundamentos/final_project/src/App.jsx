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

    //criando variaveis que vão fazer parte da dinâmica do jogo
    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    //função que vai sortear qual a palavra que o usuário vai ter que adivinhar
    const pickWordAndCategory = () => {
        //sorteando aleatoriamente uma categoria
        const categories = Object.keys(words);
        const category =
            categories[Math.floor(Math.random() * categories.length)];

        //sorteando aleatoriamente uma palavra de dentro da categoria
        const valuesCategory = words[category];
        const word =
            valuesCategory[Math.floor(Math.random() * valuesCategory.length)];

        //retorna qual foi a palavra e a categoria sorteada
        return { category, word };
    };

    //criando a função que vai alterar o status e vai começar o game
    const startGame = () => {
        //sorteando palavra e categoria
        const { category, word } = pickWordAndCategory();

        let wordLetters = word.split("");
        wordLetters = wordLetters.map((letter) => letter.toLowerCase());

        //setando os valores
        setPickedCategory(category);
        setPickedWord(word);
        setLetters(wordLetters);

        //fazendo com que mude a tela
        setGameStage(stages[1].name);
    };

    //criando função que finaliza o jogo
    const verifyLetter = () => {
        setGameStage(stages[2].name);
    };

    //criando funçao que reinicia o jogo
    const retry = () => {
        setGameStage(stages[0].name);
    };

    return (
        <div>
            {GameStage === "start" ? (
                <StartScreen startGame={startGame} />
            ) : null}
            {GameStage === "game" ? <Game verifyLetter={verifyLetter} /> : null}
            {GameStage === "end" ? <GameOver retry={retry} /> : null}
        </div>
    );
}

export default App;
