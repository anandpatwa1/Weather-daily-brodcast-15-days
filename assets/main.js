const key = 'B44US8RVER5JCGA6WGXX26NVP'

// Top city names

const indore = document.getElementById('Indore')
const bhopal = document.getElementById('Bhopal')
const delhi = document.getElementById('Delhi')
const mumbai = document.getElementById('Mumbai')
const shimla = document.getElementById('Shimla')

// input 
const form = document.querySelector('form')
const input = document.querySelector('input')

// data
const address = document.getElementById('address')
const currentTime = document.getElementById('current-time')

const lowTemp = document.getElementById('low-temp')
const highTemp = document.getElementById('high-temp')
const currentTemp = document.getElementById('current-temp')

const icons = document.getElementById('icons')
const condition = document.getElementById('condition')
const discription = document.getElementById('discription')

const feelslike = document.getElementById('feelslike')
const sunrise = document.getElementById('sunrise')
const sunset = document.getElementById('sunset')

const windSpeed = document.getElementById('windSpeed')
const humidity = document.getElementById('humidity')
const snow = document.getElementById('snow')
const cloudcover = document.getElementById('cloudcover')
const pressure = document.getElementById('pressure')
const visiblity = document.getElementById('visiblity')
const uvIndex = document.getElementById('uvIndex')

// Hourly data
const hourZeroTemp = document.getElementById('hour-0-temp')
const hourOneTemp = document.getElementById('hour-1-temp')
const hourTwoTemp = document.getElementById('hour-2-temp')
const hourThreeTemp = document.getElementById('hour-3-temp')
const hourFourTemp = document.getElementById('hour-4-temp')
const hourFiveTemp = document.getElementById('hour-5-temp')
const hourSixTemp = document.getElementById('hour-6-temp')
const hourSevenTemp = document.getElementById('hour-7-temp')
const hourEightTemp = document.getElementById('hour-8-temp')
const hourNineTemp = document.getElementById('hour-9-temp')
const hourTenTemp = document.getElementById('hour-10-temp')
const hourElevenTemp = document.getElementById('hour-11-temp')
const hourTwelveTemp = document.getElementById('hour-12-temp')
const hourThirteenTemp = document.getElementById('hour-13-temp')
const hourFourteenTemp = document.getElementById('hour-14-temp')
const hourFifteenTemp = document.getElementById('hour-15-temp')
const hourSixteenTemp = document.getElementById('hour-16-temp')
const hourSeventeenTemp = document.getElementById('hour-17-temp')
const hourEighteenTemp = document.getElementById('hour-18-temp')
const hourNineteenTemp = document.getElementById('hour-19-temp')
const hourTwentyTemp = document.getElementById('hour-20-temp')
const hourTwentyOneTemp = document.getElementById('hour-21-temp')
const hourTwentyTwoTemp = document.getElementById('hour-22-temp')
const hourTwentyThreeTemp = document.getElementById('hour-23-temp')

const hourZeroTime = document.getElementById('hour-0-time')
const hourOneTime = document.getElementById('hour-1-time')
const hourTwoTime = document.getElementById('hour-2-time')
const hourThreeTime = document.getElementById('hour-3-time')
const hourFourTime = document.getElementById('hour-4-time')
const hourFiveTime = document.getElementById('hour-5-time')
const hourSixTime = document.getElementById('hour-6-time')
const hourSevenTime = document.getElementById('hour-7-time')
const hourEightTime = document.getElementById('hour-8-time')
const hourNineTime = document.getElementById('hour-9-time')
const hourTenTime = document.getElementById('hour-10-time')
const hourElevenTime = document.getElementById('hour-11-time')
const hourTwelveTime = document.getElementById('hour-12-time')
const hourThirteenTime = document.getElementById('hour-13-time')
const hourFourteenTime = document.getElementById('hour-14-time')
const hourFifteenTime = document.getElementById('hour-15-time')
const hourSixteenTime = document.getElementById('hour-16-time')
const hourSeventeenTime = document.getElementById('hour-17-time')
const hourEighteenTime = document.getElementById('hour-18-time')
const hourNineteenTime = document.getElementById('hour-19-time')
const hourTwentyTime = document.getElementById('hour-20-time')
const hourTwentyOneTime = document.getElementById('hour-21-time')
const hourTwentyTwoTime = document.getElementById('hour-22-time')
const hourTwentyThreeTime = document.getElementById('hour-23-time')

