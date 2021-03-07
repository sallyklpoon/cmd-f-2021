/* =============== USER EVENT LISTENER =============== */

let send_buttons = document.getElementsByClassName('send-button');

let send_button = send_buttons[0];

let section = document.querySelector('section')



function get_user_image() {

    let sender_image_link = sessionStorage.getItem('user_icon');

    let image_node = document.createElement('img');
    image_node.setAttribute('src', sender_image_link);
    image_node.setAttribute('class', 'cat-image');

    return image_node;

}


function get_user_image_icon() {

    let icon_div = document.createElement('div');
    icon_div.setAttribute('class', 'cat-icons');

    icon_div.appendChild(get_user_image());

    return icon_div;

}


function get_para_element(message) {

    let para = document.createElement('p');
    para.setAttribute('class', 'components-text');
    para.style.textAlign = 'right';

    let para_textnode = document.createTextNode(message);

    para.appendChild(para_textnode);

    return para;

}


function get_text_bubble_div_right(message) {

    let div_node = document.createElement('div');
    div_node.setAttribute('class', 'text-bubble text-bubble-right');

    div_node.appendChild(get_para_element(message));

    return div_node;

}

function get_sender_chat_div_right(message) {

    let div_node = document.createElement('div');
    div_node.setAttribute('class', 'user-message')

    div_node.appendChild(get_text_bubble_div_right(message));
    div_node.appendChild(get_user_image_icon());

    return div_node;

}


send_button.addEventListener('click', function () {

    let text_box = document.getElementById('text-area')
    var text_box_value = text_box.value;

    let message = text_box_value;
    section.appendChild(get_sender_chat_div_right(message));

    text_box.value = "";

})


/* =============== MOCK LISTENER MESSAGE =============== */

let mock_trigger = document.getElementById('mock-trigger');


function get_mock_image() {

    let image_node = document.createElement('img');
    image_node.setAttribute('src', './images/cat6.svg');
    image_node.setAttribute('class', 'cat-image');

    return image_node;

}


function get_mock_icon() {

    let icon_div = document.createElement('div');
    icon_div.setAttribute('class', 'cat-icons');

    icon_div.appendChild(get_mock_image());

    return icon_div;

}


function get_mock_para_element(message) {

    let para = document.createElement('p');
    para.setAttribute('class', 'components-text');
    para.style.textAlign = 'left';

    let para_textnode = document.createTextNode(message);

    para.appendChild(para_textnode);

    return para;

}


function get_mock_text_bubble_div_left(message) {

    let div_node = document.createElement('div');
    div_node.setAttribute('class', 'text-bubble text-bubble-left');

    div_node.appendChild(get_mock_para_element(message));

    return div_node;

}

function get_mock_chat_div_left(message) {

    let div_node = document.createElement('div');
    div_node.setAttribute('class', 'mock-message')

    div_node.appendChild(get_mock_icon());
    div_node.appendChild(get_mock_text_bubble_div_left(message));


    return div_node;

}

mock_trigger.addEventListener('click', function (event) {

    let mock_message = "Hey, I'm here to listen, fire away.";
    section.appendChild(get_mock_chat_div_left(mock_message));

})