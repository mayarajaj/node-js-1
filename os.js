const os = require ('os');

const user = os.userInfo();
console.log(user);
console.log(`time is ${os.uptime}`);

const cur = {
    name : os.type() , 
    releas : os.release() ,
    freemem : os.freemem(),
    totalmem : os.totalmem() 
}
console.log(cur);