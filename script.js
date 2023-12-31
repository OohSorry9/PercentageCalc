const output = document.getElementById('output')
const btns = Array.from(document.getElementsByClassName('btn'));
const send = document.getElementById('send')
const clear = document.getElementById('clear')

function Evaluate(marks){
    return  marks / 550 *100
}

function Clear(){
    output.value = ""
}

btns.forEach(button => {
    button.addEventListener('click', (e) => {
        output.value += e.target.innerText;
    })
})

clear.addEventListener('click', Clear)
send.addEventListener('click', () => {
    output.value = Evaluate(output.value)

})