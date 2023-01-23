const key = 'B44US8RVER5JCGA6WGXX26NVP'

// Top city names

const indore = document.getElementById('Indore')
const bhopal = document.getElementById('Bhopal')
const delhi = document.getElementById('Delhi')
const mumbai = document.getElementById('Mumbai')
const shimla = document.getElementById('Shimla')

// input 
const form = document.querySelector('form')
let input = document.querySelector('input')

// data
const address = document.getElementById('address')
const currentTime = document.getElementById('current-time')

const lowTemp = document.getElementById('low-temp')
const highTemp = document.getElementById('high-temp')
const currentTemp = document.getElementById('current-temp')

const icons = document.getElementById('icons')
const iconSun = document.getElementById('icon')
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
// dayHourlyData lays between 0 to 14 for current day to 14th day
let dayHourlyData = 0
dayHourlyData = 0


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

const hourZeroDate = document.getElementById('hour-0-date')
const hourOneDate = document.getElementById('hour-1-date')
const hourTwoDate = document.getElementById('hour-2-date')
const hourThreeDate = document.getElementById('hour-3-date')
const hourFourDate = document.getElementById('hour-4-date')
const hourFiveDate = document.getElementById('hour-5-date')
const hourSixDate = document.getElementById('hour-6-date')
const hourSevenDate = document.getElementById('hour-7-date')
const hourEightDate = document.getElementById('hour-8-date')
const hourNineDate = document.getElementById('hour-9-date')
const hourTenDate = document.getElementById('hour-10-date')
const hourElevenDate = document.getElementById('hour-11-date')
const hourTwelveDate = document.getElementById('hour-12-date')
const hourThirteenDate = document.getElementById('hour-13-date')
const hourFourteenDate = document.getElementById('hour-14-date')
const hourFifteenDate = document.getElementById('hour-15-date')
const hourSixteenDate = document.getElementById('hour-16-date')
const hourSeventeenDate = document.getElementById('hour-17-date')
const hourEighteenDate = document.getElementById('hour-18-date')
const hourNineteenDate = document.getElementById('hour-19-date')
const hourTwentyDate = document.getElementById('hour-20-date')
const hourTwentyOneDate = document.getElementById('hour-21-date')
const hourTwentyTwoDate = document.getElementById('hour-22-date')
const hourTwentyThreeDate = document.getElementById('hour-23-date')

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





const dayOneDate = document.getElementById('day-1-Date')
const dayTwoDate = document.getElementById('day-2-Date')
const dayThreeDate = document.getElementById('day-3-Date')
const dayFourDate = document.getElementById('day-4-Date')
const dayFiveDate = document.getElementById('day-5-Date')
const daySixDate = document.getElementById('day-6-Date')
const daySevenDate = document.getElementById('day-7-Date')
const dayEightDate = document.getElementById('day-8-Date')
const dayNineDate = document.getElementById('day-9-Date')
const dayTenDate = document.getElementById('day-10-Date')
const dayElevenDate = document.getElementById('day-11-Date')
const dayTwelveDate = document.getElementById('day-12-Date')
const dayThirteenDate = document.getElementById('day-13-Date')
const dayFourteenDate = document.getElementById('day-14-Date')


const dayOneIcon = document.getElementById('day-1-Icon')
const dayTwoIcon = document.getElementById('day-2-Icon')
const dayThreeIcon = document.getElementById('day-3-Icon')
const dayFourIcon = document.getElementById('day-4-Icon')
const dayFiveIcon = document.getElementById('day-5-Icon')
const daySixIcon = document.getElementById('day-6-Icon')
const daySevenIcon = document.getElementById('day-7-Icon')
const dayEightIcon = document.getElementById('day-8-Icon')
const dayNineIcon = document.getElementById('day-9-Icon')
const dayTenIcon = document.getElementById('day-10-Icon')
const dayElevenIcon = document.getElementById('day-11-Icon')
const dayTwelveIcon = document.getElementById('day-12-Icon')
const dayThirteenIcon = document.getElementById('day-13-Icon')
const dayFourteenIcon = document.getElementById('day-14-Icon')


const dayOneTemp = document.getElementById('day-1-Temp')
const dayTwoTemp = document.getElementById('day-2-Temp')
const dayThreeTemp = document.getElementById('day-3-Temp')
const dayFourTemp = document.getElementById('day-4-Temp')
const dayFiveTemp = document.getElementById('day-5-Temp')
const daySixTemp = document.getElementById('day-6-Temp')
const daySevenTemp = document.getElementById('day-7-Temp')
const dayEightTemp = document.getElementById('day-8-Temp')
const dayNineTemp = document.getElementById('day-9-Temp')
const dayTenTemp = document.getElementById('day-10-Temp')
const dayElevenTemp = document.getElementById('day-11-Temp')
const dayTwelveTemp = document.getElementById('day-12-Temp')
const dayThirteenTemp = document.getElementById('day-13-Temp')
const dayFourteenTemp = document.getElementById('day-14-Temp')


const dayOneMinTemp = document.getElementById('day-1-MinTemp')
const dayTwoMinTemp = document.getElementById('day-2-MinTemp')
const dayThreeMinTemp = document.getElementById('day-3-MinTemp')
const dayFourMinTemp = document.getElementById('day-4-MinTemp')
const dayFiveMinTemp = document.getElementById('day-5-MinTemp')
const daySixMinTemp = document.getElementById('day-6-MinTemp')
const daySevenMinTemp = document.getElementById('day-7-MinTemp')
const dayEightMinTemp = document.getElementById('day-8-MinTemp')
const dayNineMinTemp = document.getElementById('day-9-MinTemp')
const dayTenMinTemp = document.getElementById('day-10-MinTemp')
const dayElevenMinTemp = document.getElementById('day-11-MinTemp')
const dayTwelveMinTemp = document.getElementById('day-12-MinTemp')
const dayThirteenMinTemp = document.getElementById('day-13-MinTemp')
const dayFourteenMinTemp = document.getElementById('day-14-MinTemp')


const dayOneMaxTemp = document.getElementById('day-1-MaxTemp')
const dayTwoMaxTemp = document.getElementById('day-2-MaxTemp')
const dayThreeMaxTemp = document.getElementById('day-3-MaxTemp')
const dayFourMaxTemp = document.getElementById('day-4-MaxTemp')
const dayFiveMaxTemp = document.getElementById('day-5-MaxTemp')
const daySixMaxTemp = document.getElementById('day-6-MaxTemp')
const daySevenMaxTemp = document.getElementById('day-7-MaxTemp')
const dayEightMaxTemp = document.getElementById('day-8-MaxTemp')
const dayNineMaxTemp = document.getElementById('day-9-MaxTemp')
const dayTenMaxTemp = document.getElementById('day-10-MaxTemp')
const dayElevenMaxTemp = document.getElementById('day-11-MaxTemp')
const dayTwelveMaxTemp = document.getElementById('day-12-MaxTemp')
const dayThirteenMaxTemp = document.getElementById('day-13-MaxTemp')
const dayFourteenMaxTemp = document.getElementById('day-14-MaxTemp')


