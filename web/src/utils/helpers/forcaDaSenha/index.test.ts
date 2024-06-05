import { expect, test } from "vitest";
import { forcaDaSenha } from ".";

test('forca da senha', () => {
    expect(forcaDaSenha('tamanho')).toBe('media')
})