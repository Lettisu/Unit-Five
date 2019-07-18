$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        jsonData = data.results;
        for (i = 0; i < jsonData.length; i++); {

        }
    }
});

const picture = person.picture.large;
const firstName = person.name.first;
const lastName = pesron.lastName;
const email = person.email;
const locCity = person.location.city;
const loc


    const body = $('body');
const searchCont = $('.search-container');
const gallery = $('#gallery');
const card = $('.card');


const gallCard =

    `<div class="card">
<div class="card-img-container">
    <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">first last</h3>
    <p class="card-text">email</p>
    <p class="card-text cap">city, state</p>
 </div>`

$('#gallery').append(gallCard);

async function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(response => response.json())
        .then(data => data.results.map(person => person))
        .catch(error => console.log("Looks like there was an error!", error));
}
fetchData('https://randomuser.me/api/?results=12&nat=au,ca,gb,nz,us').then(displayEmployees);

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

//function displayEmployees(people) {
//  people.map((person, index) => {