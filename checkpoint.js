function categorize ( values){

    const result = {};

    values.forEach((values) => {
       
        const type = typeof values;
        if (result[type] === undefined) {
            result[type] = [values];
        } else {
            result[type].push(values);
        }
    });
    return result;

}
const ArrayofValues = [1, 'hello', function sayHi(){ console.log('hi') }, 'world', true, 0n,
  1000, undefined];

  console.log(categorize(ArrayofValues));




let names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

let uniq = names
  .map((name) => {
    return {count: 1, name: name}
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a
  }, {})

 const dedup =
  
 Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b])
 
console.log(dedup);
 
function filterObject(obj, predicate) {

const filtered= {};
for (const [key, value] of Object.entries(obj)) {
    if (predicate(key, value)) {
      filtered[key] = value;
    }
  }
  return filtered;

}

const obj = {

    foo: 1,
    bar: "hello",
    baz : true,
}
const filtered = filterObject(obj,( key, value)=> key === 'foo' || value === 'hello');


  
  console.log(filtered);



const asyncJob = (n) => Math.random() > 0.5 ? Promise.resolve(n+1) :

Promise.reject(Error('boom'));

(async ()=>{
  try {
    const i = await asyncJob(0);
    const x = await asyncJob(i);
    const y = await asyncJob(i);
    const z = await asyncJob(i);
    return asyncJob(x+ y + z);

  }
  catch(err){
    throw new Error('gestion erreur globale: $ {err.message}');

  }

})().then(result=>console.log(result)).catch(err => console.error (err.message));



let p1 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 500, 'one'); 
});
let p2 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 100, 'two'); 
});

Promise.race([p1, p2]).then(function(value) {
console.log(value); // "two"
// l'element le plus rapide est affiché
});


function all (){

const p1 = Promise.resolve(3);
const p2 = Promise.resolve(1337);
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 2000);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
}

all();