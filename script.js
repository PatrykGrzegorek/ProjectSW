var str;
var z;
var hero;
var home;
var swat;
var licznik = 0;
var time2;
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
   licznik++;
   if(licznik==10)
   {
      clearInterval(time2);
      document.getElementById("load").innerHTML = "";
      licznik=0;
      document.getElementById('hero').classList.remove('hidden');
      document.getElementById('hero').classList.add('col-sm-12 col-md-12 col-lg-12');

   }

}



var time = setInterval(function()
{
   console.log("Ładowanie");
   document.getElementById("load").innerHTML = "<i class='fab fa-galactic-republic'></i> Loading...";

},1000);

function bohaterowie(z)
{
   document.getElementById('hero').classList.add('hidden');
   time2 = setInterval(function()
   {
      console.log("ŁadowanieBOHATERA");
      document.getElementById("load").innerHTML = "<i class='fab fa-galactic-republic'></i> Loading...";

   },1000);

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