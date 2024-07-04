$(document).ready(function () {
  $("#my_name").focus();

  const menNames = [
    "Ahmed",
    "Mohamed",
    "Ali",
    "Omar",
    "Youssef",
    "Hassan",
    "Hussein",
    "Khaled",
    "Ibrahim",
    "Tarek",
    "Amr",
    "Mahmoud",
    "Mostafa",
    "Nabil",
    "Saad",
    "Walid",
    "Ziad",
    "Adel",
    "Bassem",
    "Rami",
  ];

  var myName =
    menNames[Math.floor(Math.random() * menNames.length)].toLowerCase();
  var nameArr = myName.split("");

  var counterValue = 0;
  var finalResult = "";

  $("#my_name").keydown(function (e) {
    const blockedKeys = [
      "Enter",
      " ",
      "Tab",
      "CapsLock",
      "Shift",
      "Escape",
      "Backspace",
      "Alt",
      "Control",
      "Meta",
    ];

    if (blockedKeys.includes(e.key)) {
      e.preventDefault();
    } else {
      var targetKey = e.key.toLowerCase();
      var currentCharIndex = finalResult.length;

      if (myName[currentCharIndex] === targetKey) {
        finalResult += targetKey;
        $(".target_name").append(targetKey);

        if (finalResult === myName) {
          $("#show_answer").css("display", "none");

          $("#my_name").attr("disabled", true);
          $(".result").text(
            `Good job! The name is ( ${finalResult} ). You did it in ${counterValue} attempts.`
          );
        }
      } else {
        counterValue++;
        $(".counter").text(`Counter: ${counterValue}`);
        if (counterValue >= 4) {
          $("#show_answer").css("display", "block");
        }
      }
      $("#my_name").val("");
    }
  });

  $("#show_answer").click(function () {
    $(".answer-container").css("display", "flex");
    $("#the_name").append(`The Name is : ${myName}`);
    $(this).css("display", "none");
  });
  $("#reset_btn").click(function () {
    location.reload();
  });
});
