import "./App.css";
import MyForm01 from "./components/MyForm01";
import MyForm02 from "./components/MyForm02";
import MyForm03 from "./components/MyForm03";
import MyForm04 from "./components/MyForm04";

function App() {
    return (
        <>
            <MyForm01 />
            <hr />
            <MyForm02 />
            <hr />
            <MyForm03 />
            <hr />
            {/* passando valor para deixar o formulário pré pronto */}
            <MyForm04 user={{ name: "José" }} />
        </>
    );
}

export default App;
