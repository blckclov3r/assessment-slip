// JavaScript source code


function screenshot() {

    html2Canvas(document.querySelector('#mContainer'), { useCORS: true }).then((canvas) => {
        let pageData = canvas.toDataURL('image/jpeg', 1.0);
    }

    html2canvas(document.getElementById('mContainer')).then(function (canvas) {
        document.body.appendChild(canvas);
        var imgdata = canvas.toDataURL('image/png');
        var doc = new jsPDF();
        doc.addImage(imgdata, 'PNG', 10, 10);
        doc.save("slip.pdf");
    });


}