const hourZeroIcon = document.getElementById('hour-0-icon')
const hourOneIcon = document.getElementById('hour-1-icon')
const hourTwoIcon = document.getElementById('hour-2-icon')
const hourThreeIcon = document.getElementById('hour-3-icon')
const hourFourIcon = document.getElementById('hour-4-icon')
const hourFiveIcon = document.getElementById('hour-5-icon')
const hourSixIcon = document.getElementById('hour-6-icon')
const hourSevenIcon = document.getElementById('hour-7-icon')
const hourEightIcon = document.getElementById('hour-8-icon')
const hourNineIcon = document.getElementById('hour-9-icon')
const hourTenIcon = document.getElementById('hour-10-icon')
const hourElevenIcon = document.getElementById('hour-11-icon')
const hourTwelveIcon = document.getElementById('hour-12-icon')
const hourThirteenIcon = document.getElementById('hour-13-icon')
const hourFourteenIcon = document.getElementById('hour-14-icon')
const hourFifteenIcon = document.getElementById('hour-15-icon')
const hourSixteenIcon = document.getElementById('hour-16-icon')
const hourSeventeenIcon = document.getElementById('hour-17-icon')
const hourEighteenIcon = document.getElementById('hour-18-icon')
const hourNineteenIcon = document.getElementById('hour-19-icon')
const hourTwentyIcon = document.getElementById('hour-20-icon')
const hourTwentyOneIcon = document.getElementById('hour-21-icon')
const hourTwentyTwoIcon = document.getElementById('hour-22-icon')
const hourTwentyThreeIcon = document.getElementById('hour-23-icon')

// const anand = 13



console.log(indore);

form.addEventListener("submit", getWeather)

