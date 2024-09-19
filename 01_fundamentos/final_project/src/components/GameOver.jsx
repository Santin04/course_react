import "./GameOver.css";

const GameOver = ({ retry }) => {
    return (
        <>
            <h1>Perdeu</h1>
            <button onClick={retry}>Reiniciar</button>
        </>
    );
};

export default GameOver;
