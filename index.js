const api_url = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed"
async function getMovie(url){
    // storing response
    const response = await fetch(url)

    // Storing data in the form on JSON
    let data = await response.json();
    // Get the results array from the request (results contains movie information)
    data = data.results;
    console.log(data);
    show(data);
}
// Calling the async function
getMovie(api_url);

function show(data){
   // Function to define innerHTML for HTML table
    let tab=``;
    // Loop to access all rows 
    for (let r of data) {
        tab += `<div id="content">
        <img id="posterImage" src="https://image.tmdb.org/t/p/w342/${r.poster_path}">
        <p id="title">${r.title} </p>
        <button id="detail">Overview</button>
        </div>
        `
    }
    
    // Setting innerHTML as tab variable
    document.getElementById("display-movies").innerHTML = tab;
}

// const input = document.querySelector('input');
// const modal_container = document.getElementById('modal_container');

// input.addEventListener('input', () => {
//     modal_container.classList.add('show');
// });

