// JavaScript source code

$(document).ready(function () {




    $("#mButton").click(function () {
 

        html2canvas(document.getElementById("mContainer")).then(function (canvas) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "uv-slip.jpg";
            link.href = canvas.toDataURL();
            link.target = '_blank';
            link.click();
        }); 
         
       /*  var container = document.getElementById("target");; 
        html2canvas(container, { allowTaint: true }).then(function (canvas) {

            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "html_image.png";
            link.href = canvas.toDataURL("image/png");
            link.target = '_blank';
            link.click();
        }); */

            
    });

   
});