const dayOneWindspeed = document.getElementById('day-1-Windspeed')
const dayTwoWindspeed = document.getElementById('day-2-Windspeed')
const dayThreeWindspeed = document.getElementById('day-3-Windspeed')
const dayFourWindspeed = document.getElementById('day-4-Windspeed')
const dayFiveWindspeed = document.getElementById('day-5-Windspeed')
const daySixWindspeed = document.getElementById('day-6-Windspeed')
const daySevenWindspeed = document.getElementById('day-7-Windspeed')
const dayEightWindspeed = document.getElementById('day-8-Windspeed')
const dayNineWindspeed = document.getElementById('day-9-Windspeed')
const dayTenWindspeed = document.getElementById('day-10-Windspeed')
const dayElevenWindspeed = document.getElementById('day-11-Windspeed')
const dayTwelveWindspeed = document.getElementById('day-12-Windspeed')
const dayThirteenWindspeed = document.getElementById('day-13-Windspeed')
const dayFourteenWindspeed = document.getElementById('day-14-Windspeed')


const dayOneFeelslike = document.getElementById('day-1-Feelslike')
const dayTwoFeelslike = document.getElementById('day-2-Feelslike')
const dayThreeFeelslike = document.getElementById('day-3-Feelslike')
const dayFourFeelslike = document.getElementById('day-4-Feelslike')
const dayFiveFeelslike = document.getElementById('day-5-Feelslike')
const daySixFeelslike = document.getElementById('day-6-Feelslike')
const daySevenFeelslike = document.getElementById('day-7-Feelslike')
const dayEightFeelslike = document.getElementById('day-8-Feelslike')
const dayNineFeelslike = document.getElementById('day-9-Feelslike')
const dayTenFeelslike = document.getElementById('day-10-Feelslike')
const dayElevenFeelslike = document.getElementById('day-11-Feelslike')
const dayTwelveFeelslike = document.getElementById('day-12-Feelslike')
const dayThirteenFeelslike = document.getElementById('day-13-Feelslike')
const dayFourteenFeelslike = document.getElementById('day-14-Feelslike')


const dayOneSunrise = document.getElementById('day-1-Sunrise')
const dayTwoSunrise = document.getElementById('day-2-Sunrise')
const dayThreeSunrise = document.getElementById('day-3-Sunrise')
const dayFourSunrise = document.getElementById('day-4-Sunrise')
const dayFiveSunrise = document.getElementById('day-5-Sunrise')
const daySixSunrise = document.getElementById('day-6-Sunrise')
const daySevenSunrise = document.getElementById('day-7-Sunrise')
const dayEightSunrise = document.getElementById('day-8-Sunrise')
const dayNineSunrise = document.getElementById('day-9-Sunrise')
const dayTenSunrise = document.getElementById('day-10-Sunrise')
const dayElevenSunrise = document.getElementById('day-11-Sunrise')
const dayTwelveSunrise = document.getElementById('day-12-Sunrise')
const dayThirteenSunrise = document.getElementById('day-13-Sunrise')
const dayFourteenSunrise = document.getElementById('day-14-Sunrise')


const dayOneSunset = document.getElementById('day-1-Sunset')
const dayTwoSunset = document.getElementById('day-2-Sunset')
const dayThreeSunset = document.getElementById('day-3-Sunset')
const dayFourSunset = document.getElementById('day-4-Sunset')
const dayFiveSunset = document.getElementById('day-5-Sunset')
const daySixSunset = document.getElementById('day-6-Sunset')
const daySevenSunset = document.getElementById('day-7-Sunset')
const dayEightSunset = document.getElementById('day-8-Sunset')
const dayNineSunset = document.getElementById('day-9-Sunset')
const dayTenSunset = document.getElementById('day-10-Sunset')
const dayElevenSunset = document.getElementById('day-11-Sunset')
const dayTwelveSunset = document.getElementById('day-12-Sunset')
const dayThirteenSunset = document.getElementById('day-13-Sunset')
const dayFourteenSunset = document.getElementById('day-14-Sunset')


const dayOneDiscription = document.getElementById('day-2-discription')
const dayTwoDiscription = document.getElementById('day-1-discription')
const dayThreeDiscription = document.getElementById('day-3-discription')
const dayFourDiscription = document.getElementById('day-4-discription')
const dayFiveDiscription = document.getElementById('day-5-discription')
const daySixDiscription = document.getElementById('day-6-discription')
const daySevenDiscription = document.getElementById('day-7-discription')
const dayEightDiscription = document.getElementById('day-8-discription')
const dayNineDiscription = document.getElementById('day-9-discription')
const dayTenDiscription = document.getElementById('day-10-discription')
const dayElevenDiscription = document.getElementById('day-11-discription')
const dayTwelveDiscription = document.getElementById('day-12-discription')
const dayThirteenDiscription = document.getElementById('day-13-discription')
const dayFourteenDiscription = document.getElementById('day-14-discription')


