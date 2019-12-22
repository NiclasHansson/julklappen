import React from "react";
import PropTypes from "prop-types";

const data = [
    {
        initialMatrix: [
            ["1", "", "8", "", "", "6", "4", "", ""],
            ["", "", "6", "", "9", "", "8", "", "7"],
            ["5", "", "", "", "", "", "", "", ""],
            ["2", "6", "9", "5", "", "", "", "8", ""],
            ["", "", "", "4", "", "9", "", "", ""],
            ["", "8", "", "", "", "2", "7", "9", "1"],
            ["", "", "", "", "", "", "", "", "5"],
            ["6", "", "4", "", "7", "", "2", "", ""],
            ["", "", "1", "2", "", "", "9", "", "3"]
        ],
        workingMatrix: [
            ["1", "", "8", "", "", "6", "4", "", ""],
            ["", "", "6", "", "9", "", "8", "", "7"],
            ["5", "", "", "", "", "", "", "", ""],
            ["2", "6", "9", "5", "", "", "", "8", ""],
            ["", "", "", "4", "", "9", "", "", ""],
            ["", "8", "", "", "", "2", "7", "9", "1"],
            ["", "", "", "", "", "", "", "", "5"],
            ["6", "", "4", "", "7", "", "2", "", ""],
            ["", "", "1", "2", "", "", "9", "", "3"]
        ],
        correctMatrix: [
            ["1", "9", "8", "7", "5", "6", "4", "3", "2"],
            ["3", "2", "6", "1", "9", "4", "8", "5", "7"],
            ["5", "4", "7", "3", "2", "8", "1", "6", "9"],
            ["2", "6", "9", "5", "1", "7", "3", "8", "4"],
            ["7", "1", "3", "4", "8", "9", "5", "2", "6"],
            ["4", "8", "5", "6", "3", "2", "7", "9", "1"],
            ["9", "3", "2", "8", "4", "1", "6", "7", "5"],
            ["6", "5", "4", "9", "7", "3", "2", "1", "8"],
            ["8", "7", "1", "2", "6", "5", "9", "4", "3"]
        ]
    },
    {
        initialMatrix: [
            ["1", "", "8", "", "", "6", "4", "", ""],
            ["", "", "6", "", "9", "", "8", "", "7"],
            ["5", "", "", "", "", "", "", "", ""],
            ["2", "6", "9", "5", "", "", "", "8", ""],
            ["", "", "", "4", "", "9", "", "", ""],
            ["", "8", "", "", "", "2", "7", "9", "1"],
            ["", "", "", "", "", "", "", "", "5"],
            ["6", "", "4", "", "7", "", "2", "", ""],
            ["", "", "1", "2", "", "", "9", "", "3"]
        ],
        workingMatrix: [
            ["1", "", "8", "", "", "6", "4", "", ""],
            ["", "", "6", "", "9", "", "8", "", "7"],
            ["5", "", "", "", "", "", "", "", ""],
            ["2", "6", "9", "5", "", "", "", "8", ""],
            ["", "", "", "4", "", "9", "", "", ""],
            ["", "8", "", "", "", "2", "7", "9", "1"],
            ["", "", "", "", "", "", "", "", "5"],
            ["6", "", "4", "", "7", "", "2", "", ""],
            ["", "", "1", "2", "", "", "9", "", "3"]
        ],
        correctMatrix: [
            ["1", "9", "8", "7", "5", "6", "4", "3", "2"],
            ["3", "2", "6", "1", "9", "4", "8", "5", "7"],
            ["5", "4", "7", "3", "2", "8", "1", "6", "9"],
            ["2", "6", "9", "5", "1", "7", "3", "8", "4"],
            ["7", "1", "3", "4", "8", "9", "5", "2", "6"],
            ["4", "8", "5", "6", "3", "2", "7", "9", "1"],
            ["9", "3", "2", "8", "4", "1", "6", "7", "5"],
            ["6", "5", "4", "9", "7", "3", "2", "1", "8"],
            ["8", "7", "1", "2", "6", "5", "9", "4", "3"]
        ]
    },
    {
        initialMatrix: [
            ["1", "", "8", "", "", "6", "4", "", ""],
            ["", "", "6", "", "9", "", "8", "", "7"],
            ["5", "", "", "", "", "", "", "", ""],
            ["2", "6", "9", "5", "", "", "", "8", ""],
            ["", "", "", "4", "", "9", "", "", ""],
            ["", "8", "", "", "", "2", "7", "9", "1"],
            ["", "", "", "", "", "", "", "", "5"],
            ["6", "", "4", "", "7", "", "2", "", ""],
            ["", "", "1", "2", "", "", "9", "", "3"]
        ],
        workingMatrix: [
            ["1", "", "8", "", "", "6", "4", "", ""],
            ["", "", "6", "", "9", "", "8", "", "7"],
            ["5", "", "", "", "", "", "", "", ""],
            ["2", "6", "9", "5", "", "", "", "8", ""],
            ["", "", "", "4", "", "9", "", "", ""],
            ["", "8", "", "", "", "2", "7", "9", "1"],
            ["", "", "", "", "", "", "", "", "5"],
            ["6", "", "4", "", "7", "", "2", "", ""],
            ["", "", "1", "2", "", "", "9", "", "3"]
        ],
        correctMatrix: [
            ["1", "9", "8", "7", "5", "6", "4", "3", "2"],
            ["3", "2", "6", "1", "9", "4", "8", "5", "7"],
            ["5", "4", "7", "3", "2", "8", "1", "6", "9"],
            ["2", "6", "9", "5", "1", "7", "3", "8", "4"],
            ["7", "1", "3", "4", "8", "9", "5", "2", "6"],
            ["4", "8", "5", "6", "3", "2", "7", "9", "1"],
            ["9", "3", "2", "8", "4", "1", "6", "7", "5"],
            ["6", "5", "4", "9", "7", "3", "2", "1", "8"],
            ["8", "7", "1", "2", "6", "5", "9", "4", "3"]
        ]
    }
];

