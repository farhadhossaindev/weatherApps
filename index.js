const searchbtn = document.getElementById("searchbtn"); const cityName = document.getElementById("cityName").innerText;
const myApiKey = "06bf5c84f62a04df6b09a1d821c4f8ed"


searchbtn.addEventListener("click", async function () {
   const userInput = document.getElementById("userInput").value;

let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${myApiKey}`)

const allData = await response.json();

document.getElementById('cityName').innerHTML=allData.name;

document.getElementById('temp').innerText = allData.main.temp;
document.getElementById('desc').innerText = allData.weather[0].description;

document.getElementById('shortc').innerHTML = allData.sys.country

})