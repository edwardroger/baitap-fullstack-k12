var b = true;
var a = [];
function henDem(){

    let gio = document.getElementById('gio').value;
    let phut = document.getElementById('phut').value;
    let giay = document.getElementById('giay').value;
    var interval =setInterval(()=>{   
         
        if(giay == 0 && phut == 0 && gio == 0) {
            console.log("done");
            clearInterval(interval);
        }
        else {
            if(b === false) {
                b = true;
                clearInterval(interval);
            }
            else {
               giay -= 1;
            //if(giay === -1) giay = 59;
                document.getElementById('giay').value = giay;
                if(giay === -1) {
                    giay = 59;
                    document.getElementById('giay').value = giay;
                    phut -= 1;
                    document.getElementById('phut').value = phut; 
                }
                if(phut === -1) {
                    phut = 59;
                    document.getElementById('phut').value = phut; 
                    gio -= 1;
                    document.getElementById('gio').value = gio;
                } 
            }
        } 
    },1000);
}
function henBack() {
    let giod = document.getElementById('gio').value;
    let phutd = document.getElementById('phut').value;
    let giayd = document.getElementById('giay').value;
    var test = setInterval(()=>{
        let a = new Date();
        let gio = a.getHours();
        let phut =  a.getMinutes();   
        let giay = a.getSeconds();
        if(gio == giod && phut == phutd && giay == giayd) {       
            // alert("Đến giờ");
            let k = confirm("Báo thức");
            if (k){
                clearInterval(test);
            }else {
                giayd += 10;
                //phutd += 5; hmmmm
            }
        }else {
            if(b === false){
                b = true;
                clearInterval(test);
            }
        }
    },1000);

}
function henSkip(){
    b = false;
}

function henClear(){
    document.getElementById('gio').value = 0;
    document.getElementById('phut').value =0;
    document.getElementById('giay').value =0;
    b = false;
}

function onClick() {
    
}