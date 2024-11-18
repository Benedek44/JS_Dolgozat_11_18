function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

function dateCorrect(datestring) {
    if(!datestring) return datestring;
    if(!/^([0-9]{2}\.){2}[0-9]{4}$/.test(datestring)) return null;
    let correctDate = new Date(datestring.slice(-4),datestring.slice(3,5)-1,datestring.slice(0,2)).toLocaleDateString().split('/');
    return [correctDate[1],correctDate[0],correctDate[2]].map(e => e.padStart(2,'0')).join('.');
}

function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}

const fizzBuzz = n => {
    return (n % 15 === 0 && "FizzBuzz") || 
           (n % 3 === 0 && "Fizz") || 
           (n % 5 == 0 && "Buzz") || 
           n
}