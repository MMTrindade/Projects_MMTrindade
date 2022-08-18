function calculate(valor1, operator, valor2) {
    let result
    
    switch (operator) {
        case '+':
            result = valor1 + valor2
            break
        case '-':
            result = valor1 - valor2
            break
        case '*':
            result = valor1 * valor2
            break
        case '/':
            result = valor1 / valor2
            break
        default:
            console.log('Not Implemented')
            break
    }
    return result
}

console.log(calculate(4, '+', 8))