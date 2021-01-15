var index = -1;
var arr = [];
var sliderInterval, isHover = false;
var Item = /** @class */ (function () {
    function Item(url) {
        this.url = url;
    }
    return Item;
}());
function setHTML() {
    document.querySelector('body').innerHTML += "<div id='slider'></div>";
    document.getElementById('slider').innerHTML += "<div id='slider_container'></div>";
    document.getElementById('slider_container').innerHTML += "<div id='img'></div>";
    document.getElementById('img').innerHTML = "<i class='material-icons' id='slider_previousBtn'>keyboard_arrow_left</i>";
    document.getElementById('img').innerHTML += "<i class='material-icons' id='slider_nextBtn'>keyboard_arrow_right</i>";
}
function setSlider(arr) {
    for (var i = 1; i <= 32; i++) {
        arr.push(new Item("./assets/" + i + ".jpg"));
    }
    return setInterval(function () { return changePic(1); }, 2000);
}
function changePic(param) {
    document.getElementById('img').style.backgroundImage = "url(" + arr[changeIndex(param)].url + ")";
}
function changeIndex(param) {
    param ? index++ : index--;
    switch (true) {
        case (index < 0): {
            index = arr.length - 1;
            break;
        }
        case (index > arr.length - 1): {
            index = 0;
            break;
        }
    }
    return index;
}
function pauseInterval() {
    isHover = !isHover;
    isHover ? clearInterval(sliderInterval) : sliderInterval = setInterval(function () { return changePic(1); }, 2000);
}
setHTML();
sliderInterval = setSlider(arr);
document.getElementById('slider_previousBtn').addEventListener('click', function () { return changePic(); });
document.getElementById('slider_nextBtn').addEventListener('click', function () { return changePic(1); });
document.getElementById('img').addEventListener('mouseover', pauseInterval);
document.getElementById('img').addEventListener('mouseout', pauseInterval);
