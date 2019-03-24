
const rootURL = `https://api.github.com/users/`;

function getRepos(user) {
    const url = rootURL + user + "/repos";
    console.log(url);
    fetch(url)
    .then (response => {
        if (response.ok) {
            return response.json();
        } throw new Error (response.statusText);
    })
    .then (responseJson => displayResults(responseJson))
    .catch (err => {
        $('#js-error-message').text(`Oops! Something went wrong: ${err.message}`);
    });
}


function displayResults(responseJson) {
    console.log(responseJson);
    $('#jsErrorMessage').empty();
    $('#results').empty();
    for (let i=0; i < responseJson.length; i++) {
        $('#results').append(`<li><h2><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h2></li>`)
    }
    $("#results").removeClass("hidden");
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let userHandle = $('#userInput').val();
        console.log(userHandle);
        getRepos(userHandle);
    });
};

$(watchForm);