var cityContainer = document.getElementById("city-info");
var button = document.getElementById("btn");

button.addEventListener("click", displayCitiesInfo);

function displayCitiesInfo() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://github.com/zf-2022/zf-2022.github.io/blob/main/week4/cities1.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);
        renderHTML(ourData);
    };

    ourRequest.send();
};

function renderHTML(data) {
    var htmlString = "this is a test";
    cityContainer.insertAdjacentHTML('beforeend', htmlString);
}

