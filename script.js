const input = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const main=document.getElementById("main");
function getMovieInfo(){
    const movieName=input.value;
    const url= `http://www.omdbapi.com/?t=${movieName}&apikey=6603cbf7`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        main.innerHTML=
        `<h2>Title:${data.Title}</h2>
        <h3>Genre:${data.Genre}</h3>
        <h2>Language:${data.Language}</h2>
        <h2>Year:${data.Year}</h2>
        <p>${data.Plot}</p>`
    })
    .catch(err=>console.log(err))
}
searchBtn.addEventListener('click',()=>{
    getMovieInfo();
})


