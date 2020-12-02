function clock() {
    const d = new Date();
    let time = (d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
    return time;
}
function writeTime() {
    document.getElementsByClassName("wrap")[0].innerHTML = clock();
}
let t=setInterval(writeTime,1000);   