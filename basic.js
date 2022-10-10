let check=document.getElementById("check");
let scretenumber=Math.trunc(1+1000*Math.random());
console.log(scretenumber);
let numbershower=document.querySelector(".numbershower");
let hello1=document.querySelector('.hello1');
console.log(hello1)
let count=0;
let score=document.getElementById("score");
let highest=document.getElementById("highest");

console.log();

// numbershower.innerText=scretenumber;
check.addEventListener('click',(e)=>{
    let input=Number(document.getElementById("input").value);
   
    if(input==scretenumber){
        hello1.innerHTML="Correct Number";
        
        numbershower.textContent=scretenumber;
        document.querySelector('body').style.backgroundColor = 'rgb(36, 86, 81)';
        score.innerText=100-count;
        console.log(100-count)
        if(highest.textContent<100-count){
            highest.textContent=100-count;
        }


    }else if(input> scretenumber){
        
           hello1.innerHTML="Too Higher...."
    }else{
        hello1.innerHTML="Too Lower.....";

    }
    // console.log(input="");
    document.getElementById("input").value="";
    count++;
    if(count==100){
        reload();
    }
    
})
let again=document.querySelector('.again');
again.addEventListener('click',function(){
    count=0;
    scretenumber=Math.trunc(1+1000*Math.random());
    hello1.innerHTML="start guessing";
    numbershower.textContent="?";
    document.querySelector('body').style.backgroundColor = 'black';
    score.textContent=0;
})
function reload() {
    count=0;
    scretenumber=Math.trunc(1+1000*Math.random());
    hello1.innerHTML="start guessing";
    numbershower.textContent="?";
    document.querySelector('body').style.backgroundColor = 'black';
    score.textContent=0;
}

