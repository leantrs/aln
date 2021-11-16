async function listaProdutos() {
  try {
    let response = await fetch("https://trs2500.ml/aln/Controller.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pass: "listaProdutos",
      }),
    });

    let json = await response.json();

    return json;
  } catch (error) {
    console.log("banco de dados desconectado");
  }
}

export default listaProdutos;