// main function
// async function getWeather
 const getWeather = async (e) => {
    e.preventDefault()
    // console.log(e.preventDefault);
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
        
        const addressName = data.address
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
                
        //houruniqesilector
        const dataHourZeroTemp = data.days[dayHourlyData].hours[0].temp
        hourZeroTemp.innerText = dataHourZeroTemp
        const dataHourZeroTime = data.days[dayHourlyData].hours[0].datetime
        hourZeroTime.innerText = dataHourZeroTime
        const dataHourZeroDate = data.days[dayHourlyData].datetime
        hourZeroDate.innerText = dataHourZeroDate
        const dataHourZeroIcon = data.days[dayHourlyData].hours[0].icon
        hourZeroIcon.innerText = dataHourZeroIcon
            
        //houruniqesilector
        const dataHourOneTemp = data.days[dayHourlyData].hours[1].temp
        hourOneTemp.innerText = dataHourOneTemp
        const dataHourOneTime = data.days[dayHourlyData].hours[1].datetime
        hourOneTime.innerText = dataHourOneTime
        const dataHourOneDate = data.days[dayHourlyData].datetime
         hourOneDate.innerText = dataHourOneDate
        const dataHourOneIcon = data.days[dayHourlyData].hours[1].icon
        hourOneIcon.innerText = dataHourOneIcon
            
        //houruniqesilector
        const dataHourTwoTemp = data.days[dayHourlyData].hours[2].temp
        hourTwoTemp.innerText = dataHourTwoTemp
        const dataHourTwoTime = data.days[dayHourlyData].hours[2].datetime
        hourTwoTime.innerText = dataHourTwoTime
        const dataHourTwoDate = data.days[dayHourlyData].datetime
         hourTwoDate.innerText = dataHourTwoDate
        const dataHourTwoIcon = data.days[dayHourlyData].hours[2].icon
        hourTwoIcon.innerText = dataHourTwoIcon
            
        //houruniqesilector
        const dataHourThreeTemp = data.days[dayHourlyData].hours[3].temp
        hourThreeTemp.innerText = dataHourThreeTemp
        const dataHourThreeTime = data.days[dayHourlyData].hours[3].datetime
        hourThreeTime.innerText = dataHourThreeTime
        const dataHourThreeDate = data.days[dayHourlyData].datetime
         hourThreeDate.innerText = dataHourThreeDate
        const dataHourThreeIcon = data.days[dayHourlyData].hours[3].icon
        hourThreeIcon.innerText = dataHourThreeIcon
            
        //houruniqesilector
        const dataHourFourTemp = data.days[dayHourlyData].hours[4].temp
        hourFourTemp.innerText = dataHourFourTemp
        const dataHourFourTime = data.days[dayHourlyData].hours[4].datetime
        hourFourTime.innerText = dataHourFourTime
        const dataHourFourDate = data.days[dayHourlyData].datetime
         hourFourDate.innerText = dataHourFourDate
        const dataHourFourIcon = data.days[dayHourlyData].hours[4].icon
        hourFourIcon.innerText = dataHourFourIcon
            
        //houruniqesilector
        const dataHourFiveTemp = data.days[dayHourlyData].hours[5].temp
        hourFiveTemp.innerText = dataHourFiveTemp
        const dataHourFiveTime = data.days[dayHourlyData].hours[5].datetime
        hourFiveTime.innerText = dataHourFiveTime
        const dataHourFiveDate = data.days[dayHourlyData].datetime
         hourFiveDate.innerText = dataHourFiveDate
        const dataHourFiveIcon = data.days[dayHourlyData].hours[5].icon
        hourFiveIcon.innerText = dataHourFiveIcon
            
        //houruniqesilector
        const dataHourSixTemp = data.days[dayHourlyData].hours[6].temp
        hourSixTemp.innerText = dataHourSixTemp
        const dataHourSixTime = data.days[dayHourlyData].hours[6].datetime
        hourSixTime.innerText = dataHourSixTime
        const dataHourSixDate = data.days[dayHourlyData].datetime
         hourSixDate.innerText = dataHourSixDate
        const dataHourSixIcon = data.days[dayHourlyData].hours[6].icon
        hourSixIcon.innerText = dataHourSixIcon
            
        //houruniqesilector
        const dataHourSevenTemp = data.days[dayHourlyData].hours[7].temp
        hourSevenTemp.innerText = dataHourSevenTemp
        const dataHourSevenTime = data.days[dayHourlyData].hours[7].datetime
        hourSevenTime.innerText = dataHourSevenTime
        const dataHourSevenDate = data.days[dayHourlyData].datetime
         hourSevenDate.innerText = dataHourSevenDate
        const dataHourSevenIcon = data.days[dayHourlyData].hours[7].icon
        hourSevenIcon.innerText = dataHourSevenIcon
            
        //houruniqesilector
        const dataHourEightTemp = data.days[dayHourlyData].hours[8].temp
        hourEightTemp.innerText = dataHourEightTemp
        const dataHourEightTime = data.days[dayHourlyData].hours[8].datetime
        hourEightTime.innerText = dataHourEightTime
        const dataHourEightDate = data.days[dayHourlyData].datetime
         hourEightDate.innerText = dataHourEightDate
        const dataHourEightIcon = data.days[dayHourlyData].hours[8].icon
        hourEightIcon.innerText = dataHourEightIcon
            
        //houruniqesilector
        const dataHourNineTemp = data.days[dayHourlyData].hours[9].temp
        hourNineTemp.innerText = dataHourNineTemp
        const dataHourNineTime = data.days[dayHourlyData].hours[9].datetime
        hourNineTime.innerText = dataHourNineTime
        const dataHourNineDate = data.days[dayHourlyData].datetime
         hourNineDate.innerText = dataHourNineDate
        const dataHourNineIcon = data.days[dayHourlyData].hours[9].icon
        hourNineIcon.innerText = dataHourNineIcon
            
        //houruniqesilector
        const dataHourTenTemp = data.days[dayHourlyData].hours[10].temp
        hourTenTemp.innerText = dataHourTenTemp
        const dataHourTenTime = data.days[dayHourlyData].hours[10].datetime
        hourTenTime.innerText = dataHourTenTime
        const dataHourTenDate = data.days[dayHourlyData].datetime
         hourTenDate.innerText = dataHourTenDate
        const dataHourTenIcon = data.days[dayHourlyData].hours[10].icon
        hourTenIcon.innerText = dataHourTenIcon
            
        //houruniqesilector
        const dataHourElevenTemp = data.days[dayHourlyData].hours[11].temp
        hourElevenTemp.innerText = dataHourElevenTemp
        const dataHourElevenTime = data.days[dayHourlyData].hours[11].datetime
        hourElevenTime.innerText = dataHourElevenTime
        const dataHourElevenDate = data.days[dayHourlyData].datetime
         hourElevenDate.innerText = dataHourElevenDate
        const dataHourElevenIcon = data.days[dayHourlyData].hours[11].icon
        hourElevenIcon.innerText = dataHourElevenIcon
            
        //houruniqesilector
        const dataHourTwelveTemp = data.days[dayHourlyData].hours[12].temp
        hourTwelveTemp.innerText = dataHourTwelveTemp
        const dataHourTwelveTime = data.days[dayHourlyData].hours[12].datetime
        hourTwelveTime.innerText = dataHourTwelveTime
        const dataHourTwelveDate = data.days[dayHourlyData].datetime
         hourTwelveDate.innerText = dataHourTwelveDate
        const dataHourTwelveIcon = data.days[dayHourlyData].hours[12].icon
        hourTwelveIcon.innerText = dataHourTwelveIcon
             
        //houruniqesilector
        const dataHourThirteenTemp = data.days[dayHourlyData].hours[13].temp
        hourThirteenTemp.innerText = dataHourThirteenTemp
        const dataHourThirteenTime = data.days[dayHourlyData].hours[13].datetime
        hourThirteenTime.innerText = dataHourThirteenTime
        const dataHourThirteenDate = data.days[dayHourlyData].datetime
         hourThirteenDate.innerText = dataHourThirteenDate
        const dataHourThirteenIcon = data.days[dayHourlyData].hours[13].icon
        hourThirteenIcon.innerText = dataHourThirteenIcon
            
        //houruniqesilector
        const dataHourFourteenTemp = data.days[dayHourlyData].hours[14].temp
        hourFourteenTemp.innerText = dataHourFourteenTemp
        const dataHourFourteenTime = data.days[dayHourlyData].hours[14].datetime
        hourFourteenTime.innerText = dataHourFourteenTime
        const dataHourFourteenDate = data.days[dayHourlyData].datetime
         hourFourteenDate.innerText = dataHourFourteenDate
        const dataHourFourteenIcon = data.days[dayHourlyData].hours[14].icon
        hourFourteenIcon.innerText = dataHourFourteenIcon
            
        //houruniqesilector
        const dataHourFifteenTemp = data.days[dayHourlyData].hours[15].temp
        hourFifteenTemp.innerText = dataHourFifteenTemp
        const dataHourFifteenTime = data.days[dayHourlyData].hours[15].datetime
        hourFifteenTime.innerText = dataHourFifteenTime
        const dataHourFifteenDate = data.days[dayHourlyData].datetime
         hourFifteenDate.innerText = dataHourFifteenDate
        const dataHourFifteenIcon = data.days[dayHourlyData].hours[15].icon
        hourFifteenIcon.innerText = dataHourFifteenIcon
            
        //houruniqesilector
        const dataHourSixteenTemp = data.days[dayHourlyData].hours[16].temp
        hourSixteenTemp.innerText = dataHourSixteenTemp
        const dataHourSixteenTime = data.days[dayHourlyData].hours[16].datetime
        hourSixteenTime.innerText = dataHourSixteenTime
        const dataHourSixteenDate = data.days[dayHourlyData].datetime
         hourSixteenDate.innerText = dataHourSixteenDate
        const dataHourSixteenIcon = data.days[dayHourlyData].hours[16].icon
        hourSixteenIcon.innerText = dataHourSixteenIcon
            
        //houruniqesilector
        const dataHourSeventeenTemp = data.days[dayHourlyData].hours[17].temp
        hourSeventeenTemp.innerText = dataHourSeventeenTemp
        const dataHourSeventeenTime = data.days[dayHourlyData].hours[17].datetime
        hourSeventeenTime.innerText = dataHourSeventeenTime
        const dataHourSeventeenDate = data.days[dayHourlyData].datetime
         hourSeventeenDate.innerText = dataHourSeventeenDate
        const dataHourSeventeenIcon = data.days[dayHourlyData].hours[17].icon
        hourSeventeenIcon.innerText = dataHourSeventeenIcon
            
        //houruniqesilector
        const dataHourEighteenTemp = data.days[dayHourlyData].hours[18].temp
        hourEighteenTemp.innerText = dataHourEighteenTemp
        const dataHourEighteenTime = data.days[dayHourlyData].hours[18].datetime
        hourEighteenTime.innerText = dataHourEighteenTime
        const dataHourEighteenDate = data.days[dayHourlyData].datetime
         hourEighteenDate.innerText = dataHourEighteenDate
        const dataHourEighteenIcon = data.days[dayHourlyData].hours[18].icon
        hourEighteenIcon.innerText = dataHourEighteenIcon
            
        //houruniqesilector
        const dataHourNineteenTemp = data.days[dayHourlyData].hours[19].temp
        hourNineteenTemp.innerText = dataHourNineteenTemp
        const dataHourNineteenTime = data.days[dayHourlyData].hours[19].datetime
        hourNineteenTime.innerText = dataHourNineteenTime
        const dataHourNineteenDate = data.days[dayHourlyData].datetime
         hourNineteenDate.innerText = dataHourNineteenDate
        const dataHourNineteenIcon = data.days[dayHourlyData].hours[19].icon
        hourNineteenIcon.innerText = dataHourNineteenIcon
            
        //houruniqesilector
        const dataHourTwentyTemp = data.days[dayHourlyData].hours[20].temp
        hourTwentyTemp.innerText = dataHourTwentyTemp
        const dataHourTwentyTime = data.days[dayHourlyData].hours[20].datetime
        hourTwentyTime.innerText = dataHourTwentyTime
        const dataHourTwentyDate = data.days[dayHourlyData].datetime
         hourTwentyDate.innerText = dataHourTwentyDate
        const dataHourTwentyIcon = data.days[dayHourlyData].hours[20].icon
        hourTwentyIcon.innerText = dataHourTwentyIcon
            
        //houruniqesilector
        const dataHourTwentyOneTemp = data.days[dayHourlyData].hours[21].temp
        hourTwentyOneTemp.innerText = dataHourTwentyOneTemp
        const dataHourTwentyOneTime = data.days[dayHourlyData].hours[21].datetime
        hourTwentyOneTime.innerText = dataHourTwentyOneTime
        const dataHourTwentyOneDate = data.days[dayHourlyData].datetime
         hourTwentyOneDate.innerText = dataHourTwentyOneDate
        const dataHourTwentyOneIcon = data.days[dayHourlyData].hours[21].icon
        hourTwentyOneIcon.innerText = dataHourTwentyOneIcon
            
        //houruniqesilector
        const dataHourTwentyTwoTemp = data.days[dayHourlyData].hours[22].temp
        hourTwentyTwoTemp.innerText = dataHourTwentyTwoTemp
        const dataHourTwentyTwoTime = data.days[dayHourlyData].hours[22].datetime
        hourTwentyTwoTime.innerText = dataHourTwentyTwoTime
        const dataHourTwentyTwoDate = data.days[dayHourlyData].datetime
         hourTwentyTwoDate.innerText = dataHourTwentyTwoDate
        const dataHourTwentyTwoIcon = data.days[dayHourlyData].hours[22].icon
        hourTwentyTwoIcon.innerText = dataHourTwentyTwoIcon
            
        //houruniqesilector
        const dataHourTwentyThreeTemp = data.days[dayHourlyData].hours[23].temp
        hourTwentyThreeTemp.innerText = dataHourTwentyThreeTemp
        const dataHourTwentyThreeTime = data.days[dayHourlyData].hours[23].datetime
        hourTwentyThreeTime.innerText = dataHourTwentyThreeTime
        const dataHourTwentyThreeDate = data.days[dayHourlyData].datetime
         hourTwentyThreeDate.innerText = dataHourTwentyThreeDate 
        const dataHourTwentyThreeIcon = data.days[dayHourlyData].hours[23].icon
        hourTwentyThreeIcon.innerText = dataHourTwentyThreeIcon
            
        // next 14 day 
    
       const dataOneDatetime = data.days[1].datetime
       dayOneDate.innerText = dataOneDatetime
       const dataTwoDatetime = data.days[2].datetime
       dayTwoDate.innerText = dataTwoDatetime
       const dataThreeDatetime = data.days[3].datetime
       dayThreeDate.innerText = dataThreeDatetime
       const dataFourDatetime = data.days[4].datetime
       dayFourDate.innerText = dataFourDatetime
       const dataFiveDatetime = data.days[5].datetime
       dayFiveDate.innerText = dataFiveDatetime
       const dataSixDatetime = data.days[6].datetime
       daySixDate.innerText = dataSixDatetime
       const dataSevenDatetime = data.days[7].datetime
       daySevenDate.innerText = dataSevenDatetime
       const dataEightDatetime = data.days[8].datetime
       dayEightDate.innerText = dataEightDatetime
       const dataNineDatetime = data.days[9].datetime
       dayNineDate.innerText = dataNineDatetime
       const dataTenDatetime = data.days[10].datetime
       dayTenDate.innerText = dataTenDatetime
       const dataElevenDatetime = data.days[11].datetime
       dayElevenDate.innerText = dataElevenDatetime
       const dataTwelveDatetime = data.days[12].datetime
       dayTwelveDate.innerText = dataTwelveDatetime
       const dataThirteenDatetime = data.days[13].datetime
       dayThirteenDate.innerText = dataThirteenDatetime
       const dataFourteenDatetime = data.days[14].datetime
       dayFourteenDate.innerText = dataFourteenDatetime

       const dataOneIcon = data.days[1].icon
       dayOneIcon.innerText = dataOneIcon
       const dataTwoIcon = data.days[2].icon
       dayTwoIcon.innerText = dataTwoIcon
       const dataThreeIcon = data.days[3].icon
       dayThreeIcon.innerText = dataThreeIcon
       const dataFourIcon = data.days[4].icon
       dayFourIcon.innerText = dataFourIcon
       const dataFiveIcon = data.days[5].icon
       dayFiveIcon.innerText = dataFiveIcon
       const dataSixIcon = data.days[6].icon
       daySixIcon.innerText = dataSixIcon
       const dataSevenIcon = data.days[7].icon
       daySevenIcon.innerText = dataSevenIcon
       const dataEightIcon = data.days[8].icon
       dayEightIcon.innerText = dataEightIcon
       const dataNineIcon = data.days[9].icon
       dayNineIcon.innerText = dataNineIcon
       const dataTenIcon = data.days[10].icon
       dayTenIcon.innerText = dataTenIcon
       const dataElevenIcon = data.days[11].icon
       dayElevenIcon.innerText = dataElevenIcon
       const dataTwelveIcon = data.days[12].icon
       dayTwelveIcon.innerText = dataTwelveIcon
       const dataThirteenIcon = data.days[13].icon
       dayThirteenIcon.innerText = dataThirteenIcon
       const dataFourteenIcon = data.days[14].icon
       dayFourteenIcon.innerText = dataFourteenIcon

       const dataOneTemp = data.days[1].temp
       dayOneTemp.innerText = dataOneTemp
       const dataTwoTemp = data.days[2].temp
       dayTwoTemp.innerText = dataTwoTemp
       const dataThreeTemp = data.days[3].temp
       dayThreeTemp.innerText = dataThreeTemp
       const dataFourTemp = data.days[4].temp
       dayFourTemp.innerText = dataFourTemp
       const dataFiveTemp = data.days[5].temp
       dayFiveTemp.innerText = dataFiveTemp
       const dataSixTemp = data.days[6].temp
       daySixTemp.innerText = dataSixTemp
       const dataSevenTemp = data.days[7].temp
       daySevenTemp.innerText = dataSevenTemp
       const dataEightTemp = data.days[8].temp
       dayEightTemp.innerText = dataEightTemp
       const dataNineTemp = data.days[9].temp
       dayNineTemp.innerText = dataNineTemp
       const dataTenTemp = data.days[10].temp
       dayTenTemp.innerText = dataTenTemp
       const dataElevenTemp = data.days[11].temp
       dayElevenTemp.innerText = dataElevenTemp
       const dataTwelveTemp = data.days[12].temp
       dayTwelveTemp.innerText = dataTwelveTemp
       const dataThirteenTemp = data.days[13].temp
       dayThirteenTemp.innerText = dataThirteenTemp
       const dataFourteenTemp = data.days[14].temp
       dayFourteenTemp.innerText = dataFourteenTemp

       const dataOneTempmin = data.days[1].tempmin
       dayOneMinTemp.innerText = dataOneTempmin
       const dataTwoTempmin = data.days[2].tempmin
       dayTwoMinTemp.innerText = dataTwoTempmin
       const dataThreeTempmin = data.days[3].tempmin
       dayThreeMinTemp.innerText = dataThreeTempmin
       const dataFourTempmin = data.days[4].tempmin
       dayFourMinTemp.innerText = dataFourTempmin
       const dataFiveTempmin = data.days[5].tempmin
       dayFiveMinTemp.innerText = dataFiveTempmin
       const dataSixTempmin = data.days[6].tempmin
       daySixMinTemp.innerText = dataSixTempmin
       const dataSevenTempmin = data.days[7].tempmin
       daySevenMinTemp.innerText = dataSevenTempmin
       const dataEightTempmin = data.days[8].tempmin
       dayEightMinTemp.innerText = dataEightTempmin
       const dataNineTempmin = data.days[9].tempmin
       dayNineMinTemp.innerText = dataNineTempmin
       const dataTenTempmin = data.days[10].tempmin
       dayTenMinTemp.innerText = dataTenTempmin
       const dataElevenTempmin = data.days[11].tempmin
       dayElevenMinTemp.innerText = dataElevenTempmin
       const dataTwelveTempmin = data.days[12].tempmin
       dayTwelveMinTemp.innerText = dataTwelveTempmin
       const dataThirteenTempmin = data.days[13].tempmin
       dayThirteenMinTemp.innerText = dataThirteenTempmin
       const dataFourteenTempmin = data.days[14].tempmin
       dayFourteenMinTemp.innerText = dataFourteenTempmin

       const dataOneempmax = data.days[1].tempmax
       dayOneMaxTemp.innerText = dataOneempmax
       const dataTwoempmax = data.days[2].tempmax
       dayTwoMaxTemp.innerText = dataTwoempmax
       const dataThreeempmax = data.days[3].tempmax
       dayThreeMaxTemp.innerText = dataThreeempmax
       const dataFourempmax = data.days[4].tempmax
       dayFourMaxTemp.innerText = dataFourempmax
       const dataFiveempmax = data.days[5].tempmax
       dayFiveMaxTemp.innerText = dataFiveempmax
       const dataSixempmax = data.days[6].tempmax
       daySixMaxTemp.innerText = dataSixempmax
       const dataSevenempmax = data.days[7].tempmax
       daySevenMaxTemp.innerText = dataSevenempmax
       const dataEightempmax = data.days[8].tempmax
       dayEightMaxTemp.innerText = dataEightempmax
       const dataNineempmax = data.days[9].tempmax
       dayNineMaxTemp.innerText = dataNineempmax
       const dataTenempmax = data.days[10].tempmax
       dayTenMaxTemp.innerText = dataTenempmax
       const dataElevenempmax = data.days[11].tempmax
       dayElevenMaxTemp.innerText = dataElevenempmax
       const dataTwelveempmax = data.days[12].tempmax
       dayTwelveMaxTemp.innerText = dataTwelveempmax
       const dataThirteenempmax = data.days[13].tempmax
       dayThirteenMaxTemp.innerText = dataThirteenempmax
       const dataFourteenempmax = data.days[14].tempmax
       dayFourteenMaxTemp.innerText = dataFourteenempmax

       const dataOneWindspeed = data.days[1].windspeed
       dayOneWindspeed.innerText = dataOneWindspeed
       const dataTwoWindspeed = data.days[2].windspeed
       dayTwoWindspeed.innerText = dataTwoWindspeed
       const dataThreeWindspeed = data.days[3].windspeed
       dayThreeWindspeed.innerText = dataThreeWindspeed
       const dataFourWindspeed = data.days[4].windspeed
       dayFourWindspeed.innerText = dataFourWindspeed
       const dataFiveWindspeed = data.days[5].windspeed
       dayFiveWindspeed.innerText = dataFiveWindspeed
       const dataSixWindspeed = data.days[6].windspeed
       daySixWindspeed.innerText = dataSixWindspeed
       const dataSevenWindspeed = data.days[7].windspeed
       daySevenWindspeed.innerText = dataSevenWindspeed
       const dataEightWindspeed = data.days[8].windspeed
       dayEightWindspeed.innerText = dataEightWindspeed
       const dataNineWindspeed = data.days[9].windspeed
       dayNineWindspeed.innerText = dataNineWindspeed
       const dataTenWindspeed = data.days[10].windspeed
       dayTenWindspeed.innerText = dataTenWindspeed
       const dataElevenWindspeed = data.days[11].windspeed
       dayElevenWindspeed.innerText = dataElevenWindspeed
       const dataTwelveWindspeed = data.days[12].windspeed
       dayTwelveWindspeed.innerText = dataTwelveWindspeed
       const dataThirteenWindspeed = data.days[13].windspeed
       dayThirteenWindspeed.innerText = dataThirteenWindspeed
       const dataFourteenWindspeed = data.days[14].windspeed
       dayFourteenWindspeed.innerText = dataFourteenWindspeed

       const dataOneFeelslike = data.days[1].feelslike
       dayOneFeelslike.innerText = dataOneFeelslike
       const dataTwoFeelslike = data.days[2].feelslike
       dayTwoFeelslike.innerText = dataTwoFeelslike
       const dataThreeFeelslike = data.days[3].feelslike
       dayThreeFeelslike.innerText = dataThreeFeelslike
       const dataFourFeelslike = data.days[4].feelslike
       dayFourFeelslike.innerText = dataFourFeelslike
       const dataFiveFeelslike = data.days[5].feelslike
       dayFiveFeelslike.innerText = dataFiveFeelslike
       const dataSixFeelslike = data.days[6].feelslike
       daySixFeelslike.innerText = dataSixFeelslike
       const dataSevenFeelslike = data.days[7].feelslike
       daySevenFeelslike.innerText = dataSevenFeelslike
       const dataEightFeelslike = data.days[8].feelslike
       dayEightFeelslike.innerText = dataEightFeelslike
       const dataNineFeelslike = data.days[9].feelslike
       dayNineFeelslike.innerText = dataNineFeelslike
       const dataTenFeelslike = data.days[10].feelslike
       dayTenFeelslike.innerText = dataTenFeelslike
       const dataElevenFeelslike = data.days[11].feelslike
       dayElevenFeelslike.innerText = dataElevenFeelslike
       const dataTwelveFeelslike = data.days[12].feelslike
       dayTwelveFeelslike.innerText = dataTwelveFeelslike
       const dataThirteenFeelslike = data.days[13].feelslike
       dayThirteenFeelslike.innerText = dataThirteenFeelslike
       const dataFourteenFeelslike = data.days[14].feelslike
       dayFourteenFeelslike.innerText = dataFourteenFeelslike

       const dataOneSunrise = data.days[1].sunrise
       dayOneSunrise.innerText = dataOneSunrise
       const dataTwoSunrise = data.days[2].sunrise
       dayTwoSunrise.innerText = dataTwoSunrise
       const dataThreeSunrise = data.days[3].sunrise
       dayThreeSunrise.innerText = dataThreeSunrise
       const dataFourSunrise = data.days[4].sunrise
       dayFourSunrise.innerText = dataFourSunrise
       const dataFiveSunrise = data.days[5].sunrise
       dayFiveSunrise.innerText = dataFiveSunrise
       const dataSixSunrise = data.days[6].sunrise
       daySixSunrise.innerText = dataSixSunrise
       const dataSevenSunrise = data.days[7].sunrise
       daySevenSunrise.innerText = dataSevenSunrise
       const dataEightSunrise = data.days[8].sunrise
       dayEightSunrise.innerText = dataEightSunrise
       const dataNineSunrise = data.days[9].sunrise
       dayNineSunrise.innerText = dataNineSunrise
       const dataTenSunrise = data.days[10].sunrise
       dayTenSunrise.innerText = dataTenSunrise
       const dataElevenSunrise = data.days[11].sunrise
       dayElevenSunrise.innerText = dataElevenSunrise
       const dataTwelveSunrise = data.days[12].sunrise
       dayTwelveSunrise.innerText = dataTwelveSunrise
       const dataThirteenSunrise = data.days[13].sunrise
       dayThirteenSunrise.innerText = dataThirteenSunrise
       const dataFourteenSunrise = data.days[14].sunrise
       dayFourteenSunrise.innerText = dataFourteenSunrise

       const dataOneSunset = data.days[1].sunset
       dayOneSunset.innerText = dataOneSunset
       const dataTwoSunset = data.days[2].sunset
       dayTwoSunset.innerText = dataTwoSunset
       const dataThreeSunset = data.days[3].sunset
       dayThreeSunset.innerText = dataThreeSunset
       const dataFourSunset = data.days[4].sunset
       dayFourSunset.innerText = dataFourSunset
       const dataFiveSunset = data.days[5].sunset
       dayFiveSunset.innerText = dataFiveSunset
       const dataSixSunset = data.days[6].sunset
       daySixSunset.innerText = dataSixSunset
       const dataSevenSunset = data.days[7].sunset
       daySevenSunset.innerText = dataSevenSunset
       const dataEightSunset = data.days[8].sunset
       dayEightSunset.innerText = dataEightSunset
       const dataNineSunset = data.days[9].sunset
       dayNineSunset.innerText = dataNineSunset
       const dataTenSunset = data.days[10].sunset
       dayTenSunset.innerText = dataTenSunset
       const dataElevenSunset = data.days[11].sunset
       dayElevenSunset.innerText = dataElevenSunset
       const dataTwelveSunset = data.days[12].sunset
       dayTwelveSunset.innerText = dataTwelveSunset
       const dataThirteenSunset = data.days[13].sunset
       dayThirteenSunset.innerText = dataThirteenSunset
       const dataFourteenSunset = data.days[14].sunset
       dayFourteenSunset.innerText = dataFourteenSunset

       const dataOneDescription = data.days[1].description
       dayOneDiscription.innerText = dataOneDescription
       const dataTwoDescription = data.days[2].description
       dayTwoDiscription.innerText = dataTwoDescription
       const dataThreeDescription = data.days[3].description
       dayThreeDiscription.innerText = dataThreeDescription
       const dataFourDescription = data.days[4].description
       dayFourDiscription.innerText = dataFourDescription
       const dataFiveDescription = data.days[5].description
       dayFiveDiscription.innerText = dataFiveDescription
       const dataSixDescription = data.days[6].description
       daySixDiscription.innerText = dataSixDescription
       const dataSevenDescription = data.days[7].description
       daySevenDiscription.innerText = dataSevenDescription
       const dataEightDescription = data.days[8].description
       dayEightDiscription.innerText = dataEightDescription
       const dataNineDescription = data.days[9].description
       dayNineDiscription.innerText = dataNineDescription
       const dataTenDescription = data.days[10].description
       dayTenDiscription.innerText = dataTenDescription
       const dataElevenDescription = data.days[11].description
       dayElevenDiscription.innerText = dataElevenDescription
       const dataTwelveDescription = data.days[12].description
       dayTwelveDiscription.innerText = dataTwelveDescription
       const dataThirteenDescription = data.days[13].description
       dayThirteenDiscription.innerText = dataThirteenDescription
       const dataFourteenDescription = data.days[14].description
       dayFourteenDiscription.innerText = dataFourteenDescription


    //    Itasuniq
       if (dataOneIcon == "partly-cloudy-day"){
            let li = dayOneIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }
           else if(dataOneIcon == "partly-cloudy-night"){
            let li = dayOneIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataOneIcon == "clear-day"){
            let li = dayOneIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataOneIcon == "clear-night"){
            let li = dayOneIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataOneIcon == "cloudy"){
            let li = dayOneIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataOneIcon == "snow"){
            let li = dayOneIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataOneIcon == "fog"){
            let li = dayOneIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataOneIcon == "rain"){
            let li = dayOneIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataOneIcon == "wind"){
            let li = dayOneIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }                                                                                                                                       
        else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataTwoIcon == "partly-cloudy-day"){
            let li = dayTwoIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataTwoIcon == "partly-cloudy-night"){
            let li = dayTwoIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataTwoIcon == "clear-day"){
            let li = dayTwoIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataTwoIcon == "clear-night"){
            let li = dayTwoIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataTwoIcon == "cloudy"){
            let li = dayTwoIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataTwoIcon == "snow"){
            let li = dayTwoIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataTwoIcon == "fog"){
            let li = dayTwoIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataTwoIcon == "rain"){
            let li = dayTwoIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataTwoIcon == "wind"){
            let li = dayTwoIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataThreeIcon == "partly-cloudy-day"){
            let li = dayThreeIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataThreeIcon == "partly-cloudy-night"){
            let li = dayThreeIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataThreeIcon == "clear-day"){
            let li = dayThreeIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataThreeIcon == "clear-night"){
            let li = dayThreeIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataThreeIcon == "cloudy"){
            let li = dayThreeIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataThreeIcon == "snow"){
            let li = dayThreeIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataThreeIcon == "fog"){
            let li = dayThreeIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataThreeIcon == "rain"){
            let li = dayThreeIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataThreeIcon == "wind"){
            let li = dayThreeIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataFourIcon == "partly-cloudy-day"){
            let li = dayFourIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataFourIcon == "partly-cloudy-night"){
            let li = dayFourIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataFourIcon == "clear-day"){
            let li = dayFourIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataFourIcon == "clear-night"){
            let li = dayFourIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataFourIcon == "cloudy"){
            let li = dayFourIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataFourIcon == "snow"){
            let li = dayFourIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataFourIcon == "fog"){
            let li = dayFourIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataFourIcon == "rain"){
            let li = dayFourIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataFourIcon == "wind"){
            let li = dayFourIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataFiveIcon == "partly-cloudy-day"){
            let li = dayFiveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataFiveIcon == "partly-cloudy-night"){
            let li = dayFiveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataFiveIcon == "clear-day"){
            let li = dayFiveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataFiveIcon == "clear-night"){
            let li = dayFiveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataFiveIcon == "cloudy"){
            let li = dayFiveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataFiveIcon == "snow"){
            let li = dayFiveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataFiveIcon == "fog"){
            let li = dayFiveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataFiveIcon == "rain"){
            let li = dayFiveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataFiveIcon == "wind"){
            let li = dayFiveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataSixIcon == "partly-cloudy-day"){
            let li = daySixIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataSixIcon == "partly-cloudy-night"){
            let li = daySixIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataSixIcon == "clear-day"){
            let li = daySixIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataSixIcon == "clear-night"){
            let li = daySixIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataSixIcon == "cloudy"){
            let li = daySixIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataSixIcon == "snow"){
            let li = daySixIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataSixIcon == "fog"){
            let li = daySixIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataSixIcon == "rain"){
            let li = daySixIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataSixIcon == "wind"){
            let li = daySixIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataSevenIcon == "partly-cloudy-day"){
            let li = daySevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataSevenIcon == "partly-cloudy-night"){
            let li = daySevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataSevenIcon == "clear-day"){
            let li = daySevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataSevenIcon == "clear-night"){
            let li = daySevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataSevenIcon == "cloudy"){
            let li = daySevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataSevenIcon == "snow"){
            let li = daySevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataSevenIcon == "fog"){
            let li = daySevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataSevenIcon == "rain"){
            let li = daySevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataSevenIcon == "wind"){
            let li = daySevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataEightIcon == "partly-cloudy-day"){
            let li = dayEightIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataEightIcon == "partly-cloudy-night"){
            let li = dayEightIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataEightIcon == "clear-day"){
            let li = dayEightIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataEightIcon == "clear-night"){
            let li = dayEightIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataEightIcon == "cloudy"){
            let li = dayEightIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataEightIcon == "snow"){
            let li = dayEightIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataEightIcon == "fog"){
            let li = dayEightIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataEightIcon == "rain"){
            let li = dayEightIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataEightIcon == "wind"){
            let li = dayEightIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataNineIcon == "partly-cloudy-day"){
            let li = dayNineIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataNineIcon == "partly-cloudy-night"){
            let li = dayNineIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataNineIcon == "clear-day"){
            let li = dayNineIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataNineIcon == "clear-night"){
            let li = dayNineIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataNineIcon == "cloudy"){
            let li = dayNineIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataNineIcon == "snow"){
            let li = dayNineIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataNineIcon == "fog"){
            let li = dayNineIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataNineIcon == "rain"){
            let li = dayNineIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataNineIcon == "wind"){
            let li = dayNineIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataTenIcon == "partly-cloudy-day"){
            let li = dayTenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataTenIcon == "partly-cloudy-night"){
            let li = dayTenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataTenIcon == "clear-day"){
            let li = dayTenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataTenIcon == "clear-night"){
            let li = dayTenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataTenIcon == "cloudy"){
            let li = dayTenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataTenIcon == "snow"){
            let li = dayTenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataTenIcon == "fog"){
            let li = dayTenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataTenIcon == "rain"){
            let li = dayTenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataTenIcon == "wind"){
            let li = dayTenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataElevenIcon == "partly-cloudy-day"){
            let li = dayElevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataElevenIcon == "partly-cloudy-night"){
            let li = dayElevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataElevenIcon == "clear-day"){
            let li = dayElevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataElevenIcon == "clear-night"){
            let li = dayElevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataElevenIcon == "cloudy"){
            let li = dayElevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataElevenIcon == "snow"){
            let li = dayElevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataElevenIcon == "fog"){
            let li = dayElevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataElevenIcon == "rain"){
            let li = dayElevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataElevenIcon == "wind"){
            let li = dayElevenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataTwelveIcon == "partly-cloudy-day"){
            let li = dayTwelveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataTwelveIcon == "partly-cloudy-night"){
            let li = dayTwelveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataTwelveIcon == "clear-day"){
            let li = dayTwelveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataTwelveIcon == "clear-night"){
            let li = dayTwelveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataTwelveIcon == "cloudy"){
            let li = dayTwelveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataTwelveIcon == "snow"){
            let li = dayTwelveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataTwelveIcon == "fog"){
            let li = dayTwelveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataTwelveIcon == "rain"){
            let li = dayTwelveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataTwelveIcon == "wind"){
            let li = dayTwelveIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataThirteenIcon == "partly-cloudy-day"){
            let li = dayThirteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataThirteenIcon == "partly-cloudy-night"){
            let li = dayThirteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataThirteenIcon == "clear-day"){
            let li = dayThirteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataThirteenIcon == "clear-night"){
            let li = dayThirteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataThirteenIcon == "cloudy"){
            let li = dayThirteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataThirteenIcon == "snow"){
            let li = dayThirteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataThirteenIcon == "fog"){
            let li = dayThirteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataThirteenIcon == "rain"){
            let li = dayThirteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataThirteenIcon == "wind"){
            let li = dayThirteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

    //    Itasuniq
       if (dataFourteenIcon == "partly-cloudy-day"){
            let li = dayFourteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoOne imgAllClass")
        }else if(dataFourteenIcon == "partly-cloudy-night"){
            let li = dayFourteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoTwo imgAllClass")
        }else if(dataFourteenIcon == "clear-day"){
            let li = dayFourteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoThree imgAllClass")
        }else if(dataFourteenIcon == "clear-night"){
            let li = dayFourteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFour imgAllClass")
        }else if(dataFourteenIcon == "cloudy"){
            let li = dayFourteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoFive imgAllClass")
        }else if(dataFourteenIcon == "snow"){
            let li = dayFourteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSix imgAllClass")
        }else if(dataFourteenIcon == "fog"){
            let li = dayFourteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoSeven imgAllClass")
        }else if(dataFourteenIcon == "rain"){
            let li = dayFourteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoEight imgAllClass")
        }else if(dataFourteenIcon == "wind"){
            let li = dayFourteenIcon.parentElement.parentElement
            li.setAttribute("class", "dayWeatherPhotoNine imgAllClass")
        }else{
            let lw = dayOneIcon.parentElement.parentElement
            lw.setAttribute("class", "dayWeatherPhotoTen imgAllClass3")
    }    

// for sun image
if (dataFourteenIcon == "partly-cloudy-day"){
    iconSun.setAttribute("src", "sunIconone ")
}else if(dataFourteenIcon == "partly-cloudy-night"){
    iconSun.setAttribute("src", "sunIconTwo ")
}else if(dataFourteenIcon == "clear-day"){
    iconSun.setAttribute("src", "sunIconThree ")
}else if(dataFourteenIcon == "clear-night"){
    iconSun.setAttribute("src", "sunIconFour ")
}else if(dataFourteenIcon == "cloudy"){
    iconSun.setAttribute("src", "sunIconFive ")
}else if(dataFourteenIcon == "snow"){
    iconSun.setAttribute("src", "sunIconSix ")
}else if(dataFourteenIcon == "fog"){
    iconSun.setAttribute("src", "sunIconSeven ")
}else if(dataFourteenIcon == "rain"){
    iconSun.setAttribute("src", "sunIconEight ")
}else if(dataFourteenIcon == "wind"){
    iconSun.setAttribute("src", "sunIconNine ")
}else{
    let lw = dayOneIcon.parentElement.parentElement
    lw.setAttribute("class", "sunIconTen imgAllClass3")
}    

    
        // window.location.onload(true)
        console.log("main function runs ssucess fully");
        
        form.reset()
        input.setAttribute("value" , resolvedAddress)
       
    
    } catch (error) {
        window.alert("Enter Valid City Name Or something wong")
    }
    
    
}

