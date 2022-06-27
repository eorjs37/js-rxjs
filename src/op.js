const Rx = require('rxjs');
const { take,tap,filter,map,reduce } = require('rxjs/operators');

const stream = Rx.from([1,2,3,4]);

//filter
stream.pipe(
    filter(data => data>3)
).subscribe(console.log);

//map
stream.pipe(
    map(data => data*2)
).subscribe(console.log);

//reduce
stream.pipe(
    reduce((accu,data)=>{
        return accu+data;
    })
).subscribe(console.log);
