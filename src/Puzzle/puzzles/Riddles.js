import React from "react";
import PropTypes from "prop-types";

const correctAnswers = [["klockan"], ["bara ett ord"], ["sticka", "en sticka"]];
const questions = [
    "Vad går och går men kommer aldrig fram?",
    "Sorta om bokstäverna 'EBDRTAROAT' så de stavar bara ett ord. Vad är ditt svar?",
    "Han gick ut i skogen och fick mig. Han satt ned för att hitta mig. Han hittade mig inte så jag följde med honom hem. Vad är jag?"
];

export const Riddles = ({ onComplete }) => {
    const [answer, setAnswer] = React.useState("");
    const [level, setLevel] = React.useState(0);

    const onChangeAnswer = text => {
        setAnswer(text);
        if (correctAnswers[level].some(answer => answer === text.toLowerCase())) {
            if (level === 2) {
                onComplete();
            } else {
                setLevel(level + 1);
                setAnswer("");
            }
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.heading}>{`Level ${level + 1} / 3`}</div>
            <div style={styles.riddleContainer}>
                <div style={styles.text}>{questions[level]}</div>
                <input autocomplete="off" style={styles.input} onChange={e => onChangeAnswer(e.target.value)} value={answer} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "90%",
        alignItems: "center",
        justifyContent: "center"
    },
    heading: {
        display: "flex",
        flexDirection: "column",
        fontSize: 28,
        marginBottom: 50
    },
    riddleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        marginBottom: 32
    },
    input: {
        width: 200,
        height: 48,
        borderWidth: 1,
        textAlign: "center",
        marginBottom: 50
    }
};

Riddles.propTypes = {
    onComplete: PropTypes.func
};
