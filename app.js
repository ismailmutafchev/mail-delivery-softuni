function solve() {
    let recipientEl = document.getElementById('recipientName')
    let titleElement = document.getElementById('title')
    let messageElement = document.getElementById('message')

    let addBtn = document.getElementById('add')
    let resetBtn = document.getElementById('reset')

    let outherUl = document.getElementById('list')

    addBtn.addEventListener('click', addToList)


    resetBtn.addEventListener('click', (e) => {
        e.preventDefault()
        recipientEl.value = ''
        titleElement.value = ''
        messageElement.value = ''
    })

    function addToList(e) {
        e.preventDefault()
        if (recipientEl.value && titleElement.value && messageElement.value) {

            let outherLi = document.createElement('li')
            let titleHeadingEl = document.createElement('h4')
            let recipientHeadingEl = document.createElement('h4')
            let spanEl = document.createElement('span')
            let buttonsDiv = document.createElement('div')
            buttonsDiv.setAttribute('id', 'list-action')

            let sendBtn = document.createElement('button')
            sendBtn.type = 'submit'
            sendBtn.setAttribute('id', 'send')

            let deleteBtn = document.createElement('button')
            deleteBtn.type = 'submit'
            deleteBtn.setAttribute('id', 'delete')

            outherUl.appendChild(outherLi)
            outherLi.appendChild(titleHeadingEl).textContent = `Title: ${titleElement.value}`
            outherLi.appendChild(recipientHeadingEl).textContent = `Recipient Name: ${recipientEl.value}`
            outherLi.appendChild(spanEl).textContent = messageElement.value
            outherLi.appendChild(buttonsDiv)
            buttonsDiv.appendChild(sendBtn).textContent = 'Send'
            buttonsDiv.appendChild(deleteBtn).textContent = 'Delete'


            recipientEl.value = ''
            titleElement.value = ''
            messageElement.value = ''
            sendBtn.addEventListener('click', (e) =>{
                e.preventDefault()
                let sendListUl = document.querySelector('.sent-list')
                let sendMailsOutherLi = document.createElement('li')
                let nameSpan = document.createElement('span')
                let titleSpan = document.createElement('span')
                let sendMailsDtlBtnDiv = document.createElement('div')
                sendMailsDtlBtnDiv.classList = 'btn'
                let deleteBtnSendMails = document.createElement('button')
                deleteBtnSendMails.type = 'submit'
                deleteBtnSendMails.classList = 'delete'
                
                sendListUl.appendChild(sendMailsOutherLi)
                sendMailsOutherLi.appendChild(nameSpan).textContent = `To: ${recipientHeadingEl.textContent}`
                sendMailsOutherLi.appendChild(titleSpan).textContent = `Title: ${titleHeadingEl.textContent}`
                sendMailsOutherLi.appendChild(sendMailsDtlBtnDiv)
                sendMailsDtlBtnDiv.appendChild(deleteBtnSendMails).textContent = "Delete"
                
                e.target.parentElement.parentElement.remove()

                sendMailsDtlBtnDiv.addEventListener('click', (e) =>{
                    e.preventDefault()
                    let deleteUl = document.querySelector('.delete-list')
                    let deleteLi = document.createElement('li')
                    let deleteNameSpan = document.createElement('span')
                    let deleteTitleSpand = document.createElement('span')
    
                    deleteUl.appendChild(deleteLi)
                    deleteLi.appendChild(deleteNameSpan).textContent = `To${recipientHeadingEl.textContent}`
                    deleteLi.appendChild(deleteTitleSpand).textContent = `Title${titleHeadingEl.textContent}`
                    e.target.parentElement.parentElement.remove()
                })
            })
            deleteBtn.addEventListener('click', (e) =>{
                e.preventDefault()
                let deleteUl = document.querySelector('.delete-list')
                let deleteLi = document.createElement('li')
                let deleteNameSpan = document.createElement('span')
                let deleteTitleSpand = document.createElement('span')

                deleteUl.appendChild(deleteLi)
                deleteLi.appendChild(deleteNameSpan).textContent = `To${recipientHeadingEl.textContent}`
                deleteLi.appendChild(deleteTitleSpand).textContent = `Title${titleHeadingEl.textContent}`
                e.target.parentElement.parentElement.remove()
            })


        }
    }

}
solve()