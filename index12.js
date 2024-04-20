const dataUserCard = document.querySelector("[data-user-template]")
const user_card_container = document.querySelector("[data-user-cards-container]")
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    data.forEach(user => {
        const card = dataUserCard.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textcontent = user.name
        body.textcontent = user.email
        user_card_container.append(card)
        console.log(user);
    });
})