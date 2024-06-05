export const getCorForca = (forca: string) => {
    switch (forca) {
        case 'vazia':
            return 'grey';
        case 'fraca':
            return 'red';
        case 'media':
            return 'orange';
        case 'forte':
            return 'green';
        default:
            return 'grey';
    }
}