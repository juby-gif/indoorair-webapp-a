function onCreateClick() {
    window.location.href = "{% url 'i_create_page' %}";
}

function onBackClick() {
    window.location.href = "{% url 'dashboard_page' %}";
}

function onGetVersionClick() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const dataString = this.responseText;
            const dataObj = JSON.parse(dataString);

            var element = document.getElementById("getVersionId");
            element.innerHTML = dataObj.version;
        }
    }
    xhttp.open("GET","api/version", true);
    xhttp.send();
}
