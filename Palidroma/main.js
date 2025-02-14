function palindrom(word){

    // scompongo la parola nei caratteri
    const splitWord = word.split(``)
    const reverseWord = splitWord.reverse()
    const joinWorld = reverseWord.join(``)

    if (joinWorld === word){
        return true

    } return false
}

const userWord = prompt("Inserisci una parola per verificare che sia palindroma")

if (palindrom(userWord)){
    alert(`La parola e palindroma`)
} else {
    alert(`La parola non e palindroma`)
}