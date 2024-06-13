export const exportarDados = (nomeX: string, nomeY: string, data: { x: number; y: number }[], anisotropia: string) => {
    const csvRows = []
    csvRows.push(`${nomeX}, ${nomeY}`)
    data.forEach(row => {
        csvRows.push(`${row.x},${row.y}`);
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", `dados_${nomeY}_anisotropia_${anisotropia}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}