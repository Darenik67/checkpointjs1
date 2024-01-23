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


function dedup(array) {
    return array.filter((value, index) => array.indexOf(value) === index);
}

let currentArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,1,5,8,3];

let dedupArray = dedup(currentArray);

console.log(dedup(currentArray));



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

var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
// On affiche immédiatement la valeur p dans la console
console.log(p);

// Avec setTimeout on peut exécuter du code
// une fois que la pile est vide
setTimeout(function () {
  console.log("La pile est désormais vide");
  console.log(p);
});



function all (){

const p1 = Promise.resolve(3);
const p2 = Promise.resolve(1337);
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
}

all();