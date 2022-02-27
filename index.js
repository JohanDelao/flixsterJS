let movies = [];

const api_url = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed"
async function getMovie(url){
    // storing response
    const response = await fetch(url)

    // Storing data in the form on JSON
    let data = await response.json();
    // Get the results array from the request (results contains movie information)
    data = data.results;
    console.log(data);
    movies = data;
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
        <button id="detail" onClick="showModal(${r.id})">Overview</button>
        </div>
        `
    }
    
    // Setting innerHTML as tab variable
    document.getElementById("display-movies").innerHTML = tab;
}
// function to add 'show' class to modal container
const showModal = (id) => {
    // select the modal container
    const modal_container = document.querySelector(".modal-container");
    const modal = document.querySelector(".modal")
    // adding the show class to modal container
    modal_container.classList.add('show');
    // find the movie by matching the ids
    const movie = movies.find(movie => movie.id == id)
    console.log(movie)
    let modalInner = `<div class="modal">
            <div class="button" style="float: right">
                <button type="button" onClick="closeModal()" class="close" data-dismiss="modal" aria-label="Close" style="top:0;right:0">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div id="modalInner">
                <img id="modalImage" src="https://image.tmdb.org/t/p/w342/${movie.poster_path}">
                <div id="modalContent" style="display: block">
                    <h3 id="modalTitle">${movie.title}</h3>
                    <p id="modalDate">${movie.release_date}</p>
                    <p id="modalRating">${movie.vote_average}</p>
                    <p id="modalDesc">${movie.overview}</p>
                </div>
            </div>
        </div>
    `
    modal_container.innerHTML = modalInner;
};
 
const closeModal = () => {
    const modal_container = document.querySelector(".modal-container");
    modal_container.classList.remove('show');
}