async function getWeather(e) {
    e.preventDefault()
    try {
        const api = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?unitGroup=metric&key=${key}&contentType=json`)
        const data = await api.json()
    
        // const dateTimesame = data.currentConditions.datetimeEpoch
        // const dateTime = 1673715600
        // console.log( new Date(dateTime*1000).getUTCHours().toString().padStart(2,0)-12);
        // console.log(new Date(dateTime*1000).getUTCMinutes().toString().padStart(2,0));
        // console.log(data.currentConditions.datetimeEpoch);
    
        // location data
    
        // console.log(data.latitude);
        // console.log(data.longitude);
        const resolvedAddress = data.resolvedAddress
        address.innerText = resolvedAddress
        const datetime = data.currentConditions.datetime
        currentTime.innerText = datetime
    
        // Current Conditions data
    
        const tempmin = data.days[0].tempmin
        lowTemp.innerText = tempmin 
        const tempmax = data.days[0].tempmax
        highTemp.innerText = tempmax 
        const temp = data.currentConditions.temp
        currentTemp.innerText = temp
    
        const icon = data.currentConditions.icon
        icons.innerText = icon
        const conditions = data.currentConditions.conditions
        condition.innerText = conditions
        const description = data.description
        discription.innerText = description
    
        const feelslikeData = data.currentConditions.feelslike
        feelslike.innerText = feelslikeData
        const sunriseData = data.currentConditions.sunrise
        sunrise.innerText = sunriseData
        const sunsetData = data.currentConditions.sunset
        sunset.innerText = sunsetData
    
        const windspeedData = data.currentConditions.windspeed
        windSpeed.innerText = windspeedData
        const humidityData = data.currentConditions.humidity
        humidity.innerText = humidityData
        const snowData = data.currentConditions.snowdepth
        snow.innerText = snowData
        const cloudcoverData = data.currentConditions.cloudcover
        cloudcover.innerText = cloudcoverData
        const pressureData = data.currentConditions.pressure
        pressure.innerText = pressureData
        const visibilityData = data.currentConditions.visibility
        visiblity.innerText = visibilityData
        const uvindexData = data.currentConditions.uvindex
        uvIndex.innerText = uvindexData
    
    
        // Today hourly data
    
        const dataHourZeroTemp = data.days[0].hours[0].temp
        hourZeroTemp.innerText = dataHourZeroTemp
        const dataHourZeroTime = data.days[0].hours[0].datetime
        hourZeroTime.innerText = dataHourZeroTime
        const dataHourZeroIcon = data.days[0].hours[0].icon
        hourZeroIcon.innerText = dataHourZeroIcon
        
        const dataHourOneTemp = data.days[0].hours[1].temp
        hourOneTemp.innerText = dataHourOneTemp
        const dataHourOneTime = data.days[0].hours[1].datetime
        hourOneTime.innerText = dataHourOneTime
        const dataHourOneIcon = data.days[0].hours[1].icon
        hourOneIcon.innerText = dataHourOneIcon
        
        const dataHourTwoTemp = data.days[0].hours[2].temp
        hourTwoTemp.innerText = dataHourTwoTemp
        const dataHourTwoTime = data.days[0].hours[2].datetime
        hourTwoTime.innerText = dataHourTwoTime
        const dataHourTwoIcon = data.days[0].hours[2].icon
        hourTwoIcon.innerText = dataHourTwoIcon
        
        const dataHourThreeTemp = data.days[0].hours[3].temp
        hourThreeTemp.innerText = dataHourThreeTemp
        const dataHourThreeTime = data.days[0].hours[3].datetime
        hourThreeTime.innerText = dataHourThreeTime
        const dataHourThreeIcon = data.days[0].hours[3].icon
        hourThreeIcon.innerText = dataHourThreeIcon
        
        const dataHourFourTemp = data.days[0].hours[4].temp
        hourFourTemp.innerText = dataHourFourTemp
        const dataHourFourTime = data.days[0].hours[4].datetime
        hourFourTime.innerText = dataHourFourTime
        const dataHourFourIcon = data.days[0].hours[4].icon
        hourFourIcon.innerText = dataHourFourIcon
        
        const dataHourFiveTemp = data.days[0].hours[5].temp
        hourFiveTemp.innerText = dataHourFiveTemp
        const dataHourFiveTime = data.days[0].hours[5].datetime
        hourFiveTime.innerText = dataHourFiveTime
        const dataHourFiveIcon = data.days[0].hours[5].icon
        hourFiveIcon.innerText = dataHourFiveIcon
        
        const dataHourSixTemp = data.days[0].hours[6].temp
        hourSixTemp.innerText = dataHourSixTemp
        const dataHourSixTime = data.days[0].hours[6].datetime
        hourSixTime.innerText = dataHourSixTime
        const dataHourSixIcon = data.days[0].hours[6].icon
        hourSixIcon.innerText = dataHourSixIcon
        
        const dataHourSevenTemp = data.days[0].hours[7].temp
        hourSevenTemp.innerText = dataHourSevenTemp
        const dataHourSevenTime = data.days[0].hours[7].datetime
        hourSevenTime.innerText = dataHourSevenTime
        const dataHourSevenIcon = data.days[0].hours[7].icon
        hourSevenIcon.innerText = dataHourSevenIcon
        
        const dataHourEightTemp = data.days[0].hours[8].temp
        hourEightTemp.innerText = dataHourEightTemp
        const dataHourEightTime = data.days[0].hours[8].datetime
        hourEightTime.innerText = dataHourEightTime
        const dataHourEightIcon = data.days[0].hours[8].icon
        hourEightIcon.innerText = dataHourEightIcon
        
        const dataHourNineTemp = data.days[0].hours[9].temp
        hourNineTemp.innerText = dataHourNineTemp
        const dataHourNineTime = data.days[0].hours[9].datetime
        hourNineTime.innerText = dataHourNineTime
        const dataHourNineIcon = data.days[0].hours[9].icon
        hourNineIcon.innerText = dataHourNineIcon
        
        const dataHourTenTemp = data.days[0].hours[10].temp
        hourTenTemp.innerText = dataHourTenTemp
        const dataHourTenTime = data.days[0].hours[10].datetime
        hourTenTime.innerText = dataHourTenTime
        const dataHourTenIcon = data.days[0].hours[10].icon
        hourTenIcon.innerText = dataHourTenIcon
        
        const dataHourElevenTemp = data.days[0].hours[11].temp
        hourElevenTemp.innerText = dataHourElevenTemp
        const dataHourElevenTime = data.days[0].hours[11].datetime
        hourElevenTime.innerText = dataHourElevenTime
        const dataHourElevenIcon = data.days[0].hours[11].icon
        hourElevenIcon.innerText = dataHourElevenIcon
        
        const dataHourTwelveTemp = data.days[0].hours[12].temp
        hourTwelveTemp.innerText = dataHourTwelveTemp
        const dataHourTwelveTime = data.days[0].hours[12].datetime
        hourTwelveTime.innerText = dataHourTwelveTime
        const dataHourTwelveIcon = data.days[0].hours[12].icon
        hourTwelveIcon.innerText = dataHourTwelveIcon
        
        const dataHourThirteenTemp = data.days[0].hours[13].temp
        hourThirteenTemp.innerText = dataHourThirteenTemp
        const dataHourThirteenTime = data.days[0].hours[13].datetime
        hourThirteenTime.innerText = dataHourThirteenTime
        const dataHourThirteenIcon = data.days[0].hours[13].icon
        hourThirteenIcon.innerText = dataHourThirteenIcon
        
        const dataHourFourteenTemp = data.days[0].hours[14].temp
        hourFourteenTemp.innerText = dataHourFourteenTemp
        const dataHourFourteenTime = data.days[0].hours[14].datetime
        hourFourteenTime.innerText = dataHourFourteenTime
        const dataHourFourteenIcon = data.days[0].hours[14].icon
        hourFourteenIcon.innerText = dataHourFourteenIcon
        
        const dataHourFifteenTemp = data.days[0].hours[15].temp
        hourFifteenTemp.innerText = dataHourFifteenTemp
        const dataHourFifteenTime = data.days[0].hours[15].datetime
        hourFifteenTime.innerText = dataHourFifteenTime
        const dataHourFifteenIcon = data.days[0].hours[15].icon
        hourFifteenIcon.innerText = dataHourFifteenIcon
        
        const dataHourSixteenTemp = data.days[0].hours[16].temp
        hourSixteenTemp.innerText = dataHourSixteenTemp
        const dataHourSixteenTime = data.days[0].hours[16].datetime
        hourSixteenTime.innerText = dataHourSixteenTime
        const dataHourSixteenIcon = data.days[0].hours[16].icon
        hourSixteenIcon.innerText = dataHourSixteenIcon
        
        const dataHourSeventeenTemp = data.days[0].hours[17].temp
        hourSeventeenTemp.innerText = dataHourSeventeenTemp
        const dataHourSeventeenTime = data.days[0].hours[17].datetime
        hourSeventeenTime.innerText = dataHourSeventeenTime
        const dataHourSeventeenIcon = data.days[0].hours[17].icon
        hourSeventeenIcon.innerText = dataHourSeventeenIcon
        
        const dataHourEighteenTemp = data.days[0].hours[18].temp
        hourEighteenTemp.innerText = dataHourEighteenTemp
        const dataHourEighteenTime = data.days[0].hours[18].datetime
        hourEighteenTime.innerText = dataHourEighteenTime
        const dataHourEighteenIcon = data.days[0].hours[18].icon
        hourEighteenIcon.innerText = dataHourEighteenIcon
        
        const dataHourNineteenTemp = data.days[0].hours[19].temp
        hourNineteenTemp.innerText = dataHourNineteenTemp
        const dataHourNineteenTime = data.days[0].hours[19].datetime
        hourNineteenTime.innerText = dataHourNineteenTime
        const dataHourNineteenIcon = data.days[0].hours[19].icon
        hourNineteenIcon.innerText = dataHourNineteenIcon
        
        const dataHourTwentyTemp = data.days[0].hours[20].temp
        hourTwentyTemp.innerText = dataHourTwentyTemp
        const dataHourTwentyTime = data.days[0].hours[20].datetime
        hourTwentyTime.innerText = dataHourTwentyTime
        const dataHourTwentyIcon = data.days[0].hours[20].icon
        hourTwentyIcon.innerText = dataHourTwentyIcon
        
        const dataHourTwentyOneTemp = data.days[0].hours[21].temp
        hourTwentyOneTemp.innerText = dataHourTwentyOneTemp
        const dataHourTwentyOneTime = data.days[0].hours[21].datetime
        hourTwentyOneTime.innerText = dataHourTwentyOneTime
        const dataHourTwentyOneIcon = data.days[0].hours[21].icon
        hourTwentyOneIcon.innerText = dataHourTwentyOneIcon
        
        const dataHourTwentyTwoTemp = data.days[0].hours[22].temp
        hourTwentyTwoTemp.innerText = dataHourTwentyTwoTemp
        const dataHourTwentyTwoTime = data.days[0].hours[22].datetime
        hourTwentyTwoTime.innerText = dataHourTwentyTwoTime
        const dataHourTwentyTwoIcon = data.days[0].hours[22].icon
        hourTwentyTwoIcon.innerText = dataHourTwentyTwoIcon
        
        const dataHourTwentyThreeTemp = data.days[0].hours[23].temp
        hourTwentyThreeTemp.innerText = dataHourTwentyThreeTemp
        const dataHourTwentyThreeTime = data.days[0].hours[23].datetime
        hourTwentyThreeTime.innerText = dataHourTwentyThreeTime
        const dataHourTwentyThreeIcon = data.days[0].hours[23].icon
        hourTwentyThreeIcon.innerText = dataHourTwentyThreeIcon
        
    
        // next 14 day 
    
        // console.log(data.days[1].datetime);
        // console.log(data.days[1].tempmax);
        // console.log(data.days[1].tempmin);
        // console.log(data.days[1].temp);
        // console.log(data.days[1].windspeed);
        // console.log(data.days[1].visibility);
        // console.log(data.days[1].sunrise);
        // console.log(data.days[1].sunset);
        // console.log(data.days[1].icon);
    
        // console.log(data.days[2].datetime);
        // console.log(data.days[1].tempmax);
        // console.log(data.days[1].tempmin);
        // console.log(data.days[1].temp);
        // console.log(data.days[1].windspeed);
        // console.log(data.days[1].visibility);
        // console.log(data.days[1].sunrise);
        // console.log(data.days[1].sunset);
        // console.log(data.days[1].icon);
    
        // console.log(data.days[3].datetime);
        // console.log(data.days[3].tempmax);
        // console.log(data.days[3].tempmin);
        // console.log(data.days[3].temp);
        // console.log(data.days[3].windspeed);
        // console.log(data.days[3].visibility);
        // console.log(data.days[3].sunrise);
        // console.log(data.days[3].sunset);
        // console.log(data.days[3].icon);
    
        // console.log(data.days[4].datetime);
        // console.log(data.days[4].tempmax);
        // console.log(data.days[4].tempmin);
        // console.log(data.days[4].temp);
        // console.log(data.days[4].windspeed);
        // console.log(data.days[4].visibility);
        // console.log(data.days[4].sunrise);
        // console.log(data.days[4].sunset);
        // console.log(data.days[4].icon);
    
        // console.log(data.days[5].datetime);
        // console.log(data.days[5].tempmax);
        // console.log(data.days[5].tempmin);
        // console.log(data.days[5].temp);
        // console.log(data.days[5].windspeed);
        // console.log(data.days[5].visibility);
        // console.log(data.days[5].sunrise);
        // console.log(data.days[5].sunset);
        // console.log(data.days[5].icon);
    
        // console.log(data.days[6].datetime);
        // console.log(data.days[6].tempmax);
        // console.log(data.days[6].tempmin);
        // console.log(data.days[6].temp);
        // console.log(data.days[6].windspeed);
        // console.log(data.days[6].visibility);
        // console.log(data.days[6].sunrise);
        // console.log(data.days[6].sunset);
        // console.log(data.days[6].icon);
    
        // console.log(data.days[7].datetime);
        // console.log(data.days[7].tempmax);
        // console.log(data.days[7].tempmin);
        // console.log(data.days[7].temp);
        // console.log(data.days[7].windspeed);
        // console.log(data.days[7].visibility);
        // console.log(data.days[7].sunrise);
        // console.log(data.days[7].sunset);
        // console.log(data.days[7].icon);
    
        // console.log(data.days[8].datetime);
        // console.log(data.days[8].tempmax);
        // console.log(data.days[8].tempmin);
        // console.log(data.days[8].temp);
        // console.log(data.days[8].windspeed);
        // console.log(data.days[8].visibility);
        // console.log(data.days[8].sunrise);
        // console.log(data.days[8].sunset);
        // console.log(data.days[8].icon);
    
        // console.log(data.days[9].datetime);
        // console.log(data.days[9].tempmax);
        // console.log(data.days[9].tempmin);
        // console.log(data.days[9].temp);
        // console.log(data.days[9].windspeed);
        // console.log(data.days[9].visibility);
        // console.log(data.days[9].sunrise);
        // console.log(data.days[9].sunset);
        // console.log(data.days[9].icon);
    
        // console.log(data.days[10].datetime);
        // console.log(data.days[10].tempmax);
        // console.log(data.days[10].tempmin);
        // console.log(data.days[10].temp);
        // console.log(data.days[10].windspeed);
        // console.log(data.days[10].visibility);
        // console.log(data.days[10].sunrise);
        // console.log(data.days[10].sunset);
        // console.log(data.days[10].icon);
    
        // console.log(data.days[11].datetime);
        // console.log(data.days[11].tempmax);
        // console.log(data.days[11].tempmin);
        // console.log(data.days[11].temp);
        // console.log(data.days[11].windspeed);
        // console.log(data.days[11].visibility);
        // console.log(data.days[11].sunrise);
        // console.log(data.days[11].sunset);
        // console.log(data.days[11].icon);
    
        // console.log(data.days[12].datetime);
        // console.log(data.days[12].tempmax);
        // console.log(data.days[12].tempmin);
        // console.log(data.days[12].temp);
        // console.log(data.days[12].windspeed);
        // console.log(data.days[12].visibility);
        // console.log(data.days[12].sunrise);
        // console.log(data.days[12].sunset);
        // console.log(data.days[12].icon);
    
        // console.log(data.days[13].datetime);
        // console.log(data.days[13].tempmax);
        // console.log(data.days[13].tempmin);
        // console.log(data.days[13].temp);
        // console.log(data.days[13].windspeed);
        // console.log(data.days[13].visibility);
        // console.log(data.days[13].sunrise);
        // console.log(data.days[13].sunset);
        // console.log(data.days[13].icon);
    
        // console.log(data.days[14].datetime);
        // console.log(data.days[14].tempmax);
        // console.log(data.days[14].tempmin);
        // console.log(data.days[14].temp);
        // console.log(data.days[14].windspeed);
        // console.log(data.days[14].visibility);
        // console.log(data.days[14].sunrise);
        // console.log(data.days[14].sunset);
        // console.log(data.days[14].icon);
    
    
    
        // console.log(data);
    
    } catch (error) {
        window.alert("Enter Valid City Name")
    }

   }
//   https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mosco?unitGroup=metric&key=B44US8RVER5JCGA6WGXX26NVP&contentType=json