$(document).on('click', '#transfer-call', function () { 
    $('#call-list').css("transform", "translate(0)");
})

function mutedImg() {
    const z = document.getElementById('unmute');

    if(z.style.display === 'block') {
        z.style.display = 'none';
    }else {
        z.style.display = 'block';
    }
}

function mutedIncomingImg() {
    const z = document.getElementById('hide2');

    if(z.style.display === 'block') {
        z.style.display = 'none';
    }else {
        z.style.display = 'block';
    }
}

function myPhone() {
    const phone = document.getElementById("my-phone");
    $('#call-list').css("transform", "translate(0)");
    $('.call-pad').toggleClass('js-call');
}

$(document)
.on('click', '#call-attend', function () { 
    $('#hide-incoming').hide();
    $('#calling-container').show();
})

.on('click', '.call-direction, #callpad-attend', function() {
    $('#call-list').css("display", "none");
    $('.transfering-call-content').css("display", "block");
    $('.call-time').css("display", "none");
})

.on('click', '#hold-call', function() {
    $('.verticle-line').toggleClass('hold-call');
})

.on('click', '.bottom-phone-1', function() {
    $('#dial-list').css("display", "block");
})

.on('click', '#dialpad-dial', function() {
    $('#dial-list').css("display", "none");
    $('#transfering-call-dial').css("display", "block");
})

var hideIncoming = $('#hide-incoming');

$(document).on('click','.show-incoming', function() {
    $(this).addClass('active')
    if (hideIncoming.css("display", "none")) {
        $('#hide-incoming').css("display", "flex");
    }

    else if ($('#transfering-call').css("display", "block")) {
        $('#hide-incoming').css("display", "none");
    }

    else if ($('#calling-container').css("display", "block")) {
        $('#hide-incoming').css("display", "none");
    }

    else {
        $('#hide-incoming').css("display", "none");
    }
})


const listCircle = document.querySelectorAll('.call-list-detail');
(listCircle ?? []).forEach(circle => {
    circle.addEventListener('click', e => {
        const tickCircle = circle.querySelector('.call-list-circle');
        if (tickCircle) {
            tickCircle.classList.toggle('check-js')
        }
    })
});

function getNumber(num) {
    var dial = document.getElementById('dialed-numbers-calling');
    dial.value += num;
}

function removeNumber() {
    var orignalInput = document.getElementById('dialed-numbers-calling');
    var dialed = document.getElementById('dialed-numbers-calling').value;
    dialed = dialed.substring(0, dialed.length - 1);
    orignalInput.value=dialed;
}


function getNumberRIning(num) {
    var dial = document.getElementById('dialed-numbers');
    dial.value += num;
}
function removeNumberRIning() {
    var orignalInput = document.getElementById('dialed-numbers');
    var dialed = document.getElementById('dialed-numbers').value;
    dialed = dialed.substring(0, dialed.length - 1);
    orignalInput.value=dialed;
}

//phone icon flow

$(document).on('click','.bottom-phone-1', function() {
    $('#call-list').css("transform", "translate(0)");
})


//elemets ewsizeable js

var p = document.getElementById('transfering-call-dial');
    p.className = p.className + ' resizable';
    var resizer = document.createElement('div');
    resizer.className = 'resizer';
    p.appendChild(resizer);
    resizer.addEventListener('mousedown', initDrag, false);

var startX, startY, startWidth, startHeight;

function initDrag(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
    }

    function doDrag(e) {
    p.style.width = (startWidth + e.clientX - startX) + 'px';
    p.style.height = (startHeight + e.clientY - startY) + 'px';
    }

    function stopDrag(e) {
        document.documentElement.removeEventListener('mousemove', doDrag, false);    document.documentElement.removeEventListener('mouseup', stopDrag, false);
    }

    //icon deag js

    dragElement(document.getElementById("bottom-phone-1"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}