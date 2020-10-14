export default function calculateBin2Dec (binValue = '') {
    let decimal = 0;
    const reversedString = binValue.split('').reverse().join('');
    for (let index = 0; index < reversedString.length; index++) {
        const charToBin = Number(reversedString.charAt(index));
        decimal+=(charToBin * Math.pow(2,index));        
    }

    return decimal;
}