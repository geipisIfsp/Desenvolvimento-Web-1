// Função para atualizar a caixa de visualização
function updateBox() {
    const topLeft = document.getElementById("top-left").value;
    const topRight = document.getElementById("top-right").value;
    const bottomLeft = document.getElementById("bottom-left").value;
    const bottomRight = document.getElementById("bottom-right").value;

    const box = document.getElementById("box");
    box.style.borderRadius = `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`;

    // Atualiza a visualização do CSS
    const cssOutput = document.getElementById("cssOutput");
    cssOutput.textContent = `border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;`;
}

// Chama a função de atualização quando o valor do input mudar
document.getElementById("top-left").addEventListener("input", updateBox);
document.getElementById("top-right").addEventListener("input", updateBox);
document.getElementById("bottom-left").addEventListener("input", updateBox);
document.getElementById("bottom-right").addEventListener("input", updateBox);

// Função para copiar o CSS para a área de transferência
document.getElementById("copyButton").addEventListener("click", function() {
    const cssOutput = document.getElementById("cssOutput");
    const textArea = document.createElement("textarea");
    textArea.value = cssOutput.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("CSS copiado para a área de transferência!");
});

// Inicializa a página com o valor padrão
updateBox();