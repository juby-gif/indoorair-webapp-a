function onGetDashboard() {
  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) { // This is the callback function
         // Get the string data that the server sent us.
         if (this.readyState == 4 && this.status == 200) {
           data = JSON.parse(this.responseText);
           document.getElementById('temp_avg').innerHTML =data.avg_temp;
           document.getElementById('press_avg').innerHTML = data.avg_press;
           document.getElementById('co2_avg').innerHTML = data.avg_co2;
           document.getElementById('tvoc_avg').innerHTML = data.avg_tvoc;
           document.getElementById('humid_avg').innerHTML = data.avg_humid;
         }
       }
     }
       xhttp.open('POST', "{% url 'dashboard_api' %}", true);
       xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
       xhttp.send();

}
onGetDashboard()
