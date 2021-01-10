//Set url to api
//Retrive api info
const randomUser = fetch('https://randomuser.me/api/?results=12&nat=gb,au')
    .then(res => console.log(res.json()))
    // .then(promise => promise.results[0])
//Set the .gallery div to gallery
const gallery = document.querySelector('.gallery')
console.log(randomUser)
//Generate search field to filter out random users already on the page (only in english)
//Generate html cards for each random user and append them to '.card' div
function generateHTML(user) {
    let card = ``
    card += `<div class ="card">
        <h3 id='${user.name.first + user.name.last}'>${user.name.first} ${user.name.last}</h3>
    </div>`;
    gallery.insertAdjacentHTML('afterbegin', card);
};
//Generate the modal window for each card as it is clicked
//Add functionality for the next and previous arrow keys

// generateHTML(randomUser);
//Event listeners



// <!-- <div class="card">
//                     <div class="card-img-container">
//                         <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
//                     </div>
//                     <div class="card-info-container">
//                         <h3 id="name" class="card-name cap">first last</h3>
//                         <p class="card-text">email</p>
//                         <p class="card-text cap">city, state</p>
//                     </div>
//                 </div> -->