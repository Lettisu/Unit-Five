$.ajax({
    url: 'https://randomuser.me/api/?results=12&lang=en',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        jsonData = data.results;
        jsonData.forEach(person => {

            const picture = person.picture.large;
            const firstName = person.name.first;
            const lastName = person.lastName;
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
