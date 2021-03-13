i = 1;
function changeimg() {
    timerID = setTimeout(changeimg, 1500);
    if (i >= 20) i = 1;
    document.images[0].src = "../"+"pic/" + i + ".jpg";
    i++;

}
function getback() {
    document.images[0].src = "../"+"pic/"+"1.jpg"
    clearInterval(timerID);
} 