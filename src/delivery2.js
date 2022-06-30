const { of, interval, from, map } = require('rxjs');
const { delay, tap, take, concatAll, mergeAll, reduce, bufferCount } = require("rxjs/operators")
/**
 * 1. 상품 여는 함수, 상품 확인 함수, 상품 사용 함수
 * 
 * 
 */
function openBox(delivery){
    return of(delivery).pipe(
        delay(3000),
        tap(delivery => console.log(delivery + ' 를 열었습니다.'))
    )
}

function checkBox(delivery){
    return of(delivery).pipe(
        delay(10000),
        tap(delivery => console.log(delivery + ' 를 확인하였습니다.'))
    )
}

function useProduct(delivery){
    return of(delivery).pipe(
        delay(3000),
        tap(delivery => console.log(delivery + ' 를 사용하였습니다.'))
    )
}


function doTesk(delivery){
    const tesk = from([openBox(delivery), checkBox(delivery), useProduct(delivery)]);

    return tesk.pipe(
        concatAll(),
        reduce(()=>{
            return delivery
        })
    )
}

function sendToAirPort(tenDeliveries){
    console.log(`10개 처리 완료`);
}


const deliveries = interval(1000).pipe(take(1000));


deliveries.pipe(
    map(item => doTesk(item)),
    mergeAll(3),
    tap(console.log),
    bufferCount(10),
    tap(tenDeliveries => sendToAirPort(tenDeliveries))
).subscribe()