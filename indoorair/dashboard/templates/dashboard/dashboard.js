function onDashboardClick() {
  const temp = document.getElementById("temp").value;
  console.log(temp);
  const co2 = document.getElementById("co2").value;
  console.log(co2);
  const tvoc = document.getElementById("tvoc").value;
  console.log(tvoc);
  const humid = document.getElementById("humid").value;
  console.log(humid);
  const press = document.getElementById("pres").value;
  console.log(press);

  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) { // This is the callback function
         // Get the string data that the server sent us.
         if (this.readyState == 4 && this.status == 200) {
           data = JSON.parse(this.responseText);
           document.getElementById('temp_avg').innerHTML =data.temp_avg;
           document.getElementById('press_avg').innerHTML = data.press_avg;
           document.getElementById('co2_avg').innerHTML = data.co2_avg;
           document.getElementById('tvoc_avg').innerHTML = data.tvoc_avg;
           document.getElementById('humid_avg').innerHTML = data.humid_avg;
         }
       }
     }
       xhttp.open('POST', "{% url 'dashboard_api' %}", true);
       xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
       xhttp.send("&temp_avg="+temp+"&press_avg="+press+"&co2_avg="+co2+"&tvoc_avg="+tvoc+"&humid_avg="+humid);

}