// for gatting hourly data of all days

const dayOne = document.getElementById('dayOne') 
dayOne.addEventListener("click" , funForOne)
dayOne.addEventListener("click" , getWeather)
function funForOne(){
    dayHourlyData = 1
}
const dayTwo = document.getElementById('dayTwo') 
dayTwo.addEventListener("click" , funForTwo)
dayTwo.addEventListener("click" , getWeather)
function funForTwo(){
    dayHourlyData = 2
}
const dayThree = document.getElementById('dayThree') 
dayThree.addEventListener("click" , funForThree)
dayThree.addEventListener("click" , getWeather)
function funForThree(){
    dayHourlyData = 3
}
const dayFour = document.getElementById('dayFour') 
dayFour.addEventListener("click" , funForFour)
dayFour.addEventListener("click" , getWeather)
function funForFour(){
    dayHourlyData = 4
}
const dayFive = document.getElementById('dayFive') 
dayFive.addEventListener("click" , funForFive)
dayFive.addEventListener("click" , getWeather)
function funForFive(){
    dayHourlyData = 5
}
const daySix = document.getElementById('daySix') 
daySix.addEventListener("click" , funForSix)
daySix.addEventListener("click" , getWeather)
function funForSix(){
    dayHourlyData = 6
}
const daySeven = document.getElementById('daySeven') 
daySeven.addEventListener("click" , funForSeven)
daySeven.addEventListener("click" , getWeather)
function funForSeven(){
    dayHourlyData = 7
}
const dayEight = document.getElementById('dayEight') 
dayEight.addEventListener("click" , funForEight)
dayEight.addEventListener("click" , getWeather)
function funForEight(){
    dayHourlyData = 8
}
const dayNine = document.getElementById('dayNine') 
dayNine.addEventListener("click" , funForNine)
dayNine.addEventListener("click" , getWeather)
function funForNine(){
    dayHourlyData = 9
}
const dayTen = document.getElementById('dayTen') 
dayTen.addEventListener("click" , funForTen)
dayTen.addEventListener("click" , getWeather)
function funForTen(){
    dayHourlyData = 10
}
const dayEleven = document.getElementById('dayEleven') 
dayEleven.addEventListener("click" , funForEleven)
dayEleven.addEventListener("click" , getWeather)
function funForEleven(){
    dayHourlyData = 11
}
const dayTwelve = document.getElementById('dayTwelve') 
dayTwelve.addEventListener("click" , funForTwelve)
dayTwelve.addEventListener("click" , getWeather)
function funForTwelve(){
    dayHourlyData = 12
}
const dayThirteen = document.getElementById('dayThirteen') 
dayThirteen.addEventListener("click" , funForThirteen)
dayThirteen.addEventListener("click" , getWeather)
function funForThirteen(){
    dayHourlyData = 13
}
const dayFourteen = document.getElementById('dayFourteen') 
dayFourteen.addEventListener("click" , funForFourteen)
dayFourteen.addEventListener("click" , getWeather)
function funForFourteen(){
    dayHourlyData = 14
}


