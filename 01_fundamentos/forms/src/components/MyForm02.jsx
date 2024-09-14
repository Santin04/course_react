import { useState } from "react";

const MyForm02 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleName = (e) => {
        console.log("Mudou o nome");
    };

    return (
        <>
            <form></form>
        </>
    );
};

export default MyForm02;
