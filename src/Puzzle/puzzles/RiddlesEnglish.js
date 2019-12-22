import React from "react";
import PropTypes from "prop-types";

const correctAnswers = [["vind"], ["fisk", "en fisk"], ["mörker", "kyla"]];
const questions = [
    "Skriande men utan en röst. Vidrör men saknar hand. Kommer från nord, syd, väst och öst. Bitande men saknar tand.",
    "Levande men utan andetag. Och kall som döden. Aldrig törstig men ständigt drickande. Full rustning men ändå ljudlöst rörlig.",
    "Kan inte ses, kan inte höras. Kan inte luktas, kan inte röras. Det finns bakom stjärnorna och under jorden. Bringas ofta här i norden. I luft och i vatten. Släcker liv, dödar skratten."
];

export const RiddlesEnglish = ({ onComplete }) => {
    const [answer, setAnswer] = React.useState("");
    const [level, setLevel] = React.useState(0);

    const onChangeAnswer = text => {
        console.log("TEXT", text);
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
                <input autoComplete="off" style={styles.input} onChange={e => onChangeAnswer(e.target.value)} value={answer} />
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

RiddlesEnglish.propTypes = {
    onComplete: PropTypes.func
};
