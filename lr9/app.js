let count = 0;
const valueSpan = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

function updateColor() {
    if (count < 0) {
        valueSpan.style.color = "var(--clr-red-dark)";
    } else if (count > 0) {
        valueSpan.style.color = "var(--clr-green-dark)";
    } else {
        valueSpan.style.color = "#222";
    }
}

function updateCounter() {
    valueSpan.textContent = count;
    updateColor();
}

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("reset")) {
            count = 0;
        }

        updateCounter();
    });
});

updateCounter();