const MyForm04 = ({ user }) => {
    return (
        <>
            <form>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    value={user.name}
                />
                <input type="submit" value="Enviar" />
            </form>
        </>
    );
};

export default MyForm04;
