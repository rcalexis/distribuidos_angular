import { expect } from 'chai';

function sumar(a: number, b: number): number {
    return a + b;
}

describe('Prueba de la función sumar', () => {
    it('debería devolver 5 cuando sumamos 2 y 3', () => {
        expect(sumar(2, 3)).to.equal(5);
    });
});
