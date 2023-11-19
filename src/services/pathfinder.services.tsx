async function GetSearchPath(
  type: String,
  matrix: Number[][],
  start: Number[],
  end: Number[]
): Promise<Number[][]> {
  // Algoritmo, Matriz, Inicio, Fim
  const result = await fetch(`localhost:8080/matrix/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      matrix: matrix,
      start: start,
      end: end,
      algorithm: type,
    }),
  });
  const json = await result.json();
  return json["path"];
}
