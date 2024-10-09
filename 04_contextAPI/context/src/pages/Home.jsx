import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
    const { counter, setCounter } = useContext(CounterContext);

    return (
        <div>
            <h1>This is Home</h1>
            <p>Valor do contador: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>+ 1</button>
        </div>
    );
};

export default Home;
