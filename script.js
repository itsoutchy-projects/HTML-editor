window.addEventListener("load", function(ev) {
    var htmlArea = this.document.getElementById("htmlArea");
    var frame = this.document.getElementById("result");
    //console.log(htmlArea.innerText);
    htmlArea.addEventListener("keyup", function(ev) {
        //frame.innerHTML = "#document \n" + htmlArea.innerText;
        frame.setAttribute("srcdoc", htmlArea.value);
    });
});
