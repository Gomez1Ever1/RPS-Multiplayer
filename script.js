$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyCA-BG7ZwadG7rEEX5ulh0g_N2m_qe0j4g",
        authDomain: "rps-challenge-bb5d3.firebaseapp.com",
        databaseURL: "https://rps-challenge-bb5d3.firebaseio.com",
        projectId: "rps-challenge-bb5d3",
        storageBucket: "rps-challenge-bb5d3.appspot.com",
        messagingSenderId: "219693200186",
        appId: "1:219693200186:web:235b34265b8332f43f9603",
        measurementId: "G-4YJWS7B46P"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    function appendInputs() {
        trainSched = $("<tr>")
            .attr("id", "newTR");
        for (var params in objInputs) {
            var newTd = $("<td>")
                .text($(params));
            $("#newTR").append(newTd);
        };
        $("#newTrainInfo").append(trainSched);
    }
    var objInputs = ({
        train: userTrain,
        dest: destination1,
        frequency: frequency1,
        next: nextArrival

    });
    database.ref().push({
        userTrain: userTrain,
        destination1: destination1,
        frequency1: frequency1,
        nextArrival: nextArrival,
        trainSched: trainSched
    });
    var userTrain = $("#userTrain").val().trim();
    var destination1 = $("#destination1").val().trim();
    var frequency1 = $("#frequency1").val().trim();
    var nextArrival = $("#nextTrain").val().trim();
    //database.on(childSnapshot)
    function varInputs() {

        console.log(userTrain)
    }
    $(document).on("click", "#btnSubmit", function () {

        varInputs();
        appendInputs();
        console.log("works")
    })
})