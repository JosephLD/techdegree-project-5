//Set url to api
const randomUser = fetch('https://randomuser.me/api/?results=12')
//Retrive api info
    .then(res => console.log(res.json()))


//Generate search field to filter out random users already on the page (only in english)
//Generate html cards for each random user and append them to '.card' div
//Generate the modal window for each card as it is clicked
//Add functionality for the next and previous arrow keys


//Event listeners