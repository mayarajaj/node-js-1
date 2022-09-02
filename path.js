const path = require('path');
// it just give / dont know why ?
console.log(path.sep);
// it give  the path u write in it  
const pathjoin = path.join('na' , 'nana' , 'nanana')
console.log(pathjoin);
// it will give u the base name (the last) to path only 
console.log(path.basename(pathjoin))
// it will give u the all path u wanna 
console.log(path.resolve( 'na','nana', 'nanana'));