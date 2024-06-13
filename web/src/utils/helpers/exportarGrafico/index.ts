import html2canvas from "html2canvas";

export const exportarGrafico = async (nome: string, anisotropia: string, grafico: HTMLDivElement | null) => {
    if (grafico) {
        const canvas = await html2canvas(grafico);
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `grafico_${nome}_anisotropia_${anisotropia}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}