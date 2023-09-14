// node js => sever side js run time environment



// async method, which blocks the thread until the file stats //
// const fs = require('fs');
//  fs.stat('/home/devel-selvamprem/PROJECT/guvi node js/node.js/filesystem.js',(err,stats)=>{
//     if(err){
//         console.error(err);
//         return;

//     }
    // console.log(stats);
    // this command was check with all stats///
    // console.log(stats.isFile()); 
    // this command was check with file or directory in the file //
    // console.log(stats.isDirectory());
    // this command was check with directory in the file //
    // console.log(stats.isSymbolicLink());
   // this command was check with symbol in the file //
    //  console.log(stats.size) ;
    // this command was check with file  size ///
//  })  

//   blocking and  sync  method


//   const fs =require('fs/promises');

//   async function checkwithfunction () {
//     try{
//        const stats = await   fs.stat('/home/devel-selvamprem/PROJECT/guvi node js/node.js/filesystem.js');
//        console.log (stats.isFile());
//        //sync method of the method are using to this async function are suporting

//     }
//     catch(err){
//         console.log(err)
//     }
//   }
//   checkwithfunction();

// const fs =require('fs/promises');

//   async function checkwithfunction () {
//     try{
//        const stats = await   fs.stat('/home/devel-selvamprem/PROJECT/guvi node js/node.js/filesystem.js');
//        console.log (stats.isFile());
//        //sync method of the method are using to this async function are suporting

//     }
//     catch(err){
//         console.log(err)
//     }
//   }
//   checkwithfunction();

 ///  node.js file path 
const  path =require('path');
 

const test = '/home/devel-selvamprem/PROJECT/guvi node js/node.js/filesystem.js/text.txt'

 console.log(path.dirname(test));
 console.log(path.basename(test));
 console.log(path.extname(test));