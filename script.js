var str;
var z;
var hero;
var home;
var swat;
function strony(str)
{

    for(var i=1; i<=str; i++)
    {
    document.getElementById('str').innerHTML +="<button type='button' class='btn-sm but'onclick='bohaterowie("+i+")'>"+i+"</button>";
    }
}
fetch('https://swapi.co/api/people/')
   .then(function(response){
      return response.json();
   })
   .then(function(jsonData){
      strony(Math.ceil(jsonData.count/10));
        clearInterval(time);
        document.getElementById("load").innerHTML = "";
});
function swiat(swat, hero)
{
   document.getElementById(hero).innerHTML +="<div class='planet'>"+"<i class='fas fa-globe'></i>"+swat+"</div>";

}
function hero(hero,home)
{


   document.getElementById('hero').innerHTML +="<div class='bbb col-sm-6 col-md-6 col-lg-6'><div class='boh' id='"+hero+"'>"+"<i class='fas fa-user'></i>"+hero+"</div></div>";

   fetch(home)
   .then(function(response){
       return response.json();
    })
    .then(function(jsonData){
       swiat(jsonData.name, hero)
      });
}

var time = setInterval(function()
{
   console.log("Ładowanie");
   document.getElementById("load").innerHTML = "<i class='fab fa-galactic-republic'></i> Loading...";

},1000);

function bohaterowie(z)
{
   document.getElementById('hero').innerHTML ="";
    fetch('https://swapi.co/api/people/?page='+z)
    .then(function(response){
        return response.json();
     })
     .then(function(jsonData){
        jsonData.results.forEach(function(item)
        {
            hero(item.name,item.homeworld);
     });
  });
}



