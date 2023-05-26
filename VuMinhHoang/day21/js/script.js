var isOpen = false

const toggle = () => {
    isOpen = !isOpen
    if (isOpen) {
        document.getElementById("result").value = "Đã bật máy tính";
    }
    else { document.getElementById("result").value = ""; }

}