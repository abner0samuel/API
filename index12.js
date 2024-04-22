const dataUserCard = document.querySelector("[data-user-template]")
const user_card_container = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
let users = []
searchInput.addEventListener("input",(e)=>{
    const value =e.target.value.toLowerCase()
    users.forEach(user =>{
        const isvisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide",!isvisible)
    })
    // console.log(users);
})
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    users = data.map(user => {
        const card = dataUserCard.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.innerHTML= user.name
        body.innerHTML= user.email
        user_card_container.append(card)
        return{name: user.name, email: user.email, element: card}
    });
})