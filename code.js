function factorial(number, callback) {
    let result = 1;
    function fc() {
        result *= number;
        number--;
        if(number === 0)
        {
            clearTimeout(timer);
            callback(result);
            return;
        }
        timer = setTimeout(fc);
    }
    let timer = setTimeout(fc);
}

function throughRange(from, to, callback) {
    let n = from;
    function fc() {
        callback(n);
        n++;
        if(n >= to)
        {
            clearTimeout(timer);
            return;
        }
        timer = setTimeout(fc);
    }
    let timer = setTimeout(fc);
}

function throughReversedRange(from, to, callback) {
    let n = to;
    function fc() {
        callback(n);
        n--;
        if(n <= from)
        {
            clearTimeout(timer);
            return;
        }
        timer = setTimeout(fc);
    }
    let timer = setTimeout(fc);
}

function Reverse(number, callback) {
    let reversed = 0;

    function fc() {
        let digit = number % 10;
        reversed *= 10;
        reversed += digit;
        number -= digit;
        number /= 10;
        if(number === 0)
        {
            callback(reversed);
            clearTimeout(timer);
            return;
        }
        timer = setTimeout(fc);
    }
    let timer = setTimeout(fc);

}

function SumOfDigits(number, callback) {
    let sum = 0;

    function fc() {
        let digit = number % 10;
        number -= digit;
        number /= 10;
        
        sum += digit;
        
        if(number === 0)
        {
            callback(sum);
            clearTimeout(timer);
            return;
        }
        timer = setTimeout(fc);
    }
    let timer = setTimeout(fc);
}

function Brackets(amount) {
    let n = amount;
    let str = "";
    function fc() {
        n--;
        if(n >= 0)
            str += "(";
        else if(n >= -amount)
            str += ")";
        else {
            console.log(str);
            clearTimeout(timer);
            return;
        }
        
        timer = setTimeout(fc);
    }
    let timer = setTimeout(fc);
}

factorial(100, a => console.log("Factorial of 100: " + a));
throughRange(150, 160, a => console.log(a));
throughReversedRange(30, 40, a => console.log(a));
Reverse(12345, a => console.log("Reversed: " + a));
SumOfDigits(1357, a => console.log("Sum of digits: " + a));
Brackets(3);