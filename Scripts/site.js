
//make sure numbers are positive
var form = document.getElementById("shapeForm");

if (form) {
    form.addEventListener("submit", function (event) {

        //number input
        var numberInputs = document.querySelectorAll("input[type='number']");

        for (var i = 0; i < numberInputs.length; i++) {
            var value = numberInputs[i].value;

            // check that a number was actually entered and is positive
            if (value !== "" && Number(value) <= 0) {
                alert("Please enter only positive numbers.");
                event.preventDefault();
                return;
            }
        }
    });
}


// Results page logic
var params = new URLSearchParams(window.location.search);
var shape = params.get("shape");

// make sure there is a shape selected
if (shape !== null) {

    var resultsDiv = document.getElementById("results");
    var canvas = document.getElementById("shapeCanvas");
    var ctx = canvas.getContext("2d");

    var area = 0;
    var scale = 10;

    //Area of shapes and drawing them
    // rectangle
    if (shape === "rectangle") {
        var width = Number(params.get("width"));
        var height = Number(params.get("height"));

        area = width * height;

        resultsDiv.innerHTML =
            "<p><strong>Shape:</strong> Rectangle</p>" +
            "<p>Width: " + width + "</p>" +
            "<p>Height: " + height + "</p>";

        ctx.fillRect(20, 20, width * scale, height * scale);
    }

    // Circle
    else if (shape === "circle") {
        var radius = Number(params.get("radius"));

        area = Math.PI * radius * radius;

        resultsDiv.innerHTML =
            "<p><strong>Shape:</strong> Circle</p>" +
            "<p>Radius: " + radius + "</p>";

        ctx.beginPath();
        ctx.arc(150, 150, radius * scale, 0, Math.PI * 2);
        ctx.fill();
    }

    //triangle
    else if (shape === "triangle") {
        var base = Number(params.get("base"));
        var triHeight = Number(params.get("triHeight"));

        area = 0.5 * base * triHeight;

        resultsDiv.innerHTML =
            "<p><strong>Shape:</strong> Triangle</p>" +
            "<p>Base: " + base + "</p>" +
            "<p>Height: " + triHeight + "</p>";

        ctx.beginPath();
        ctx.moveTo(50, 250);
        ctx.lineTo(50 + base * scale, 250);
        ctx.lineTo(50, 250 - triHeight * scale);
        ctx.closePath();
        ctx.fill();
    }

    // display Area
    resultsDiv.innerHTML +=
        "<p><strong>Area:</strong> " + area.toFixed(2) + "</p>";
}
