const textarea = document.getElementById("textarea");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");

textarea.addEventListener("input", () => {

    const totalCharacters =
    textarea.value.length;

    total.innerText =
    totalCharacters;

    remaining.innerText =
    100 - totalCharacters;
});