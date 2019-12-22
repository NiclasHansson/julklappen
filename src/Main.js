import React from "react";
import { Puzzle } from "./Puzzle/Puzzle";
import { TreasureMap } from "./Puzzle/TreasureMap";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const getPuzzleStatus = async () => {
    return await localStorage.getItem("NiclasPuzzleDone");
};

export default function Main({ name }) {
    const [puzzleDone, setPuzzleDone] = React.useState(null);
    const [showTreasure, setShowTreasure] = React.useState(false);

    React.useEffect(() => {
        try {
            const value = getPuzzleStatus();
            if (value === "true") {
                setPuzzleDone(true);
                setShowTreasure(true);
            } else {
                setPuzzleDone(false);
            }
        } catch (error) {
            console.log("ERROR WHEN FETCHING PUZZLE DONE", error.message);
        }
    }, []);

    const onPuzzleComplete = async () => {
        try {
            await localStorage.setItem("NiclasPuzzleDone", "true");
            setPuzzleDone(true);
            setShowTreasure(true);
        } catch (error) {
            console.log("ERROR WHEN STORING PUZZLE DONE", error.message);
        }
    };

    const onShowPuzzle = async () => {
        setShowTreasure(false);
    };

    const onShowTreasure = async () => {
        setShowTreasure(true);
    };

    return (
        <div style={styles.container}>
            {puzzleDone === null ? (
                <Loader type="Puff" color="#0000ff" height={100} width={100} timeout={3000} />
            ) : (
                <div style={styles.content}>
                    <div style={styles.header}>
                        <div style={styles.heading}>{`God Jul ${name}!`}</div>
                        <div style={styles.description}>
                            Lös pusslet för att ta dig vidare till nästa moment i din sökan efter meningen med julafton. Med andra ord
                            julklappar!
                        </div>
                    </div>
                    {puzzleDone && showTreasure ? (
                        <TreasureMap onShowPuzzle={onShowPuzzle} />
                    ) : (
                        <Puzzle name={name} complete={puzzleDone} onShowTreasure={onShowTreasure} onComplete={onPuzzleComplete} />
                    )}
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 20,
        backgroundColor: "red"
    },
    heading: {
        display: "flex",
        flexDirection: "column",
        fontSize: 50,
        color: "white",
        marginBottom: 8,
        textDecorationLine: "underline"
    },
    description: {
        width: "80%",
        display: "flex",
        justifyContent: "center",
        fontSize: 20,
        marginBottom: 32,
        marginHorizontal: 16,
        color: "white"
    }
};

Puzzle.propTypes = {
    name: PropTypes.string
};
