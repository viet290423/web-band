function openTicketModal() {
    var ticketModal = document.getElementById('ticket-modal');
    ticketModal.classList.add('open');
}
function closeTicketModal(){
    var ticketModal = document.getElementById('ticket-modal');
    ticketModal.classList.remove('open');
}
function Check() {
    // var moneyInputs = document.getElementsByClassName('modal-input');
    // var allFilled = true;
    var m = document.getElementById('money').value;
    var g = document.getElementById('gmail').value;

    // for (var i = 0; i < moneyInputs.length; i++) {
    //     if (moneyInputs[i].value.trim() === '') {
    //         allFilled = false;
    //         break; // Nếu có ô nhập liệu rỗng, dừng kiểm tra
    //     }
    // }
    // if (!allFilled) {
    //     alert("Vui lòng điền đầy đủ thông tin");
    // } else if(!g.includes('@')){
    //     alert("Vui lòng nhập đúng địa chỉ email");
    // } else {
    //     alert("Thanh toán thành công");
    // }

    //Cách 2
    if(m === "" || g === ""){
        alert("Vui lòng điền đầy đủ thông tin");
    }else if(!g.includes('@')){
        alert("Vui lòng nhập đúng địa chỉ email");
    }else{
        alert("Thanh toán thành công");
    }
}

function sendButton() {
    var e = document.getElementById('email').value;
    var n = document.getElementById('name').value;
 
    if (e === "" || n === "") {
         alert("Vui lòng điền đủ thông tin");
    } else if (!e.includes('@')) {
         alert("Vui lòng nhập đúng địa chỉ email");
    } else {
         alert("Thành công");
    }
}


