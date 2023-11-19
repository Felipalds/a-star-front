import { ReactNode, useState } from "react";
import "./App.css";

type GameCellProps = {
  value: number;
  row: number;
  col: number;
};

function GameCell({ value, row, col }: GameCellProps) {
  let color = "black";
  switch (value) {
    case 0: // Vazio
      color = "white";
      break;
    case 1: // Cristal (Parede)
      color = "blue";
      break;
    case 2: // Começo
      color = "yellow";
      break;
    case 3: // Fim
      color = "green";
      break;
    case 4: // Caminho
      color = "red";
      break;
  }
  console.log(`${row} ${col}`);
  return (
    <>
      <div
        className="gameCell"
        style={{
          backgroundColor: color,
          gridArea: `${row + 1} / ${col + 1}`,
        }}
      ></div>
    </>
  );
}

function matrixConstructor(line: number[], row: number): ReactNode {
  return (
    <>
      {line.map((cell: number, col: number) => {
        return (
          <GameCell value={cell} row={row} col={col} key={`${row}${col}`} />
        );
      })}
    </>
  );
}

function onColsChange(
  prevMatrix: number[][],
  event: React.ChangeEvent<HTMLInputElement>
): number[][] {
  const value = Number(event.target.value);
  const newMatrix = [...prevMatrix];
  if (value >= 3) {
    let currentLength = newMatrix[0].length;
    if (currentLength > value) {
      for (let i = 0; i < newMatrix.length; i++) {
        for (let j = 0; j < currentLength - value; j++) {
          newMatrix[i].pop();
        }
      }
    } else if (currentLength < value) {
      for (let i = 0; i < newMatrix.length; i++) {
        for (let j = 0; j < value - currentLength; j++) {
          newMatrix[i].push(0);
        }
      }
    }
  } else {
    event.target.value = `${3}`;
  }
  return newMatrix;
}

function onRowsChange(
  prevMatrix: number[][],
  event: React.ChangeEvent<HTMLInputElement>
): number[][] {
  const value = Number(event.target.value);
  const newMatrix = [...prevMatrix];
  if (value >= 3) {
    let currentLength = newMatrix.length;
    if (currentLength > value) {
      for (let i = 0; i < currentLength - value; i++) {
        newMatrix.pop();
      }
    } else if (currentLength < value) {
      for (let i = 0; i < value - currentLength; i++) {
        console.log("Pushed!");
        newMatrix.push(newMatrix[0].map(() => 0));
      }
    }
  } else {
    event.target.value = `${3}`;
  }
  return newMatrix;
}

function App() {
  const [matrix, setMatrix] = useState([
    [2, 0, 1],
    [0, 1, 1],
    [0, 0, 3],
  ]);
  return (
    <>
      <h1>Problem do Gnomo</h1>
      <div id="container">
        <section id="settingsContainer">
          <h2>Configurações</h2>
          <div className="settingDiv">
            <p className="settingLabel">Algoritmo:</p>
            <select
              name="algorithm"
              id="algorithmInput"
              className="settingsInput"
            >
              <option value={"ASTAR"}>A*</option>
              <option value={"WIDTH"}>Largura</option>
            </select>
          </div>
        </section>
        <section id="gameContainer">
          <div
            id="gameMatrix"
            style={{
              gridTemplateRows: "1fr ".repeat(matrix.length),
              gridAutoColumns: "1fr ".repeat(matrix[0].length),
            }}
          >
            {matrix.map(matrixConstructor)}
          </div>
          <div id="inputRow">
            <p>Linhas:</p>
            <input
              id="rowsInput"
              defaultValue={3}
              onChange={(event) => {
                setMatrix((prev) => onRowsChange(prev, event));
              }}
              className="matrixInput"
              type="number"
            />
            <p>Colunas:</p>
            <input
              id="colsInput"
              defaultValue={3}
              onChange={(event) => {
                setMatrix((prev) => onColsChange(prev, event));
              }}
              className="matrixInput"
              type="number"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
