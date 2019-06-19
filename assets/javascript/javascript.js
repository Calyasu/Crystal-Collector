// Global Variables
var drkAether;
var drgAether;
var ninAether;
var samAether;
var goalAether;
var totalAether;
var win = 0;
var loseAlert = ["Who needs a lost count when you're a winner at heart",
    "Going too far buddy",
    "Are you even trying",
    "No lose count so you can feel good about yourself",
    "All you do is WIN WIN WIN no matter WHAT"]
var rand ;




$(document).ready(function () {
    resetGame();
    $("#drk").on("click", function () {
        totalAether += drkAether;
        console.log("Sum of Darkness: " + totalAether);
        if (totalAether < goalAether) {

            $("#currentAether").text(totalAether);
            return totalAether;
        } else if (totalAether === goalAether) {
            alert("You Win!!!!");
            win++;
            resetGame();
            $("#currentAether").text(totalAether);

        } else {
            alert(rand= loseAlert[Math.floor(Math.random() * loseAlert.length)]);
            $("#currentAether").text(totalAether);

            resetGame();
        }

    });

    $("#drg").on("click", function () {

        totalAether += drgAether;
        console.log("Sum of Dragon Blood: " + totalAether);
        if (totalAether < goalAether) {
            $("#currentAether").text(totalAether);
            return totalAether;
        } else if (totalAether === goalAether) {
            alert("You Win!!!!");
            win++;
            $("#currentAether").text(totalAether);

            resetGame();
        } else {
            alert(rand= loseAlert[Math.floor(Math.random() * loseAlert.length)]);
            $("#currentAether").text(totalAether);

            resetGame();
        }
    });

    $("#nin").on("click", function () {

        totalAether += ninAether;
        console.log("Sum of Ninki: " + totalAether);
        if (totalAether < goalAether) {
            $("#currentAether").text(totalAether);
            return totalAether;
        } else if (totalAether === goalAether) {
            alert("You Win!!!!");
            win++;
            $("#currentAether").text(totalAether);

            resetGame();
        } else {
            alert(rand= loseAlert[Math.floor(Math.random() * loseAlert.length)]);
            $("#currentAether").text(totalAether);

            resetGame();
        }
    });

    $("#sam").on("click", function () {

        totalAether += samAether;
        console.log("Sum of Kenki: " + totalAether);
        if (totalAether < goalAether) {

            $("#currentAether").text(totalAether);
            return totalAether;
        } else if (totalAether === goalAether) {
            alert("You Win!!!!");
            win++;
            $("#currentAether").text(totalAether);
            resetGame();
        } else {
            alert(rand= loseAlert[Math.floor(Math.random() * loseAlert.length)]);
            resetGame();
        }
    });


    function resetGame() {
        drkAether = Math.floor(Math.random() * 12) + 1;
        drgAether = Math.floor(Math.random() * 12) + 1;
        ninAether = Math.floor(Math.random() * 12) + 1;
        samAether = Math.floor(Math.random() * 12) + 1;
        goalAether = Math.floor(Math.random() * 120) + 9;
        totalAether = 0;
        $("#aetherflow").text(goalAether);
        $("#win-count").text(win);

    }

});