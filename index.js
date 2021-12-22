setInterval(() => {

    // Getting the current date
    let d = new Date();

    // Getting the cureent hours, minutes and seconds 
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    // caculation for hours, minutes and seconds
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    // Styling for the rotation 
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);