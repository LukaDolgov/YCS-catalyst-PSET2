function level_10() {
    document.getElementById("l10").innerText = "Hello, world!";
}


function level_11() {
    const paragraph = document.getElementById("l11");
    if (paragraph.style.backgroundColor === "yellow") {
        paragraph.style.backgroundColor = "inherit";
    } else {
        paragraph.style.backgroundColor = "yellow"; 
    }
}

function level_13() {
    const input = document.getElementById("l13_input").value; 
    const output = document.getElementById("l13_output");
    let triangle = ""; 
    const number = parseInt(input);
    if (!isNaN(number) && number > 0) {
        for (let i = 1; i <= number; i++) {
            for (j = i; j > 0; j--) {
                triangle += "*"; 
            }
            triangle += "\n";
        }
        output.innerText = triangle; 
    } else {
        output.innerText = "Please enter a valid positive number."; 
    }
}