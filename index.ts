let index: number = -1;
let arr: any[] = [];
let sliderInterval: number, isHover: boolean = false;
class Item {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
}
function setHTML(): void {
    document.querySelector('body').innerHTML += "<div id='slider'></div>";
    document.getElementById('slider').innerHTML += "<div id='slider_container'></div>";
    document.getElementById('slider_container').innerHTML += "<div id='img'></div>";
    document.getElementById('img').innerHTML = "<i class='material-icons' id='slider_previousBtn'>keyboard_arrow_left</i>";
    document.getElementById('img').innerHTML += "<i class='material-icons' id='slider_nextBtn'>keyboard_arrow_right</i>";
}
function setSlider(arr: any[]): number {
    for (let i = 1; i <= 32; i++) {
        arr.push(new Item(`./assets/${i}.jpg`));
    }
    return setInterval(() => changePic(1), 2000);
}
function changePic(param?: number): void {
    document.getElementById('img').style.backgroundImage = `url(${arr[changeIndex(param)].url})`;
}
function changeIndex(param?: number): number {
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
function pauseInterval(): void {
    isHover = !isHover;
    isHover ? clearInterval(sliderInterval) : sliderInterval = setInterval(() => changePic(1), 2000);
}
setHTML();
sliderInterval = setSlider(arr);
document.getElementById('slider_previousBtn').addEventListener('click', () => changePic());
document.getElementById('slider_nextBtn').addEventListener('click', () => changePic(1));
document.getElementById('img').addEventListener('mouseover', pauseInterval);
document.getElementById('img').addEventListener('mouseout', pauseInterval);