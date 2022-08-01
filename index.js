var  My_Array = [1,2,4,3,4,5,6,7,8,9];

var  newArray = My_Array.filter((value, index, array)=>{
   
    return array.indexOf(value) == index;
});
console.log(newArray);

