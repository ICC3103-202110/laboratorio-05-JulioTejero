const {getTitle} = require('./view')
const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear
    console.log(title)
    printTable(table)
    const {inputBA} = await inputForm(model)
    const {inputP} = await inputForm(model)
    console.log(inputBA)
    console.log(inputP)
    
}


module.exports = {
    app
}