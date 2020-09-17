// JavaScript source code

$(document).ready(function () {

    var specialElementHandlers = {
        "#editor": function (element, renderer) {
            return true;
        }
    };

    $("#mButton").click(function () {
    
        var container = document.getElementById("mContainer"); // full page 
        html2canvas(container, { allowTaint: true }).then(function (canvas) {

            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "html_image.png";
            link.href = canvas.toDataURL("image/png");
            link.target = '_blank';
            link.click();
        });
    });

   
});




