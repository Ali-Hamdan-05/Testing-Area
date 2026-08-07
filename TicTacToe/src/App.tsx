import { type ReactElement } from "react";
import { useState } from "react";

type HistoryType = {
    squares: (string | null)[];
    location: {
        row: number;
        col: number;
    } | null;
};

export default function Game(): ReactElement {
    const [history, setHistory] = useState<HistoryType[]>([
        { squares: new Array(9).fill(null), location: null },
    ]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isReverse, setIsReverse] = useState(false);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove].squares;

    const moves = history.map((squares, move) => {
        let description: string;

        if (move === currentMove) {
            if (move === 0) {
                return (
                    <li key={move} className="hist histlist">
                        You are at game start
                    </li>
                );
            }
            return (
                <li key={move} className="hist histlist">
                    You are at move #{move}
                </li>
            );
        }

        if (move > 0) {
            description = `Go to move #${move} col #${history[move].location?.col} row #${history[move].location?.row}`;
        } else {
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button
                    type="button"
                    onClick={() => jumpTo(move)}
                    className="hist histbtn"
                >
                    {description}
                </button>
            </li>
        );
    });

    function handlePlay(nextSquares: (string | null)[], index: number): void {
        const row = Math.trunc(index / 3) + 1;
        const col = (index % 3) + 1;
        const nextHistory = [
            ...history.slice(0, currentMove + 1),
            {
                squares: nextSquares,
                location: {
                    row: row,
                    col: col,
                },
            },
        ];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    function switchOrder() {
        setIsReverse(!isReverse);
    }

    const sortedMoves = <>{isReverse ? [...moves].toReversed() : moves}</>;

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <h2>Game History</h2>
                <ul>{sortedMoves}</ul>
                <button
                    type="button"
                    onClick={switchOrder}
                    className="switchbtn"
                >
                    Switch Order
                </button>
            </div>
        </div>
    );
}

function Board({
    xIsNext,
    squares,
    onPlay,
}: {
    readonly xIsNext: boolean;
    readonly squares: (string | null)[];
    readonly onPlay: (squares: (string | null)[], index: number) => void;
}): ReactElement {
    const winnerInfo = calcWinner(squares);
    const winner = winnerInfo ? squares[winnerInfo[0]] : null;
    const fullGrid: boolean = !squares.includes(null);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (fullGrid) {
        status = "Its A Draw";
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    function handleClick(i: number): void {
        if (squares[i] || winner) {
            return;
        }
        const nextSquares: (string | null)[] = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares, i);
    }

    const boardElements = Array.from({ length: 3 }, (__: never, rowIndex) => (
        <div className="board-row" key={rowIndex}>
            {Array.from({ length: 3 }, (__: never, colIndex) => {
                const index = rowIndex * 3 + colIndex;
                return (
                    <Square
                        key={index}
                        value={squares[index]}
                        onSquareClick={() => handleClick(index)}
                        isWinner={
                            winnerInfo === null
                                ? false
                                : winnerInfo.includes(index)
                        }
                    />
                );
            })}
        </div>
    ));

    return (
        <>
            <h1>{status}</h1>
            <div className="board">
                {boardElements}
            </div>
        </>
    );
}

function Square({
    value,
    onSquareClick,
    isWinner,
}: {
    readonly value: string | null;
    readonly onSquareClick: () => void;
    readonly isWinner: boolean;
}): ReactElement {
    return (
        <button
            onClick={onSquareClick}
            type="button"
            className={isWinner ? "square winner" : "square"}
        >
            {value}
        </button>
    );
}

//Utility------------------------------------------------------------------------------------------

function calcWinner(squares: (string | null)[]): number[] | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return [a, b, c];
        }
    }
    return null;
}