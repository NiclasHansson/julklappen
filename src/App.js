import React from "react";
import Main from "./Main";
import index from "./index.css";

function App() {
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const inputEl = React.useRef(null);

    React.useEffect(() => {
        inputEl.current.focus();
    }, []);

    React.useEffect(() => {
        switch (password) {
            case "pappa-345":
                setName("Pappa");
                break;
            case "mamma-957":
                setName("Mamma");
                break;
            case "jessica-148":
                setName("Jessica");
                break;
            case "christian-036":
                setName("Christian");
                break;
            case "peter-237":
                setName("Peter");
                break;
            case "lina-296":
                setName("Lina");
                break;
            default:
        }
    }, [password]);

    return (
        <div className="App">
            {name ? (
                <Main name={name} />
            ) : (
                <div style={styles.container}>
                    <input ref={inputEl} style={styles.input} value={password} onChange={e => setPassword(e.target.value)} />
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: 300
    },
    input: {
        border: "1px solid black"
    }
};

export default App;
