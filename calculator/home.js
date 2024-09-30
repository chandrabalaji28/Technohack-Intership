let keys = document.querySelectorAll("#table>div");
let inputDisplay = document.getElementById("input");
let bag = "";

keys.forEach(key => {
    key.addEventListener("click", function () {
        let symbol = key.innerText;
        
        if (symbol === "C") {
            bag = "";
            inputDisplay.innerText = "0";
        } else if (symbol === "=") {
            try {
                bag = bag.replace("×", "*").replace("÷", "/");
                inputDisplay.innerText = eval(bag);
            } catch {
                inputDisplay.innerText = "Error";
            }
        } else {
            bag += symbol;
            inputDisplay.innerText = bag;
        }
    });
});

// Light and Dark Mode Toggling
document.getElementById("light-mode-btn").addEventListener("click", function () {
    document.body.classList.remove("dark-mode");
});

document.getElementById("dark-mode-btn").addEventListener("click", function () {
    document.body.classList.add("dark-mode");
});