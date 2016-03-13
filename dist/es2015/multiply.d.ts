export interface MultiplyInterface {
    multiply(one: number, two: number): number;
}
declare class MathLib implements MultiplyInterface {
    multiply(one: number, two: number): number;
}
export { MathLib };
