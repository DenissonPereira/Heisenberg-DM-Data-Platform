import { expect, test } from "vitest";
import { InputesValidate } from ".";

test('Tamanho das palavras', () => {
    expect(InputesValidate('nova', 5)).toBe(false)
})