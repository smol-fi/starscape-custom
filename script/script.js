// define star count
var numStars = 250;

// define maximum star size
var starMax = 100;

// define scape height/width
var scapeSize = 150;

// create style tag
var styleTag = document.createElement('style');
document.head.appendChild(styleTag);
var starStyle = styleTag.sheet;

// set up sleep
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// create stars
async function createStars() {
    for(n=1; n<=numStars; n++) {
        document.getElementById("space").innerHTML += "<div class='star'></div>";
        var starSize = Math.floor((Math.random()*starMax)+1);
        var starPos3d = Math.floor((Math.random()*scapeSize)+1)+"px, "+ Math.floor((Math.random()*scapeSize)+1)+"px, "+ Math.floor((Math.random()*scapeSize)+500)+"px);";
        var animationDelay = Math.floor((Math.random()*numStars)+1);
        starStyle.insertRule(".star:nth-child("+n+"){width:"+starSize+"px;height:"+starSize+"px;"+"box-shadow: 0 0 "+starSize+"px red;"+"transform:translate3d("+starPos3d+");animation-delay:-"+animationDelay/10+"s;}");
    }

    await sleep(30000);
    document.getElementById("space").style.perspective = "1500px";
    for (n=1; n<=numStars; n++) {
        starStyle.insertRule(".star:nth-child("+n+"){left: calc(50% - 100px); top: calc(50% - 100px);}");
    }
	document.getElementById("meteor").style.display = "none";
//    document.getElementsByClassName("star")[.style.animation = "crash 1s linear infinite";
}

createStars();




////sleep function for explode(), explode stars & fade out meteor after 60s
//async function explode() {
//	await sleep(6000);
//	scapeSize = 1000;
//    createStars();
//}
//
//// // explode stars & fade out meteor
//
//// function explode() {
//// }
//
//explode();