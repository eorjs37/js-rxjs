const Rx = require('rxjs');

//Array 만들기
const deliveries = ['delivery1','delivery2','delivery3'];

const stream = Rx.from(deliveries);

stream.subscribe({
    next:(data)=>{
        console.log(data);
    },
    complete:()=>{
        console.log('complete');
    },
    error:(err)=>{
        console.error(err);
    }
});

//promise
function makePromise(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('delivery');
        },3000)
    })
}

Rx.from(makePromise()).subscribe(
    {
        next:(data)=>{
            console.log(data);
        },
        complete:()=>{
            console.log('complete');
        },
        error:(err)=>{
            console.error(err);
        }
    }
)

//싱글 여러 
Rx.of('delivery1-1','delivery2-1','delivery3-1').subscribe({
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