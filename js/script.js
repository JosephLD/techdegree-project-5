//Set url to api
//Retrive api info
const randomUser = fetch('https://randomuser.me/api/?results=12&nat=gb,au')
    .then(res => res.json())
    .then(promise => console.log(promise.results))
//Set the .card div to card
const card = document.querySelector('.card')

//Generate search field to filter out random users already on the page (only in english)
//Generate html cards for each random user and append them to '.card' div

//Generate the modal window for each card as it is clicked
//Add functionality for the next and previous arrow keys


//Event listeners