document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const selecionadosSpan = document.getElementById("selecionados");
  const totalSpan = document.getElementById("total");
  let selecionados = [];

  for (let i = 1; i <= 1000; i++) {
    const btn = document.createElement("button");
    btn.textContent = i.toString().padStart(3, '0');
    btn.addEventListener("click", () => {
      if (btn.classList.contains("selected")) {
        btn.classList.remove("selected");
        selecionados = selecionados.filter(n => n !== btn.textContent);
      } else {
        btn.classList.add("selected");
        selecionados.push(btn.textContent);
      }
      atualizarInfo();
    });
    grid.appendChild(btn);
  }

  function atualizarInfo() {
    selecionadosSpan.textContent = selecionados.length;
    totalSpan.textContent = (selecionados.length * 10).toFixed(2).replace('.', ',');
  }
});

function gerarPix() {
  alert("(DEMO) Pix gerado para os números selecionados!\nFuncionalidade em construção.");
}