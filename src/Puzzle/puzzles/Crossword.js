import React from "react";
import PropTypes from "prop-types";

const initialMatrix = [
    ["Känslo-sam present >", "", "Under-hålla", "Lyfter muskel-knutte >", "", "Ugns-baka", "Balja", "Makalös", "Bil i tjänst"],
    ["Sägs vara längst", "", "", "", "", "", "", "", ""],
    ["Paddla", "", "", "Trädtopp / Nöt-hannen", "", "", "", "", ""],
    ["", "", "", "", "", "", "Nyckel-del", "", ""],
    ["Skiva ^", "", "Motortyp / Smila", "", "", "", "Ses ofta med så", "", ""],
    ["Invecklat", "", "", "", "", "", "", "", "Friska"],
    ["Skådar", "", "", "", "Katt", "", "Kärra", "", ""],
    [" ", "", "Lärlingar", "", "", "", "", "", ""],
    ["Mulor", "", "", "", "", "", "Oanvänd", "", ""],
    [" ", "", " ", " ", " ", "", " ", "", ""],
    [" ", "", "Skid-åkande snögubbe", "", "", "", "", "", " "]
];

const workingMatrix = [
    [...initialMatrix[0]],
    [...initialMatrix[1]],
    [...initialMatrix[2]],
    [...initialMatrix[3]],
    [...initialMatrix[4]],
    [...initialMatrix[5]],
    [...initialMatrix[6]],
    [...initialMatrix[7]],
    [...initialMatrix[8]],
    [...initialMatrix[9]],
    [...initialMatrix[10]]
];

const correctMatrix = [
    ["Känslo-sam present >", "K", "Under-hålla", "Lyfter muskel-knutte >", "V", "Ugns-baka", "Balja", "Makalös", "Bil i tjänst"],
    ["Sägs vara längst", "Ä", "R", "L", "I", "G", "H", "E", "T"],
    ["Paddla", "R", "O", "Trädtopp / Nöt-hannen", "K", "R", "O", "N", "A"],
    ["P", "L", "A", "T", "T", "A", "Nyckel-del", "A", "X"],
    ["Skiva ^", "E", "Motortyp / Smila", "J", "E", "T", "Ses ofta med så", "S", "I"],
    ["Invecklat", "K", "L", "U", "R", "I", "G", "T", "Friska"],
    ["Skådar", "S", "E", "R", "Katt", "N", "Kärra", "Å", "K"],
    [" ", "G", "Lärlingar", "E", "L", "E", "V", "E", "R"],
    ["Mulor", "Å", "S", "N", "O", "R", "Oanvänd", "N", "Y"],
    [" ", "V", " ", " ", " ", "A", " ", "D", "A"],
    [" ", "A", "Skid-åkande snögubbe", "V", "A", "L", "L", "E", " "]
];

export const Crossword = ({ onComplete }) => {
    const [matrix, setMatrix] = React.useState(workingMatrix);
    const onChange = (text, row, col) => {
        const updatedMatrix = [...matrix];
        updatedMatrix[row][col] = text;
        setMatrix(updatedMatrix);
    };

    React.useEffect(() => {
        const isWrongMatrix = matrix.some((row, rowIndex) => {
            return row.some((cell, colIndex) => cell.toLowerCase() !== correctMatrix[rowIndex][colIndex].toLowerCase());
        });

        if (!isWrongMatrix) {
            onComplete();
        }
    }, [matrix, onComplete]);

    return (
        <div style={styles.container}>
            {matrix.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                    const firstRow = rowIndex === 0;
                    const leftBorder = colIndex === 0;
                    if (initialMatrix[rowIndex][colIndex] === "") {
                        return (
                            <input
                                key={`cell-${rowIndex}-${colIndex}`}
                                style={styles.input(firstRow, leftBorder)}
                                onChange={e => onChange(e.target.value, rowIndex, colIndex)}
                                value={cell}
                                autocomplete="off"
                            />
                        );
                    } else {
                        return (
                            <div key={`cell-${rowIndex}-${colIndex}`} style={styles.disabledContainer(firstRow, leftBorder)}>
                                <div style={styles.disabledText}>{cell}</div>
                            </div>
                        );
                    }
                })
            )}
        </div>
    );
};

const boxWidth = 100 / 9;
const styles = {
    container: {
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        width: 380,
        marginBottom: 50
    },
    input: (firstRow, leftBorder) => ({
        height: 40,
        width: `${boxWidth}%`,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: leftBorder ? 1 : 0,
        borderTopWidth: firstRow ? 1 : 0,
        borderColor: "#888",
        textAlign: "center",
        padding: 0,
        margin: 0,
        boxSizing: "border-box"
    }),
    disabledContainer: (firstRow, leftBorder) => ({
        display: "flex",
        flexDirection: "column",
        height: 40,
        width: `${boxWidth}%`,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: leftBorder ? 1 : 0,
        borderTopWidth: firstRow ? 1 : 0,
        borderColor: "#888",
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        borderStyle: "solid"
    }),
    disabledText: {
        fontSize: 9
    }
};

Crossword.propTypes = {
    onComplete: PropTypes.func
};
