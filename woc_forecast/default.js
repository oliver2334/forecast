const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-text");

    
    
    const apiUrl = "https://geoapi.qweather.com/v2/city/lookup?key=33805979267b4bbda60a636836e225c9&location=";

    const apiUrl2 = "https://devapi.qweather.com/v7/weather/now?key=33805979267b4bbda60a636836e225c9&location=";

    const apiUrl3 = "https://devapi.qweather.com/v7/weather/7d?key=33805979267b4bbda60a636836e225c9&location=";

    const apiUrl4 = "https://devapi.qweather.com/v7/air/now?key=33805979267b4bbda60a636836e225c9&location=";


async function checkWeather(city){

    const response = await fetch(apiUrl+city)
    var data = await response.json();
    console.log(data);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".city").innerHTML = data.location[0].name;
        var id = data.location[0].id;

        const response2 = await fetch(apiUrl2+id);
        var data2 = await response2.json();
        console.log(data2);

        const response3 = await fetch(apiUrl3+id);
        var data3 = await response3.json();
        console.log(data3);

        const response4 = await fetch(apiUrl4+id);
        var data4 = await response4.json();
        console.log(data4);
        
        document.querySelector(".temp").innerHTML =data2.now.temp+ "℃";
        document.querySelector(".humidity").innerHTML = data2.now.humidity + "%";
        document.querySelector(".wind").innerHTML = data2.now.windDir+" "+data2.now.windScale+"级";
        if(data2.now.text== "阴"||data2.now.text== "多云"||data2.now.text== "少云"){
            weatherIcon.src = "images/clouds.png";
            document.querySelector(".kind_temp").innerHTML = data2.now.text+"   "+data3.daily[0].tempMin+"℃~"+data3.daily[0].tempMax+"℃";
        }
        else if(data2.now.text== "晴"){
            weatherIcon.src = "images/clear.png";
            document.querySelector(".kind_temp").innerHTML = data2.now.text+"   "+data3.daily[0].tempMin+"℃~"+data3.daily[0].tempMax+"℃";
        }
        else if(data2.now.text== "阵雨"||data2.now.text== "小雨"||data2.now.text== "中雨"||data2.now.text== "大雨"||data2.now.text== "暴雨"){
            weatherIcon.src = "images/rain.png";
            document.querySelector(".kind_temp").innerHTML = data2.now.text+"   "+data3.daily[0].tempMin+"℃~"+data3.daily[0].tempMax+"℃";
        }
        else if(data2.now.text== "小雪"||data2.now.text== "中雪"||data2.now.text== "大雪"||data2.now.text== "暴雪"){
            weatherIcon.src = "images/cold.png";
            document.querySelector(".kind_temp").innerHTML = data2.now.text+"   "+data3.daily[0].tempMin+"℃~"+data3.daily[0].tempMax+"℃";
        }
        else if(data2.now.text== "雾"){
            weatherIcon.src = "images/mist.png";
            document.querySelector(".kind_temp").innerHTML = data2.now.text+"   "+data3.daily[0].tempMin+"℃~"+data3.daily[0].tempMax+"℃";
        }



        if(data2.now.feelsLike>23){
            document.querySelector(".feels_like").src = "images/hot.png";
            document.querySelector(".feel_like").innerHTML="夏装"
        }
        else if(data2.now.feelsLike<=23&&data2.now.feelsLike>=15){
            document.querySelector(".feels_like").src = "images/grass.png";
            document.querySelector(".feel_like").innerHTML="春/秋装"
        }
        else{
            document.querySelector(".feels_like").src = "images/cold.png";
            document.querySelector(".feel_like").innerHTML="冬装"
        }

        document.querySelector(".aqi").innerHTML = data4.now.category;
        

        if(data3.daily[0].uvIndex<=2)
        {
            document.querySelector(".uvIndex").innerHTML = "弱";
        }
        else if(data3.daily[0].uvIndex<=4&&data3.daily[0].uvIndex>2)
        {
            document.querySelector(".uvIndex").innerHTML = "中等";
        }
        else if(data3.daily[0].uvIndex<=6&&data3.daily[0].uvIndex>4)
        {
            document.querySelector(".uvIndex").innerHTML = "强";
            document.querySelector(".uvIndex_warning").style.display = "block"
        }
        else if(data3.daily[0].uvIndex<=9&&data3.daily[0].uvIndex>6)
        {
            document.querySelector(".uvIndex").innerHTML = "极强";
            document.querySelector(".uvIndex_warning").style.display = "block"
        }
        else
        {
            document.querySelector(".uvIndex").innerHTML = "辐射";
            document.querySelector(".uvIndex_warning").style.display = "block"
        }

      


        document.querySelector(".date1").innerHTML="今天";
        document.querySelector(".date2").innerHTML="明天";
        document.querySelector(".date3").innerHTML=data3.daily[2].fxDate;
        document.querySelector(".date4").innerHTML=data3.daily[3].fxDate;
        document.querySelector(".date5").innerHTML=data3.daily[4].fxDate;

        

        document.querySelector(".max1").innerHTML=data3.daily[0].tempMax+"℃";
        document.querySelector(".max2").innerHTML=data3.daily[1].tempMax+"℃";
        document.querySelector(".max3").innerHTML=data3.daily[2].tempMax+"℃";
        document.querySelector(".max4").innerHTML=data3.daily[3].tempMax+"℃";
        document.querySelector(".max5").innerHTML=data3.daily[4].tempMax+"℃";


        document.querySelector(".min1").innerHTML=data3.daily[0].tempMin+"℃";
        document.querySelector(".min2").innerHTML=data3.daily[1].tempMin+"℃";
        document.querySelector(".min3").innerHTML=data3.daily[2].tempMin+"℃";
        document.querySelector(".min4").innerHTML=data3.daily[3].tempMin+"℃";
        document.querySelector(".min5").innerHTML=data3.daily[4].tempMin+"℃";


        if(data3.daily[0].textDay== "阴"||data3.daily[0].textDay== "多云"||data3.daily[0].textDay== "少云"){
            document.querySelector(".weather1").src="images/clouds.png";
            document.querySelector(".textDay1").innerHTML=data3.daily[0].textDay;
        }
        else if(data3.daily[0].textDay== "晴"){
            document.querySelector(".weather1").src="images/clear.png";
            document.querySelector(".textDay1").innerHTML=data3.daily[0].textDay;
        }
        else if(data3.daily[0].textDay== "阵雨"||data3.daily[0].textDay== "小雨"||data3.daily[0].textDay== "中雨"||data3.daily[0].textDay== "大雨"||data3.daily[0].textDay== "暴雨"){
            document.querySelector(".weather1").src="images/rain.png";
            document.querySelector(".textDay1").innerHTML=data3.daily[0].textDay;
        }
        else if(data3.daily[0].textDay== "小雪"||data3.daily[0].textDay== "中雪"||data3.daily[0].textDay== "大雪"||data3.daily[0].textDay== "暴雪"){
            document.querySelector(".weather1").src="images/cold.png";
            document.querySelector(".textDay1").innerHTML=data3.daily[0].textDay;
        }
        else if(data3.daily[0].textDay== "雾"){
            document.querySelector(".weather1").src="images/mist.png";
            document.querySelector(".textDay1").innerHTML=data3.daily[0].textDay;
        }
        else if(data3.daily[0].textDay== "雨夹雪"){
            document.querySelector(".weather1").src="images/sleet.png";
            document.querySelector(".textDay1".innerHTML)=data3.daily[0].textDay;
        }
        else{
            document.querySelector(".textDay1").innerHTML=data3.daily[0].textDay;
        }

        if(data3.daily[1].textDay== "阴"||data3.daily[1].textDay== "多云"||data3.daily[1].textDay== "少云"){
            document.querySelector(".weather2").src="images/clouds.png";
            document.querySelector(".textDay2").innerHTML=data3.daily[1].textDay;
        }
        else if(data3.daily[1].textDay== "晴"){
            document.querySelector(".weather2").src="images/clear.png";
            document.querySelector(".textDay2").innerHTML=data3.daily[1].textDay;
        }
        else if(data3.daily[1].textDay== "阵雨"||data3.daily[1].textDay== "小雨"||data3.daily[1].textDay== "中雨"||data3.daily[1].textDay== "大雨"||data3.daily[1].textDay== "暴雨"){
            document.querySelector(".weather2").src="images/rain.png";
            document.querySelector(".textDay2").innerHTML=data3.daily[1].textDay;
        }
        else if(data3.daily[1].textDay== "小雪"||data3.daily[1].textDay== "中雪"||data3.daily[1].textDay== "大雪"||data3.daily[1].textDay== "暴雪"){
            document.querySelector(".weather2").src="images/cold.png";
            document.querySelector(".textDay2").innerHTML=data3.daily[1].textDay;
        }
        else if(data3.daily[1].textDay== "雾"){
            document.querySelector(".weather2").src="images/mist.png";
            document.querySelector(".textDay2").innerHTML=data3.daily[1].textDay;
        }
        else if(data3.daily[1].textDay== "雨夹雪"){
            document.querySelector(".weather2").src="images/sleet.png";
            document.querySelector(".textDay2").innerHTML=data3.daily[1].textDay;
        }
        else{
            document.querySelector(".textDay2").innerHTML=data3.daily[1].textDay;
        }

        if(data3.daily[2].textDay== "阴"||data3.daily[2].textDay== "多云"||data3.daily[2].textDay== "少云"){
            document.querySelector(".weather3").src="images/clouds.png";
            document.querySelector(".textDay3").innerHTML=data3.daily[2].textDay;
        }
        else if(data3.daily[2].textDay== "晴"){
            document.querySelector(".weather3").src="images/clear.png";
            document.querySelector(".textDay3").innerHTML=data3.daily[2].textDay;
        }
        else if(data3.daily[2].textDay== "阵雨"||data3.daily[2].textDay== "小雨"||data3.daily[2].textDay== "中雨"||data3.daily[2].textDay== "大雨"||data3.daily[2].textDay== "暴雨"){
            document.querySelector(".weather3").src="images/rain.png";
            document.querySelector(".textDay3").innerHTML=data3.daily[2].textDay;
        }
        else if(data3.daily[2].textDay== "小雪"||data3.daily[2].textDay== "中雪"||data3.daily[2].textDay== "大雪"||data3.daily[2].textDay== "暴雪"){
            document.querySelector(".weather3").src="images/cold.png";
            document.querySelector(".textDay3").innerHTML=data3.daily[2].textDay;
        }
        else if(data3.daily[2].textDay== "雾"){
            document.querySelector(".weather3").src="images/mist.png";
            document.querySelector(".textDay3").innerHTML=data3.daily[2].textDay;
        }
        else if(data3.daily[2].textDay== "雨夹雪"){
            document.querySelector(".weather3").src="images/sleet.png";
            document.querySelector(".textDay3").innerHTML=data3.daily[2].textDay;
        }
        else{
            document.querySelector(".textDay3").innerHTML=data3.daily[2].textDay;
        }

        if(data3.daily[3].textDay== "阴"||data3.daily[3].textDay== "多云"||data3.daily[3].textDay== "少云"){
            document.querySelector(".weather4").src="images/clouds.png";
            document.querySelector(".textDay4").innerHTML=data3.daily[3].textDay;
        }
        else if(data3.daily[3].textDay== "晴"){
            document.querySelector(".weather4").src="images/clear.png";
            document.querySelector(".textDay4").innerHTML=data3.daily[3].textDay;
        }
        else if(data3.daily[3].textDay== "阵雨"||data3.daily[3].textDay== "小雨"||data3.daily[3].textDay== "中雨"||data3.daily[3].textDay== "大雨"||data3.daily[3].textDay== "暴雨"){
            document.querySelector(".weather4").src="images/rain.png";
            document.querySelector(".textDay4").innerHTML=data3.daily[3].textDay;
        }
        else if(data3.daily[3].textDay== "小雪"||data3.daily[3].textDay== "中雪"||data3.daily[3].textDay== "大雪"||data3.daily[3].textDay== "暴雪"){
            document.querySelector(".weather4").src="images/cold.png";
            document.querySelector(".textDay4").innerHTML=data3.daily[3].textDay;
        }
        else if(data3.daily[3].textDay== "雾"){
            document.querySelector(".weather4").src="images/mist.png";
            document.querySelector(".textDay4").innerHTML=data3.daily[3].textDay;
        }
        else if(data3.daily[3].textDay== "雨夹雪"){
            document.querySelector(".weather4").src="images/sleet.png";
            document.querySelector(".textDay4").innerHTML=data3.daily[3].textDay;
        }
        else{
            document.querySelector(".textDay4").innerHTML=data3.daily[3].textDay;
        }

        if(data3.daily[4].textDay== "阴"||data3.daily[4].textDay== "多云"||data3.daily[4].textDay== "少云"){
            document.querySelector(".weather5").src="images/clouds.png";
            document.querySelector(".textDay5").innerHTML=data3.daily[4].textDay;
        }
        else if(data3.daily[4].textDay== "晴"){
            document.querySelector(".weather5").src="images/clear.png";
            document.querySelector(".textDay5").innerHTML=data3.daily[4].textDay;
        }
        else if(data3.daily[4].textDay== "阵雨"||data3.daily[4].textDay== "小雨"||data3.daily[4].textDay== "中雨"||data3.daily[4].textDay== "大雨"||data3.daily[4].textDay== "暴雨"){
            document.querySelector(".weather5").src="images/rain.png";
            document.querySelector(".textDay5").innerHTML=data3.daily[4].textDay;
        }
        else if(data3.daily[4].textDay== "小雪"||data3.daily[4].textDay== "中雪"||data3.daily[4].textDay== "大雪"||data3.daily[4].textDay== "暴雪"){
            document.querySelector(".weather5").src="images/cold.png";
            document.querySelector(".textDay5").innerHTML=data3.daily[4].textDay;
        }
        else if(data3.daily[4].textDay== "雾"){
            document.querySelector(".weather5").src="images/mist.png";
            document.querySelector(".textDay5").innerHTML=data3.daily[4].textDay;
        }
        else if(data3.daily[4].textDay== "雨夹雪"){
            document.querySelector(".weather5").src="images/sleet.png";
            document.querySelector(".textDay5").innerHTML=data3.daily[4].textDay;
        }
        else{
            document.querySelector(".textDay5").innerHTML=data3.daily[4].textDay;
        }


    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})