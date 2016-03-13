export interface MultiplyInterface 
{
    multiply(one:number, two:number):number;
}

export default class MathLib implements MultiplyInterface
{
    multiply(one:number, two:number)
    {
        let result = one * two;
        console.log(`Muliplying ${one} by ${two} to get ${result}`);
        return result;
    }
}