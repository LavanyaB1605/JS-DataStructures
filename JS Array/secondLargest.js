var array=[];
for(var i=0;i<10;i++){
    array[i]=Math.floor(Math.random()*900)+100;
}

array.sort();
console.log(array);
console.log(array[array.length-2]);
console.log(array[1]);