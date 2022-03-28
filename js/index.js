


const requestApi = async() => {
    let req = await fetch('http://localhost:3000/monsters')
    let res = await req.json()
    console.log('Your data, m\'lady,', res)
    //d2
    
    let firstFifty = res.slice(0, 50)
    firstFifty.forEach((elemente) => {
        let monsterContainer = document.getElementById('monster-container')
        // console.log('ffirst50', firstFifty)
        let h3 = document.createElement('h3')
        let pgh = document.createElement('p')
        h3.textContent = (elemente.name)
        pgh.innerHTML = (`AGE: ${elemente.age} <br> Description: ${elemente.description}`)
        monsterContainer.appendChild(h3)
        monsterContainer.appendChild(pgh)
    })

    let formContainer = document.getElementById('create-monster')

    let inputName = document.createElement('input')
    inputName.setAttribute("placeholder", "Monster Name")
    formContainer.appendChild(inputName)
    let inputAge = document.createElement('input')
    inputAge.setAttribute("placeholder", "Age")
    formContainer.appendChild(inputAge)
    let inputDesc = document.createElement('input')
    inputDesc.setAttribute("placeholder", "Description")
    formContainer.appendChild(inputDesc)

    let createBttn = document.createElement('button')
    createBttn.setAttribute("type", "submit")
    createBttn.innerHTML = "Create Monster"
    formContainer.appendChild(createBttn)

    createBttn.addEventListener("click", () => {
        // alert("I been clicked, I 'ave")
        
    })
}
requestApi()