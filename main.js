document.querySelector("#check").addEventListener("click", check)

function check() {
    const day = document.querySelector("#day").value.toLowerCase()

    if (day === "monday" || day === "tuesday") {
        alert("It's a working day");
    } else if (day === "wednesday" || day === "thursday") {
        alert("It's a borrrrriinnnnnnnnggggggg day");
    } else {
        alert("It's a weekend! Let's have some fun");
    }
}
