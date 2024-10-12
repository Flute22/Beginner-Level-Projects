const apiKey = "41eba41931094e037d433272c58696c4"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


// -----> User Interface
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')


// -----> API Handling
let api = (city) => {
    fetch(apiUrl + city + `&appid=${apiKey}`)
        .then((resopnse) => { return resopnse.json() })
        .then((data) => {
            // console.log(data)
            document.querySelector('.city').innerHTML = data.name
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c"
            document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
            document.querySelectorAll('.wind').innerHTML = data.wind.speed + " km/h"

            if(data.weather[0].main === 'Clouds') {
                weatherIcon.src = "./Assests/img/cloud1.svg"
            }else if (data.weather[0].main === 'Clear'){
                weatherIcon.src = "./Assests/img/clear.svg"
            }else if (data.weather[0].main === 'Mist'){
                weatherIcon.src = "./Assests/img/mist.svg"
            }else if (data.weather[0].main === 'Drizzle'){
                weatherIcon.src = "./Assests/img/drizzel.svg"
            }else if (data.weather[0].main === 'Rain'){
                weatherIcon.src = "./Assests/img/Rain.svg"
            }
        })
        .catch(() => { console.log("Error: Something went wrong!") })
}

searchBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        api(searchBox.value)
    }
})

searchBtn.addEventListener('click', () => {
    api(searchBox.value);
})