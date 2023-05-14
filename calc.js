window.onload = function() {
    console.log("app started");
    calculator.init(); 
};

let calculator = {
    buttons: undefined,
    input: undefined,

    init: function() {
        this.buttons = document.querySelectorAll(".numbers button, .operators button");
        
        this.input = document.getElementById("input");

        for (let i = 0; i < this.buttons.length; i++) {
            let el = this.buttons[i];
            el.addEventListener("click", this.buttonClick);
        }
    },

    buttonClick: function(e) {
        let divHtmlText = e.target.innerHTML;
        console.log("Klik: " + divHtmlText);
        calculator.addToInput(divHtmlText);
    },

    addToInput: function(str) {
        this.input.value += str; 
    }
}