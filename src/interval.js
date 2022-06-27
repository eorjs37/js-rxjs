const Rx = require('rxjs');

const stream = Rx.interval(1000);

// stream
// .pipe(
//     Rx.take(10)
// )
// .subscribe({
//     next:(data)=>{
//         console.log(data);
//     },
//     complete:()=>{
//         console.log('complete');
//     },
//     error:(err)=>{
//         console.error(err);
//     }
// });


const timer = Rx.timer(3000,1000);

timer
.pipe(
    Rx.take(10)
)
.subscribe({
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