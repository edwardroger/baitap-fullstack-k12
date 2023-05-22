function display(value) {
    
    document.getElementById("display").value += value;
    
}

function clearContent () {
    document.getElementById("display").value = ("");
}

function result() {
    let soA = document.getElementById("display").value;

    let soB = eval(soA);
    document.getElementById("display").value = soB;

}
