function clock() {
    const d = new Date();
    let time = (d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
    return time;
}
document.getElementsByClassName("wrap")[0].innerHTML = clock();