const Modal = {
    open(){
      document
      .querySelector(".modal-overlay")
      .classList
      .add("active")
    },
    close(){
      document
      .querySelector(".modal-overlay")
      .classList
      .remove("active")
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    }, 
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021'
    }, 
    {
        id: 3,
        description: 'Internet',
        amount: 20000,
        date: '23/01/2021'
    }
]

const Transaction = {
    incomes(){
        // somar as entradas

    },
    expenses(){
        // somar as saidas
    },
    total(){
        //calcular o total 
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(trasaction, index){
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
       
    },
    innerHTMLTransaction(transaction){
        const html = `       
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="${transaction.date}">23/01/2021</td>
            <td>
            <img src="/assets/minus.svg" alt="Remover Transação" />
            </td>       
    `
    return html
    }
}

DOM.addTransaction(transactions[0])
DOM.addTransaction(transactions[1])
DOM.addTransaction(transactions[2])