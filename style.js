//Current day display variables
var currentDayEl = $("currentDay")
var currentDate = moment().format("dddd, DD MMMM YYYY")
var currentTime = moment().format("HH:mm:ss")

//Current day & time display write to HTML
$("#currentDay").html("Date: " + currentDate);
$("#currentTime").html("Current Time: " + currentTime);

//Row color change... Goes to grey when its past, green in the future and red in the present.
//d3 = grey, 77 = green, 61 = red, 
if (currentTime > "09:59:59") {
    //grey
    $("#0900-row").css("background-color", "#d3d3d3");
    //green
} else if (currentTime < "09") {
    $("#0900-row").css("background-color", "#77dd77");
    //red
} else if (currentTime >= "09" || currentTime <= "09:59:59") {
    $("#0900-row").css("background-color", "#ff6961");
}

if (currentTime > "10:59:59") {
    $("#1000-row").css("background-color", "#d3d3d3");
} else if (currentTime < "10") {
    $("#1000-row").css("background-color", "#77dd77");
} else if (currentTime >= "10" || currentTime <= "10:59:59") {
    $("#1000-row").css("background-color", "#ff6961");
}

if (currentTime > "11:59:59") {
    $("#1100-row").css("background-color", "#d3d3d3");
} else if (currentTime < "11") {
    $("#1100-row").css("background-color", "#77dd77");
} else if (currentTime >= "11" || currentTime <= "11:59:59") {
    $("#1100-row").css("background-color", "#ff6961");
}

if (currentTime > "12:59:59") {
    $("#1200-row").css("background-color", "#d3d3d3");
} else if (currentTime < "12") {
    $("#1200-row").css("background-color", "#77dd77");
} else if (currentTime >= "12" || currentTime <= "12:59:59") {
    $("#1200-row").css("background-color", "#ff6961");
}

if (currentTime > "13:59:59") {
    $("#1300-row").css("background-color", "#d3d3d3");
} else if (currentTime < "13") {
    $("#1300-row").css("background-color", "#77dd77");
} else if (currentTime >= "13" || currentTime <= "13:59:59") {
    $("#1300-row").css("background-color", "#ff6961");
}

if (currentTime > "14:59:59") {
    $("#1400-row").css("background-color", "#d3d3d3");
} else if (currentTime < "14") {
    $("#1400-row").css("background-color", "#77dd77");
} else if (currentTime >= "14" || currentTime <= "14:59:59") {
    $("#1400-row").css("background-color", "#ff6961");
}

if (currentTime > "15:59:59") {
    $("#1500-row").css("background-color", "#d3d3d3");
} else if (currentTime < "15") {
    $("#1500-row").css("background-color", "#77dd77");
} else if (currentTime >= "15" || currentTime <= "15:59:59") {
    $("#1500-row").css("background-color", "#ff6961");
}

if (currentTime > "16:59:59") {
    $("#1600-row").css("background-color", "#d3d3d3");
} else if (currentTime < "16") {
    $("#1600-row").css("background-color", "#77dd77");
} else if (currentTime >= "16" || currentTime <= "16:59:59") {
    $("#1600-row").css("background-color", "#ff6961");
}

if (currentTime > "17:59:59") {
    $("#1700-row").css("background-color", "#d3d3d3");
} else if (currentTime < "17") {
    $("#1700-row").css("background-color", "#77dd77");
} else if (currentTime >= "17" || currentTime <= "17:59:59") {
    $("#1700-row").css("background-color", "#ff6961");
}

//Click events
$(".save-button").on("click", function (event) {
    var buttonClicked = event.target.getAttribute("id");
    var textAreaSelected = $(`#${buttonClicked}`).parent().prev().children();
    var textAreaValue = textAreaSelected.val();
    console.log(textAreaValue);

    console.log(textAreaSelected);

})


function saveToLocalStorage(textAreaValue, timeBlock) {
    var previousTextAreaValue = JSON.parse(localStorage.getItem("text area values")) || {};
    previousTextAreaValue[timeBlock] = "Hi World"


    localStorage.setItem("text area values", JSON.stringify(previousTextAreaValue))
    console.log(previousTextAreaValue);

}

saveToLocalStorage();

//Click events
// $("#0900-save-button").on("click", function () {
//     var nineTextBox = $("textarea#0900-text-area").val();
//     localStorage.setItem("0900", nineTextBox);
// });

// $("#1000-save-button").on("click", function () {
//     var tenTextBox = $("textarea#1000-text-area").val();
//     localStorage.setItem("1000", tenTextBox);
// });

// $("#1100-save-button").on("click", function () {
//     var elevenTextBox = $("textarea#1100-text-area").val();
//     localStorage.setItem("1100", elevenTextBox);
// });

// $("#1200-save-button").on("click", function () {
//     var twelveTextBox = $("textarea#1200-text-area").val();
//     localStorage.setItem("1200", twelveTextBox);
// });

// $("#1300-save-button").on("click", function () {
//     var thirteenTextBox = $("textarea#1300-text-area").val();
//     localStorage.setItem("1300", thirteenTextBox);
// });

// $("#1400-save-button").on("click", function () {
//     var fourteenTextBox = $("textarea#1400-text-area").val();
//     localStorage.setItem("1400", fourteenTextBox);
// });

// $("#1500-save-button").on("click", function () {
//     var fifteenTextBox = $("textarea#1500-text-area").val();
//     localStorage.setItem("1500", fifteenTextBox);
// });

// $("#1600-save-button").on("click", function () {
//     var sixteenTextBox = $("textarea#1600-text-area").val();
//     localStorage.setItem("1600", sixteenTextBox);
// });

// $("#1700-save-button").on("click", function () {
//     var seventeenTextBox = $("textarea#1700-text-area").val();
//     localStorage.setItem("1700", seventeenTextBox);

// });


//Pull from local storage and display in text area
function getItemsFromStorage() {
    var nineDisplay = localStorage.getItem("0900");
    $("textarea#0900-text-area").html(nineDisplay);

    var tenDisplay = localStorage.getItem("1000");
    $("textarea#1000-text-area").html(tenDisplay);

    var elevenDisplay = localStorage.getItem("1100");
    $("textarea#1100-text-area").html(elevenDisplay);

    var twelveDisplay = localStorage.getItem("1200");
    $("textarea#1200-text-area").html(twelveDisplay);

    var thirteenDisplay = localStorage.getItem("1300");
    $("textarea#1300-text-area").html(thirteenDisplay);

    var fourteenDisplay = localStorage.getItem("1400");
    $("textarea#1400-text-area").html(fourteenDisplay);

    var fifteenDisplay = localStorage.getItem("1500");
    $("textarea#1500-text-area").html(fifteenDisplay);

    var sixteenDisplay = localStorage.getItem("1600");
    $("textarea#1600-text-area").html(sixteenDisplay);

    var seventeenDisplay = localStorage.getItem("1700");
    $("textarea#1700-text-area").html(seventeenDisplay);
}

getItemsFromStorage();