let screen= document.getElementById('screen');
    buttons=document.querySelectorAll('button');
let currentValue="";
let tempvalue="";
let list=[];

    for(item of buttons){
        item.addEventListener('click',(e)=>{
            buttonText=e.target.innerText;
            if(buttonText=="AC"){
                currentValue="";
                console.log(currentValue);
                screen.innerText=currentValue;
                    
            }
            else if(buttonText=='+'){
                if(currentValue.charAt(currentValue.length-1)=='+' || currentValue.charAt(currentValue.length-1)=='-' || currentValue.charAt(currentValue.length-1)=='*' || currentValue.charAt(currentValue.length-1)=='/'){
                    screen.innerText=currentValue;
                }
                else{
                    currentValue+=buttonText;
                    screen.innerText=currentValue;
                }
            }
            else if(buttonText=='-'){
                if(currentValue.charAt(currentValue.length-1)=='+' || currentValue.charAt(currentValue.length-1)=='-' || currentValue.charAt(currentValue.length-1)=='*' || currentValue.charAt(currentValue.length-1)=='/'){
                    screen.innerText=currentValue;
                }
                else{
                    currentValue+=buttonText;
                    screen.innerText=currentValue;
                }
            }
            else if(buttonText=='*'){
                if(currentValue.charAt(currentValue.length-1)=='+' || currentValue.charAt(currentValue.length-1)=='-' || currentValue.charAt(currentValue.length-1)=='*' || currentValue.charAt(currentValue.length-1)=='/'){
                    screen.innerText=currentValue;
                }
                else{
                    currentValue+=buttonText;
                    screen.innerText=currentValue;
                }
            }
            else if(buttonText=='/'){
                if(currentValue.charAt(currentValue.length-1)=='+' || currentValue.charAt(currentValue.length-1)=='-' || currentValue.charAt(currentValue.length-1)=='*' || currentValue.charAt(currentValue.length-1)=='/'){
                    screen.innerText=currentValue;
                }
                else{
                    currentValue+=buttonText;
                    screen.innerText=currentValue;
                }
            }
            else if(buttonText=="="){
                if(currentValue.length===0){
                    currentValue="";
   
                }
                else{
                    list.push(currentValue+"="+eval(currentValue));
                    screen.innerText=eval(currentValue);
                    currentValue=screen.innerText;
                    // console.log(screen);
                }
            }
            else if(buttonText=="HISTORY"){
                screen.innerText=list;
            }
            else if(buttonText=="DEL"){
                currentValue=currentValue.slice(0,currentValue.length-1);
                screen.innerText=currentValue;

            }
            else if(buttonText=="."){
                if(currentValue=="" || currentValue.charAt(currentValue.length-1)=="+" || currentValue.charAt(currentValue.length-1)=="-" || currentValue.charAt(currentValue.length-1)=="*" || currentValue.charAt(currentValue.length-1)=="/"){
                    currentValue+=buttonText;
                    screen.innerText=currentValue;
                }
                else{

                let len= currentValue.length;
                let k=0;
                let poin=true;
                while(len!=0  ){
                    // console.log(len);
                    // console.log(k);
                    if(currentValue.charAt(currentValue.length-k-1)=='.'){
                        poin=false;
                        break;
                    }
                    else if(currentValue.charAt(currentValue.length-k-1)=="+" || currentValue.charAt(currentValue.length-k-1)=="-" || currentValue.charAt(currentValue.length-k-1)=="*" || currentValue.charAt(currentValue.length-k-1)=="/"){
                        break;
                    }
                    k=k+1;
                    len--;

                }
                // len= currentValue.length;
                if(poin==false){
                    currentValue=currentValue;
                    
                    
                }
                else{
                    currentValue+=buttonText;
                    screen.innerText=currentValue;

                }
            }
            
                
                

            }
            else{
                currentValue+=buttonText;
                screen.innerText=currentValue;
                // console.log(currentValue);


            }
        })

    }