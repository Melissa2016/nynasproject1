

'use strict';
/*
var weatherData = [
    {
        time: "09:00",
        weather: "Moln",
        temp: "16C°",
        wind: "3m/s",
    },
    {
        time: "12:00",
        weather: "Sol",
        temp: "18C°",
        wind: "4m/s",
    },
    {
        time: "15:00",
        weather: "Sol",
        temp: "20C°",
        wind: "2m/s",
    },
    {
        time: "18:00",
        weather: "Regn",
        temp: "19C°",
        wind: "3m/s",
    },

    {
        time: "21:00",
        weather: "Moln",
        temp: "17C°",
        wind: "1m/s",
    },
]


var tbody= document.getElementById("weather-data");
for(var i=0;i<weatherData.length;i++){
    var tr = document.createElement('tr');
    var timestamp = `
        <td>${weatherData[i].time}</td>
        <td>${weatherData[i].weather}</td>
        <td>${weatherData[i].temp}</td>
        <td>${weatherData[i].wind}</td>
    `;  
    tr.innerHTML = timestamp;
    
    tbody.appendChild(tr);
}
*/
//console.log( weatherData[1]);



//console.log( tågdata[0]);




var tågdata = [
    {
        nr: "42",
        avgång: "10:25",
        ankommer: "11:23",
       
    },
    {
        nr: "43",
        avgång: "11:25",
        ankommer: "12:23",
           
        },
        {
            nr: "42x",
             avgång: "12:25",
                ankommer: "13:23",
               
            },
   
]
/*   */

var trainBody = document.getElementById("tåg");   
function createTrainTable(){

for( var i = 0;i < tågdata.length;i++){
  
    var tr = document.createElement('tr');
    var timestamp = `
        <td>${tågdata [i].nr}</td>
        <td>${tågdata [i].avgång}</td>
        <td>${tågdata [i].ankommer}</td>
       
    `   
    tr.innerHTML += timestamp;
    trainBody.appendChild(tr);
}




}



var nameInput = document.getElementById('Input');
var nameOutput = document.getElementById('outputcity');
var submitButton = document.getElementById('bsubmit');




submitButton.addEventListener('click', (event) => {
   

    var name = nameInput.value;
    nameOutput.innerHTML = name;
    

/*
    var tbody1= document.getElementById("tåg");

    if (tbody1.childElementCount!= 0) {
        var parent = document.getElementById("tågTable");
        var child = document.getElementById("tåg");
        parent.removeChild(child);
    }*/
    trainBody.innerHTML="";
    createTrainTable();

  nameOutput.style.backgroundColor = "green";
  nameOutput.style.color = "white";
  // reload page när du klickar på knappen sök
  event.preventDefault();
});



    


    var weatherTbody = document.getElementById("weather-data");
    //weatherTbody.innerHTML="";
    var response;
   
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
    if(this.readyState === 4){
     if(this.status === 200){
       response = JSON.parse(this.response);
      
     console.log(response);
     var weatherList = response.list;
     ourData( weatherList);

     }
     }
    }
    var city = 'London';
    var apikey = '051c1eb9609e3ee008785295157b75e7';
    ajax.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=' + city +
    '&APPID=' + apikey, true);
    ajax.send();
    
   
 function ourData( data){
    var wetherInf= [
        {Klocka:"", Väder:"", Värme:"" , Vind:""},
        {Klocka:"", Väder:"", Värme:"" , Vind:""},
        {Klocka:"", Väder:"", Värme:"" , Vind:""},
        {Klocka:"", Väder:"", Värme:"" , Vind:""},
        {Klocka:"", Väder:"", Värme:"" , Vind:""},
       
    ]

   
    



    function temperatureConverter(valNum) {
        valNum = parseFloat(valNum);
        var  val = Number((valNum-32) / 1.8);
        console.log(val);
         return val; 
     } 

        for(var index = 0; index < 5; index++){
            var weatherinf = {};
            //for (var i=0;i<wetherInf.length;i++){
          
            var time = data[index].dt_txt;
          
            var date = new Date(time);
      
            wetherInf.Klocka = date.getHours() + ":00";
           // console.log(    wetherInf[i].Klocka);
            
            
            var  weather1 =data[index].weather[0].main;
            console.log(weather1);
            var  weath =temperatureConverter(weather1);
            wetherInf.Väder= weather1;
 
            var temp=data[index].main.temp;
            wetherInf.Värme=temp;

            var speed= data[index].wind.speed;
 
            wetherInf.Vind=speed;

       
            var tr = document.createElement('tr');
            var timestamp = `
              <tr>
                <td>${ wetherInf.Klocka }</td>
                <td>${ wetherInf.Väder}</td>
                <td>${ wetherInf.Värme}</td>
                <td>${ wetherInf.Vind}</td>
              </tr>
            `;


            
            weatherTbody.innerHTML += timestamp;
           // console.log(wetherInf[1].Klocka);
        //} 
    }}
  
    
   
    
    
