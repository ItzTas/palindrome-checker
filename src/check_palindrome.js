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

export { checkPalidrome }
