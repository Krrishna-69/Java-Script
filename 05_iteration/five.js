const coding = ['js', 'java', 'cpp', 'python', 'golang']

// coding.forEach( function (val) {
//     console.log(val);
// })

coding.forEach( (item) => {
   //console.log(item);
})

function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    console.log(item,index,arr);
})

const myCoding = [{
    langName: "javascript",
    langFile: "js"
}
,{
    langName: "java",
    langFile: "jv"
},
{
    langName: "python",
    langFile: "py"
}

]

myCoding.forEach( (item) => {
       console.log(item.langName);
})