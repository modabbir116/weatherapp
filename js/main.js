let weatherMain = document.querySelector(".weather_main")
let serachBox = document.querySelector(".serach_box button")
let weatherBox = document.querySelector(".weather_box")
let weatherDetelis = document.querySelector(".weather_detelis")
let notFound = document.querySelector(".notFound")


serachBox.addEventListener("click", ()=>{
    const APIKey = 'c245760c6383ad16472d4358b11e5b58';
    
    let cityName = document.querySelector(".serach_box input").value;
    console.log(cityName);
    if (cityName == "") {
        return;
    }
    
    // fatch api 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json =>{
        console.log(notFound);
        
        if (json.cod == '404') {
            weatherMain.style.height = '500px';
            weatherBox.classList.remove('active');
            weatherDetelis.classList.remove('active');
            notFound.classList.add('active');
        } else {
            weatherMain.style.height = '500px';
            weatherBox.classList.add('active');
            weatherDetelis.classList.add('active');
            notFound.classList.remove('active');
        }

        const images = document.querySelector(".weather_box #image")
        const temperature = document.querySelector(".weather_box .temperature")
        const driscription = document.querySelector(".weather_box .driscription")

        const humidity = document.querySelector(".weather_detelis .humidity span")
        const wind = document.querySelector(".weather_detelis .wind span")

        switch (json.weather[0].main) {
            case "Sun":
                images.src = '/images/sun.png';
                break;

            case "Rain":
                images.src = '/images/rainy.png';
                break;

            case "Snow":
                images.src = '/images/snow.png';
                break;

            case "Cloudy":
                images.src = '/images/cloudy.png';
                break;

            case "Haze":
                images.src = '/images/mist.png';
                break;
        
            default:
              images.src = '/images/cloudy.png'
        }
        temperature.innerHTML = `${parseInt(json.main.temp)} <span>°C</span`
        driscription.innerHTML = `${json.weather[0].description}`
        humidity.innerHTML = `${json.main.humidity}%`
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`
    })
    
})