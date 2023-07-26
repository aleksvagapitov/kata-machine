export default function two_crystal_balls(breaks: boolean[]): number {
    var jmpAmount = Math.floor(Math.sqrt(breaks.length));
    var firstBrokeIndex = 0;
    let i = 0;  
    while (i < breaks.length){
        if (breaks[i] === true){
            firstBrokeIndex = i;
            break;
        }
        i += jmpAmount;
    }

    for (let i = firstBrokeIndex - jmpAmount; i < breaks.length; i++){
        if (breaks[i] === true){
            return i;
        }
    }
    return -1;
}
