/**
 * 1. 상품 여는 함수, 상품 확인 함수, 상품 사용 함수
 * 
 * 
 */

const { of, delay, tap } = require("rxjs");

function openBox(delivery){
    return of(delivery).pipe(
        delay(3000),
        tap(delivery => console.log(`${delivery} 를 열었습니다.`))
    )
}

function checkBox(delivery){
    return of(delivery)
}