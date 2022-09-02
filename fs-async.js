const {readFile , writeFile} = require('fs');
//هون الريسولت هو الشي يلي قرأه التابع 
readFile('./first.text', 'utf8' , (err , result ) => {
    if (err)
    {
        console.log(err);
        return;
    }
    console.log(result);
});
//اذا كتبت شي بملف موجود أصلا ف بشيل كلشي فيه و بيكتب من الاول و النتيجة الريسولت هي غير موجودة أصلا و ما بتعطي شي 
 writeFile('./first.text', ' **   MADARA>   **  ' , (err , result ) => {
     if (err)
     {
         console.log(err);
         return;
     }//  console.log(result);
 });