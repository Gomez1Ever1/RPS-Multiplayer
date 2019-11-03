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
        for (let i = 0; i < 4; i++) {
            var newTd = $("<td>");
            $("#newTR").append(newTd);
        }
        $("#newTrainInfo").append(trainSched);
    }
    var arrInputs = [];
    function varInputs() {
        userTrain = $("#userTrain").val();
        destination1 = $("#destination1").val();
        firstTrain = $("#firstTrain").val();
        frequency1 = $("#frequency1").val();
        arrInputs.push(userTrain, destination1, firstTrain, frequency1);
        console.log(arrInputs)
    }
    $(document).on("click", "#btnSubmit", function () {
        database.ref().set({
            userTrain: userTrainV,
            destination1: destination1V,
            firstTrain: firstTrainV,
            frequency1: frequency1V,
            trainSched: trainSched
        });
        varInputs();
        appendInputs();
        console.log("works")
    })
})


