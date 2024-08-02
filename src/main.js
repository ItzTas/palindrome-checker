function checkPalidrome(s) {
    let final = ""
    let inversed = ""
    for (const letter of s) {
        if (letter === " ") {
            continue
        }
        inversed = letter + inversed
        final += letter
    }
    return inversed === final
}

document.querySelector(".form_palindrome_checker").addEventListener("submit", (event) => {
    event.preventDefault()

    const value = document.querySelector(".input_checker").value;

    const pDislpay = document.querySelector(".p_display");
    if (!value) {
        pDislpay.textContent = "the input cannot be empty";
        return;
    }

    const ispalindrome = checkPalidrome(value);

    pDislpay.textContent = ispalindrome ? `the text: ${value} is a palindrome!`
        : `the text: ${value} is not a palindrome!`

    document.querySelector(".input_checker").value = "";
})
