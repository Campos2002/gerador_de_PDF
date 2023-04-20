const btnGenerate = document.querySelector('#generate-pdf');

btnGenerate.addEventListener("click", () => {

    const content = document.querySelector('#textbox').value;

    //* Configuração do arquivo final PDF.
    const opt = {
        margin: [10, 10, 10, 10],
        filename: "export.pdf",
        html2canvas: { scale: 1 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    //* Gerar e baixar arquivo PDF
    html2pdf().set(opt).from(content).save();
});