//
const { of, interval, from, map } = require('rxjs');
const { delay, tap, take, concatAll, mergeAll, reduce, bufferCount } = require("rxjs/operators")

function openBox(delivery){
    of(delivery).pipe(
        delay(3000),
        tap(delivery => console.log(delivery + ' 를 열었습니다.'))
    )
}   


function checkProduct(delivery){
    of(delivery).pipe(
        delay(3000),
        tap(delivery => console.log(delivery + ' 를 검사하였습니다.'))
    )
}

function useProduct(delivery){
    of(delivery).pipe(
        delay(3000),
        tap(delivery => console.log(delivery + ' 를 사용하였습니다.'))
    )
}

function doTesk(delivery){
    const takss = from([openBox(delivery), checkProduct(delivery), useProduct(delivery)]);
    return takss.pipe(
        concatAll(),
        reduce((acc,data)=>{
            return delivery
        })
    ) 
}

const deliveries = interval(1000).pipe(take(1000));

function sendToAirPort(tenDeliveries){

}

deliveries.pipe(
    map(item => doTesk(item)),
    mergeAll(3),
    tap(console.log),
    bufferCount(10),
    tap(tenDeliveries => sendToAirPort(tenDeliveries))
).subscribe();
