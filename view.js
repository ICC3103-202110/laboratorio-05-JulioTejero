const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    const {porcentage} = model
    const {tip} = model
    const {total} = model
    return [
        {'Bill Amount': `$${billAmount}`,
        'Tip (%)': `${porcentage}%`,
        'Tip': `$${tip}`,
        'Total': `$${total}`}
    ]
}

function inputForm(model){
    const {inputBA} = model
    const messageBA = 'Bill Amount? '
    const {inputP} = model
    const messageP = 'Tip(%)? '
    return inquirer.prompt([
        {
            name: 'inputBA',
            type: 'input',
            message: messageBA,
            default: inputBA,
        },
        {
            name: 'inputP',
            type: 'input',
            message: messageP,
            default: inputP
        }
            
        
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm
}