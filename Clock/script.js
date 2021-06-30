console.log("This is My Clock");

function clockUpdate(){
    let currentTime= new Date();

   let Hour=currentTime.getHours();
   let currentHour=currentTime.getHours();
   let currentMinute=currentTime.getMinutes();
   let currentSecond=currentTime.getSeconds();

    currentMinute=(currentMinute<10?"0":"")+currentMinute;
    currentSecond=(currentSecond<10?"0":"")+currentSecond;
    

    currentHour= (currentHour>12) ? currentHour-12 : currentHour;
    currentHour= (currentHour==0) ? 12 : currentHour;
    currentHour=(currentHour<10?"0":"")+currentHour;

    let timeOfDay = (Hour<12) ? "AM" : "PM";

    let currentTimeStr= currentHour+ ":" + currentMinute+ ":" +currentSecond + " " + timeOfDay;

    document.getElementById("clock").innerHTML=currentTimeStr;
}