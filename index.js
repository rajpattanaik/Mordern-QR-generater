
import inquirer from "inquirer";
import qr from "qr-image";
import fs from"fs";
inquirer 
.prompt([
    /* pass your question in her*/
    {"message":"Type in your URL:",name:"URL"}
])
.then((answers)=>{
    //use user feedback for ....whatever!!
    const url =answers.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("rowdy_qr_img.png"));

fs.writeFile("URL.txt",url ,(err)=>{
    if (err) throw err;
    console.log("the file has been saved");
});




})
.catch((error)=>{
    if(error.isTtyError){
        //prompt couldm't be rendered in thecurrent environment

    }else{
        //something else went wrong
    }
});



