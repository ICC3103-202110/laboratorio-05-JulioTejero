function update(input, model){
    const {billAmount} = model
    const {porcentage} = model
    const {inputBA} = input
    const {inputP} = input
    const newTip = inputBA*(inputP/100)
    const newTotal = inputBA*((100+inputP)/100)
    return {
        billAmount: inputBA,
        porcentage: inputP,
        tip: newTip,
        total: newTotal
    }
}

module.exports = {
    update
}