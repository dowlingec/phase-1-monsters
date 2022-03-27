


const requestApi = async() => {
    let req = await fetch('http://localhost:3000/monsters')
    let res = await req.json()
    console.log('Your data, m\'lady,', res)
    //d2
    
    let firstFifty = res.slice(0, 50)
    // const createList = (array) => {
    //     let listTag = document.createElement('li')
    //     monsterContainer.appendChild(listTag)
    // }
    
    firstFifty.forEach((elemente) => {
        let monsterContainer = document.getElementById('monster-container')
        // console.log('ffirst50', firstFifty)
        let h3 = document.createElement('h3')
        let pgh = document.createElement('p')
        h3.textContent = (elemente.name)
        pgh.innerHTML = (`AGE: ${elemente.age} <br> Description: ${elemente.description}`)
        monsterContainer.appendChild(h3)
        monsterContainer.appendChild(pgh)
        // newLi.innerText = elemente.title
        // movieListParent.appendChild(newLi)
    })
}
requestApi()

// function createMenuItem(name) {
//     let li = document.createElement('li');
//     li.textContent = name;
//     return li;
// }