const Rx = require('rxjs');
const { take } = require('rxjs/operators');

const stream1 = Rx.from([1,2,3,4,5]);
const stream2 = Rx.from([6,7,8,9,10]);

const stream3 = Rx.interval(1000).pipe(take(2));
const stream4 = Rx.interval(1000).pipe(take(2));

// concat 이어 붙이다.
// Rx.concat(stream1,stream2).subscribe({
//     next:(data)=>{
//         console.log(data);
//     },
//     complete:()=>{
//         console.log('complete');
//     },
//     error:(err)=>{
//         console.error(err);
//     }
// })

// Rx.concat(stream3,stream4).subscribe(console.log);


//merge
Rx.merge(stream1,stream2).subscribe({
    next:(data)=>{
        console.log(data);
    },
    complete:()=>{
        console.log('complete');
    },
    error:(err)=>{
        console.error(err);
    }
})