export interface MultiplyInterface 
{
    multiply(one:number, two:number):number;
}

export class MathLib implements MultiplyInterface
{
    multiply(one:number, two:number)
    {
        let result = one * two;
        console.log(`Multiplying ${one} by ${two} to get ${result}`);
        return result;
    }
}