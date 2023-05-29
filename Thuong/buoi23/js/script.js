var isOpen = false; 
var Num ='';
var arrNum =[];
var arryInput =[];
var arryOp =[];

function toggle() {
    isOpen = ! isOpen; 
    {
        handlRemoveAll();
        document.getElementById('status_calar'). innerHTML = isOpen ? '<div class="box">V</div>' :'';
        document.getElementById('result').value = '';   
        document.getElementById('input').value = '';  
    }

}

function changeInput(number) {
    if (isOpen) {
            arryInput += number;
            Num += number;
            document.getElementById('input').value = arryInput;

        
    }
}

function selectOperator(op) {
    if(isOpen){
        arrNum.push(Num);
        Num ='';
        console.log(arrNum);
        arryInput += op;
        arryOp.push(op);
        document.getElementById('input').value = arryInput;
        console.log("op");
        console.log(arryOp);
    }
}

function handleResult() {

    if(arryInput.length !== 0){
        var sum =0;
        arrNum.push(Num);
        Num ='';    
        while(arryOp.length !== 0){
            let a = parseFloat(arrNum.shift()); 
            console.log(a);
            let b = parseFloat(arrNum.shift());
            console.log(b);
            let op = arryOp.shift();
            
            console.log(arryOp);
    
            if(op ==='+') {
                if(arryOp[0] === '/'){
                    arryOp.shift();
                    let c =parseFloat( arrNum.shift());
                    sum = a + b / c;
                }else if(arryOp[0]=== '*'){
                    let c =parseFloat( arrNum.shift());
                    sum = a + b * c;
                    arryOp.shift();
                }else {
                    sum =  (a+b);                  
                    console.log(arrNum);
                    
                }
                arrNum.unshift(sum);
            }else if(op === '-'){
                if(arryOp[0] === '/'){
                    let c =parseFloat( arrNum.shift());
                    arryOp.shift();
                    sum = a - b / c;
                    // arrNum.unshift();
                }else if(arryOp[0] === '*'){
                    let c =parseFloat( arrNum.shift());
                    arryOp.shift();
                    sum = a - b * c;
                    // arrNum.unshift();
                }else {
                    sum =  (a-b);
                    arrNum.unshift(sum);
                    console.log(arrNum);
                    // arrNum.unshift(sum);
                }
                arrNum.unshift(sum);
            }else if(op === '/') {
                sum =  (a/b);
                arrNum.unshift(sum);
                
            }else {
                sum =  (a*b);
                arrNum.unshift(sum);        
            }
           
        }
         document.getElementById('result').value = arrNum[0];
    }else{
        document.getElementById('result').value = 3;
    }


    
}
function handlRemoveAll(){
    arryInput ='';
    Num ='';
    arrNum.length =0;
    arryOp = [];
    document.getElementById('result').value = '';
    document.getElementById('input').value = '';
    
}


