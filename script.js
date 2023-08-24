window.addEventListener("load", function(ev) {
    var htmlArea = this.document.getElementById("htmlArea");
    var frame = this.document.getElementById("result");
    //console.log(htmlArea.innerText);
    // Reinventing it because I HATE the stupid delay the github pages site always gets, it's sooooooooooooooooooooooo annoying >:(
    // htmlArea.addEventListener("input", function(ev) {
    //     //frame.innerHTML = "#document \n" + htmlArea.innerText;
    //     frame.setAttribute("srcdoc", htmlArea.value);
    // });

    this.setInterval(checkPleasePLEASE, 20); // We need to delay this a bit to keep it optimised
    // We just repeatedly call this function now, PLEASE DO NOT LAG THE THING OUT IM TRYING SO HARD!!!!!!!!!!!!!!!!!!!!!!
    function checkPleasePLEASE() {
        if (htmlArea.value != frame.getAttribute("srcdoc")) { // Make sure that the user has actually typed some new code
            frame.setAttribute("srcdoc", htmlArea.value);
        }
    }

    // INDENTING YAY
    htmlArea.addEventListener("keydown", function(ev) {
        if (ev.key == 'Tab') {
            ev.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;
        
            // set textarea value to: text before caret + tab + text after caret
            this.value = this.value.substring(0, start) +
              "\t" + this.value.substring(end);
        
            // put caret at right position again
            this.selectionStart =
              this.selectionEnd = start + 1;
          }
    });
});
