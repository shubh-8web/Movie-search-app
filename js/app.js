const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//popular movies
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//image
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
//search movie

const movieBox = document.querySelector("#movie-box")
//main box container 
const searchIn = document.querySelector("#search")
// search input


const getMovie = async (api) => {
    const response = await fetch(api)
    const data = await response.json()
    showMovie(data.results)
}

const showMovie = (data) => {
    movieBox.innerHTML = "";
    data.forEach(item => {
        const box = document.createElement("div")
        box.classList.add("box")
        box.innerHTML = `
        <img src="${IMGPATH + item.poster_path}" alt="${item.title}">
                <div class="overlay">
                    <div class="title">
                        <h2>${item.title}</h2>
                        <span>${item.vote_average}</span>
                    </div>
                    <h3>OverView:</h3>
                    <p>
                        ${item.overview}
                    </p>
        `
        movieBox.appendChild(box)
    });
}

searchIn.addEventListener("keyup", function (event) {
    if (event.target.value != "") {
        getMovie(SEARCHAPI + event.target.value)

    } else {
        getMovie(APIURL)

    }
})

// init call
getMovie(APIURL)