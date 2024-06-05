import { expect, test } from "vitest";
import { getCorForca } from ".";

test('Cor referente a forca', () => {
    expect(getCorForca('fraca')).toBe('red')
})