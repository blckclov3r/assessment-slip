// JavaScript source code

$(document).ready(function () {

    var specialElementHandlers = {
        "#editor": function (element, renderer) {
            return true;
        }
    };

    $("#mButton").click(function () {
       /* var doc = new jsPDF();
        doc.fromHTML($("#target").html(), 0, 0, {
            "width": 100,
            "elementHandlers": specialElementHandlers
        });
        doc.save("save-file.pdf"); */

        html2canvas(document.getElementById("mContainer")).then(function (canvas) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "uv-slip.jpg";
            link.href = canvas.toDataURL();
            link.target = '_blank';
            link.click();
        }); 

       /* var container = document.getElementById("target");; // full page 
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




