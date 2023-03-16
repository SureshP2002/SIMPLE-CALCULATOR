function find(){
    let e=document.getElementById("input").value
    let ans=eval(e)
    console.log(ans)
    document.getElementById("result").innerHTML=eval(e);
}