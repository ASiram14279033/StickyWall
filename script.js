"use strict";
const canvas=document.getElementById("canvas");
canvas.width=800; //4:3
canvas.height=600;
const ctx=canvas.getContext("2d");



function rectangleCreater(){

    ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`; //background-color
    ctx.strokeStyle="green"; //border color
    ctx.fillRect(Math.random()*800*0.98,Math.random()*600*0.98,20,20);
    ctx.strokeRect(100,100,20,20);
    //Infinite loop--Time difference is 50ms
    requestAnimationFrame(()=>{
        setTimeout(rectangleCreater,10)
    })
}
rectangleCreater();
