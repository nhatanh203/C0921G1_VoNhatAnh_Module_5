let i:number;
let fib:any[] =[];
let sum :number;
sum = 0;
fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 20; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    sum = fib[i] + fib[i] ;
}
console.log(sum);