var sam = [ "1.png", "2.png", "3.png", "4.png"];

var i = 0;

function slide() {
document.getElementById("images").src = sam[i];
if(i<sam.length-1)
i++;
else i=0;
}

setInterval(slide , 2000);

