//let jsonData

$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=US',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        jsonData = data.results;
        jsonData.forEach(person => {

            const picture = person.picture.large;
            const firstName = person.name.first;
            const lastName = person.name.last;
            const email = person.email;
            const locCity = person.location.city;
            const locState = person.location.state;

            const gallCard =

                `<div class="card">
<div class="card-img-container">
    <img class="card-img" src="${picture}" alt="profile picture">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
    <p class="card-text">${email}</p>
    <p class="card-text cap">${locCity},${locState}</p>
 </div>`

            $('#gallery').append(gallCard);
        });
    }
});


//console.log(jsonData);
//jsonData = data.results;
//jsonData.forEach(person => {
//forEach(person => {
function modalWindow(i);

const picture = jsonData[i].picture.large;
const fName = jsonData[i].name.first;
const lName = jsonData[i].name.last;
const email = jsonData[i].email;
const city = jsonData[i].location.city.toUpperCase;
const street = jsonData[i].location.street.toUpper
const state = jsonData[i].location.state;
const postcode = jsonData[i].location.postcode;
const phone = jsonData[i].phone;
const dob = jsonData[i].dob.date.slice(0, 10);




const modWin =

    `<div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${picture}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${fName} ${lName}</h3>
                        <p class="modal-text">${email}</p>
                        <p class="modal-text cap">${city}</p>
                        <hr>
                        <p class="modal-text">${phone}</p>
                        <p class="modal-text">${street}, ${city}, ${state} ${postcode} </p>
                        <p class="modal-text">Birthday: ${dob}</p>
                    </div>
                </div>`

//document.getElementById("modal-close-btn").addEventListener("click, button ")
/*var x = document.getElementById("modal-container");
if (x.addEventListener) { // For all major browsers, except IE 8 and earlier
    x.addEventListener("click", modWin);
} else if (x.attachEvent) { // For IE 8 and earlier versions
    x.attachEvent("onclick", modWin);
}*/
$('body').append(modWin);
$('#modal-close-btn').on('click', function () {
    $('.modal-container').remove();
});


//$('body').append(modWin);

$('#gallery').on('click', '.card', function () {
    i = ($(this).index());
    modalWindow(i);
});