// call by top city     213- 217 in html to change city change there content don't disturb id name

indore.addEventListener("click", weatherIndore)
indore.addEventListener("click", getWeather)

function weatherIndore(e ){
    input.setAttribute("value" , indore.textContent)
    dayHourlyData = 0
        }


bhopal.addEventListener("click", weatherBhopal)
bhopal.addEventListener("click", getWeather)

function weatherBhopal(e ){
    input.setAttribute("value" , bhopal.textContent)
    dayHourlyData = 0
        }


        delhi.addEventListener("click", weatherdelhi)
        delhi.addEventListener("click", getWeather)

function weatherdelhi(e ){
    input.setAttribute("value" , delhi.textContent)
    dayHourlyData = 0
}


        mumbai.addEventListener("click", weathermumbai)
        mumbai.addEventListener("click", getWeather)

function weathermumbai(e ){
    input.setAttribute("value" , mumbai.textContent)
    dayHourlyData = 0
}


        shimla.addEventListener("click", weathershimla)
        shimla.addEventListener("click", getWeather)

function weathershimla(e ){
    input.setAttribute("value" , shimla.textContent)
    dayHourlyData = 0
}


// main funstion colling

form.addEventListener("submit", getWeather)
form.addEventListener("submit", empyty)
function empyty(){
    dayHourlyData = 0
        }



// getWeather()

// const weather = (callback ) => {
//     setTimeout(()=>{
//         form.reset
//         input.setAttribute("value" , "delhi")
//         callback(getWeather)
//     },150)
// }
// bhopal.addEventListener("click", weather)
  







//   https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mosco?unitGroup=metric&key=B44US8RVER5JCGA6WGXX26NVP&contentType=json