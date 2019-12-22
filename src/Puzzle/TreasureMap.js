import React from "react";
import PropTypes from "prop-types";

const pappaMap = require("./pappaMap.jpg");
// const mammaMap = require("./mammaMap.jpg");
// const jessicaMap = require("./jessicaMap.jpg");
// const christianMap = require("./christianMap.jpg");
// const peterMap = require("./peterMap.jpg");
// const linaMap = require("./linaMap.jpg");

export const TreasureMap = ({ name, onShowPuzzle }) => {
    let image;
    switch (name) {
        case "Pappa":
            image = pappaMap;
            break;
        // case "Mamma":
        //     image = mammaMap;
        //     break;
        // case "Jessica":
        //     image = jessicaMap;
        //     break;
        // case "Christian":
        //     image = christianMap;
        //     break;
        // case "Peter":
        //     image = peterMap;
        //     break;
        // case "Lina":
        //     image = linaMap;
        //     break;
        default:
    }

    return (
        <div style={styles.container}>
            <img src={image} style={styles.img} width={300} height={300} />
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
    img: {
        marginBottom: 30,
        width: 300,
        height: 300
    },
    backButton: {
        marginBottom: 16
    }
};

TreasureMap.propTypes = {
    name: PropTypes.string,
    onShowPuzzle: PropTypes.func
};