export const Sudoku = ({ name, onComplete }) => {
    let dataIndex = 0;
    if (name === "Peter") {
        dataIndex = 1;
    } else if (name === "Lina") {
        dataIndex = 2;
    }

    const [matrix, setMatrix] = React.useState(data[dataIndex].workingMatrix);

    const onChange = (text, row, col) => {
        const updatedMatrix = [...matrix];
        updatedMatrix[row][col] = text;
        setMatrix(updatedMatrix);
    };

    React.useEffect(() => {
        const isWrongMatrix = matrix.some((row, rowIndex) => {
            return row.some((cell, colIndex) => cell !== data[dataIndex].correctMatrix[rowIndex][colIndex]);
        });

        if (!isWrongMatrix) {
            onComplete();
        }
    }, [dataIndex, matrix, onComplete]);

    return (
        <div style={styles.container}>
            {matrix.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                    const bottomBorder = rowIndex === 2 || rowIndex === 5;
                    const rightBorder = colIndex === 2 || colIndex === 5;
                    const leftBorder = colIndex === 0;
                    const firstRow = rowIndex === 0;
                    if (data[dataIndex].initialMatrix[rowIndex][colIndex] === "") {
                        return (
                            <input
                                key={`cell-${rowIndex}-${colIndex}`}
                                style={styles.input(rightBorder, bottomBorder, firstRow, leftBorder)}
                                onChange={e => onChange(e.target.value, rowIndex, colIndex)}
                                value={cell}
                                autoComplete="off"
                                inputMode="numeric"
                            />
                        );
                    } else {
                        return (
                            <div
                                key={`cell-${rowIndex}-${colIndex}`}
                                style={styles.disabledText(rightBorder, bottomBorder, firstRow, leftBorder)}
                            >
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
        width: 380
    },
    input: (rightBorder, bottomBorder, firstRow, leftBorder) => ({
        height: 40,
        width: `${boxWidth}%`,
        borderLeftWidth: leftBorder ? 1 : 0,
        borderLeftColor: "#ccc",
        borderRightWidth: 1,
        borderRightColor: rightBorder ? "#000" : "#ccc",
        borderBottomWidth: 1,
        borderBottomColor: bottomBorder ? "#000" : "#ccc",
        borderTopWidth: firstRow ? 1 : 0,
        borderTopColor: "#ccc",
        textAlign: "center",
        padding: 0,
        margin: 0,
        boxSizing: "border-box"
    }),
    disabledText: (rightBorder, bottomBorder, firstRow, leftBorder) => ({
        height: 40,
        width: `${boxWidth}%`,
        borderLeftWidth: leftBorder ? 1 : 0,
        borderLeftColor: "#ccc",
        borderRightWidth: 1,
        borderRightColor: rightBorder ? "#000" : "#ccc",
        borderBottomWidth: 1,
        borderBottomColor: bottomBorder ? "#000" : "#ccc",
        borderTopWidth: firstRow ? 1 : 0,
        borderTopColor: "#ccc",
        backgroundColor: "#eee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        borderStyle: "solid"
    })
};

Sudoku.propTypes = {
    onComplete: PropTypes.func,
    name: PropTypes.string
};
