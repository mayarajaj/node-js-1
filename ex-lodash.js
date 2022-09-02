

const _ = require ('lodash');

const x = [1,[2,[3]]] ; 
console.log(x);
console.log(_.flattenDeep(x));
