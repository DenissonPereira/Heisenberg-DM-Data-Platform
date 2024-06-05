import { Password } from "../../enums";

export const getCorForca = (forca: string) => {
    switch (forca) {
        case Password.Vazia:
            return 'grey';
        case Password.Fraca:
            return 'red';
        case Password.Media:
            return 'orange';
        case Password.Forte:
            return 'green';
        default:
            return 'grey';
    }
}