import React from "react";
import PropTypes from "prop-types";

import { Sudoku } from "./puzzles/Sudoku";
import { Crossword } from "./puzzles/Crossword";
import { Riddles } from "./puzzles/Riddles";
import { RiddlesEnglish } from "./puzzles/RiddlesEnglish";

const PASSWORD = "Gurkor";

export const Puzzle = ({ complete, onComplete, onShowTreasure }) => {
    const [showInput, setShowInput] = React.useState(false);

    const onChange = text => {
        if (text === PASSWORD) {
            onShowTreasure();
            onComplete();
        }
    };

    return (
        <div style={styles.container}>
            {/*<Sudoku onComplete={onComplete} />*/}
            {/*<Crossword onComplete={onComplete} />*/}
            {/*<Riddles onComplete={onComplete} />*/}
            <RiddlesEnglish onComplete={onComplete} />
            {complete ? (
                <button onClick={onShowTreasure}>Nästa</button>
            ) : showInput ? (
                <input autocomplete="off" style={styles.input} onChange={e => onChange(e.target.value)} />
            ) : (
                <button style={styles.button} onClick={() => setShowInput(!showInput)}>
                    Fuska
                </button>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        width: 200,
        marginBottom: 16
    },
    button: {
        alignSelf: "flex-end",
        marginRight: 32
    }
};

Puzzle.propTypes = {
    complete: PropTypes.bool,
    onShowTreasure: PropTypes.func,
    onComplete: PropTypes.func
};
