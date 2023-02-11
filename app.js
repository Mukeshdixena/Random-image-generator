ImageArray = [
    'img/img_01.jpg',
    'img/img_01.jpg',
    'img/img_02.jpg',
    'img/img_03.jpg',
    'img/img_04.jpg',
    'img/img_05.jpg',
    'img/img_06.jpg',
    'img/img_07.jpg',
    'img/img_08.jpg',
    'img/img_09.jpg',
    'img/img_10.jpg',
    'img/img_11.jpg',
    'img/img_12.jpg',
    'img/img_13.jpg',
    'img/img_14.jpg',
    'img/img_15.jpg',
    'img/img_16.jpg',
    'img/img_17.jpg',
    'img/img_18.jpg',
    'img/img_19.jpg',
    'img/img_20.jpg'
]


var num = 1;

function changeImage() {
    var curr = num;
    var num = Math.floor(Math.random() * ImageArray.length)

    document.getElementById("randImage").src = ImageArray[num]
}
function prevs() {
    document.getElementById("randImage").src = ImageArray[curr]
}