const Rx = require('rxjs');
const { take,tap,filter,map,reduce,concatAll,concatMap,mergeMap,mergeAll } = require('rxjs/operators');

//const stream = Rx.from(['택배1','택배2','택배3','택배4']);

const stream = Rx.interval(1000).pipe(take(3),map(data=>`택배${data+1}`))

/********************* concat (map) *********************/
function openBox(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${data} 상품오픈`);
            resolve(data)
        },1500)
    })
}

function checkBox(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${data} 상품확인`);
            resolve(data)
        },1500)
    })
}

function useProduct(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${data} 상품사용`);
            resolve(data)
        },1500)
    })
}

async function userTask(data){
    await openBox(data);
    await checkBox(data);
    await useProduct(data);
}

// stream.pipe(
//     concatMap((data) =>  userTask(data))
// ).subscribe();


/********************* concat (all) *********************/
const stream1 = Rx.interval(1000).pipe(take(3),tap(console.log));
const stream2 = Rx.interval(1000).pipe(take(3),tap(console.log));
const stream3 = Rx.interval(1000).pipe(take(3),tap(console.log));
const stream4 = Rx.interval(1000).pipe(take(3),tap(console.log));
const stream5 = Rx.interval(1000).pipe(take(3),tap(console.log));


const stream6 = Rx.of(stream1,stream2,stream3,stream4,stream5);

// stream3.pipe(
//     concatAll()
// ).subscribe()


/********************* merge (map) *********************/
// stream.pipe(
//     mergeMap((data)=> Rx.from(userTask(data)))
// ).subscribe()


/********************* merge (all) *********************/
// merge (all)
stream6.pipe(
    mergeAll(2)
).subscribe();
