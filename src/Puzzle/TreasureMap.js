import React from "react";
import PropTypes from "prop-types";

export const TreasureMap = ({ onShowPuzzle }) => {
    return (
        <div style={styles.container}>
            <div style={styles.text}>Där det röda bäret möter den ryska drycken finner du glücken...</div>
            <button style={styles.backButton} onClick={onShowPuzzle}>
                Tillbaka
            </button>
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
        justifyContent: "space-between"
    },
    text: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 30
    },
    backButton: {
        marginBottom: 16
    }
};

TreasureMap.propTypes = {
    onShowPuzzle: PropTypes.func
};
