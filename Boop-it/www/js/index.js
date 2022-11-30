
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleMotion);
    } else {
        alert("sorry your browser does not support this");
    }

    //var movebox = 0;

    function handleMotion(event) {
        var z = event.alpha;
        var x = event.beta;
        var y = event.gamma;

        //$("#z").text("z: " + z);
        $("#x").text("x: " + x);
        //$("#y").text("y: " + y);

        actionCheck();

        function actionCheck() {
            if (x < 115 && x >= 60) {
                $(".box").css("background-color", "green");
            } else {
                $(".box").css("background-color", "blue");
            }

            console.log(x);
            
        }


       
    }      

}
