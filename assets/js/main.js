function mutedImg() {
    const z = document.getElementById('hide2');

    if(z.style.display === 'block') {
        z.style.display = 'none';
    }else {
        z.style.display = 'block';
    }
}

function myPhone() {
    const phone = document.getElementById("my-phone");

    if(phone.style.display === 'block') {
        phone.style.display = 'none';
    }else {
        phone.style.display = 'block';
    }
}

function bottomPhone() {
    document.getElementById("hide-incoming").style.display = "flex";

}