
function onChangeNum1(){
    let Num1 = parseFloat(document.getElementById("num1").value);

    return Num1;
}

function onChangeNum2(){
    let Num2 =  parseFloat(document.getElementById("num2").value);

    return Num2;
}

function handleCong(){
    let Num1 =  onChangeNum1();
    let Num2 = onChangeNum2();
    let ketqua = document.getElementById("ketqua").setAttribute('value', Num1 +Num2)
    check();
}

function handleTru(){
    let Num1 =  onChangeNum1();
    let Num2 = onChangeNum2();
    let ketqua = document.getElementById("ketqua").setAttribute('value', Num1 -Num2)
    check();
}

function handleNhan(){
    let Num1 =  onChangeNum1();
    let Num2 = onChangeNum2();
    let ketqua = document.getElementById("ketqua").setAttribute('value', Num1 *Num2)
    check();
}

function handleChia(){
    let Num1 =  onChangeNum1();
    let Num2 = onChangeNum2();
    let ketqua = document.getElementById("ketqua").setAttribute('value', Num1 /Num2)
    check();

}

function check(){
    if(onChangeNum1() ) console.log("D")
    else document.getElementById("check1").innerHTML = "X";
    if(onChangeNum2()) console.log("D");
    else document.getElementById('check2').innerHTML = "X"
}
function handleRemove(){
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    let ketqua = document.getElementById("ketqua").setAttribute('value', '');
    document.getElementById('check1').innerHTML ="";
    document.getElementById('check2').innerHTML ="";
}