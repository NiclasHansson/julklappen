import React from "react";
import PropTypes from "prop-types";

const initialMatrix = [
    ["1", "", "8", "", "", "6", "4", "", ""],
    ["", "", "6", "", "9", "", "8", "", "7"],
    ["5", "", "", "", "", "", "", "", ""],
    ["2", "6", "9", "5", "", "", "", "8", ""],
    ["", "", "", "4", "", "9", "", "", ""],
    ["", "8", "", "", "", "2", "7", "9", "1"],
    ["", "", "", "", "", "", "", "", "5"],
    ["6", "", "4", "", "7", "", "2", "", ""],
    ["", "", "1", "2", "", "", "9", "", "3"]
];

const workingMatrix = [
    ["1", "", "8", "", "", "6", "4", "", ""],
    ["", "", "6", "", "9", "", "8", "", "7"],
    ["5", "", "", "", "", "", "", "", ""],
    ["2", "6", "9", "5", "", "", "", "8", ""],
    ["", "", "", "4", "", "9", "", "", ""],
    ["", "8", "", "", "", "2", "7", "9", "1"],
    ["", "", "", "", "", "", "", "", "5"],
    ["6", "", "4", "", "7", "", "2", "", ""],
    ["", "", "1", "2", "", "", "9", "", "3"]
];

const correctMatrix = [
    ["1", "9", "8", "7", "5", "6", "4", "3", "2"],
    ["3", "2", "6", "1", "9", "4", "8", "5", "7"],
    ["5", "4", "7", "3", "2", "8", "1", "6", "9"],
    ["2", "6", "9", "5", "1", "7", "3", "8", "4"],
    ["7", "1", "3", "4", "8", "9", "5", "2", "6"],
    ["4", "8", "5", "6", "3", "2", "7", "9", "1"],
    ["9", "3", "2", "8", "4", "1", "6", "7", "5"],
    ["6", "5", "4", "9", "7", "3", "2", "1", "8"],
    ["8", "7", "1", "2", "6", "5", "9", "4", "3"]
];

export const Sudoku = ({ onComplete }) => {
    const [matrix, setMatrix] = React.useState(workingMatrix);

    const onChange = (text, row, col) => {
        const updatedMatrix = [...matrix];
        updatedMatrix[row][col] = text;
        setMatrix(updatedMatrix);
    };

    React.useEffect(() => {
        const isWrongMatrix = matrix.some((row, rowIndex) => {
            return row.some((cell, colIndex) => cell !== correctMatrix[rowIndex][colIndex]);
        });

        if (!isWrongMatrix) {
            onComplete();
        }
    }, [matrix, onComplete]);

    return (
        <div style={styles.container}>
            {matrix.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                    const bottomBorder = rowIndex === 2 || rowIndex === 5;
                    const rightBorder = colIndex === 2 || colIndex === 5;
                    const firstRow = rowIndex === 0;
                    if (initialMatrix[rowIndex][colIndex] === "") {
                        return (
                            <input
                                key={`cell-${rowIndex}-${colIndex}`}
                                style={styles.input(rightBorder, bottomBorder, firstRow)}
                                onChange={e => onChange(e.target.value, rowIndex, colIndex)}
                                value={cell}
                                autocomplete="off"
                            />
                        );
                    } else {
                        return (
                            <div key={`cell-${rowIndex}-${colIndex}`} style={styles.disabledText(rightBorder, bottomBorder, firstRow)}>
                                <div>{cell}</div>
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
        width: "100%"
    },
    input: (rightBorder, bottomBorder, firstRow) => ({
        height: 40,
        width: `${boxWidth}%`,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: firstRow ? 1 : 0,
        borderRightColor: rightBorder ? "#000" : "#888",
        borderBottomColor: bottomBorder ? "#000" : "#888",
        borderTopColor: "#888",
        textAlign: "center"
    }),
    disabledText: (rightBorder, bottomBorder, firstRow) => ({
        height: 40,
        width: `${boxWidth}%`,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: firstRow ? 1 : 0,
        borderRightColor: rightBorder ? "#000" : "#888",
        borderBottomColor: bottomBorder ? "#000" : "#888",
        borderTopColor: "#888",
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center"
    })
};

Sudoku.propTypes = {
    onComplete: PropTypes.func
};
