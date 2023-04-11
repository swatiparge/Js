$(document).ready(function () {
  let selectedItem = document.getElementById(
    "stakeholder-dropdown"
  ).value;
  alert(
    "You have selected the name - " +
      document.getElementById("stage-name").value
  );
  if (
    document.getElementById("stage-name").value == "Pre-Seed" &&
    selectedItem == "< 25"
  ) {
    document.getElementById("basic").style = "display: block;";
  } else {
    // alert("not working");
  }
  $(".selectVal, .selectVal1").change(function () {
    let selectedItem = document.getElementById(
      "stakeholder-dropdown"
    ).value;

    if (
      document.getElementById("stage-name").value == "Pre-Seed" &&
      selectedItem == "25 - 50"
    ) {
      document.getElementById("basic").style = "display: none;";
      document.getElementById("growth").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
      document.getElementById("starter").style = "display: block;";
    } else if (
      document.getElementById("stage-name").value == "Pre-Seed" &&
      selectedItem == "51 -100"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: block;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Pre-Seed" &&
      selectedItem == "101 -200"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: block;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Pre-Seed" &&
      selectedItem == "> 200"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: none;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: block;";
    } else if (
      document.getElementById("stage-name").value == "Seed" &&
      selectedItem == "< 25"
    ) {
      document.getElementById("growth").style = "display: none;";
      document.getElementById("basic").style = "display: block;";
      document.getElementById("enterprise").style = "display: none;";
      document.getElementById("starter").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Seed" &&
      selectedItem == "25 - 50"
    ) {
      document.getElementById("basic").style = "display: none;";
      document.getElementById("growth").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
      document.getElementById("starter").style = "display: block;";
    } else if (
      document.getElementById("stage-name").value == "Seed" &&
      selectedItem == "51 -100"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: block;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Seed" &&
      selectedItem == "101 -200"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: block;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Seed" &&
      selectedItem == "> 200"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: block;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Series A" &&
      selectedItem == "< 25"
    ) {
      document.getElementById("growth").style = "display: none;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
      document.getElementById("starter").style = "display: block;";
    } else if (
      document.getElementById("stage-name").value == "Series A" &&
      selectedItem == "25 - 50"
    ) {
      document.getElementById("basic").style = "display: none;";
      document.getElementById("growth").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
      document.getElementById("starter").style = "display: block;";
    } else if (
      document.getElementById("stage-name").value == "Series A" &&
      selectedItem == "51 -100"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: block;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Series A" &&
      selectedItem == "101 -200"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: block;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Series A" &&
      selectedItem == "> 200"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: none;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: block;";
    } else if (
      document.getElementById("stage-name").value == "Series B" &&
      selectedItem == "< 25"
    ) {
      document.getElementById("growth").style = "display: none;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
      document.getElementById("starter").style = "display: block;";
    } else if (
      document.getElementById("stage-name").value == "Series B" &&
      selectedItem == "25 - 50"
    ) {
      document.getElementById("basic").style = "display: none;";
      document.getElementById("growth").style = "display: block;";
      document.getElementById("enterprise").style = "display: none;";
      document.getElementById("starter").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Series B" &&
      selectedItem == "51 -100"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: block;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Series B" &&
      selectedItem == "101 -200"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: block;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Series B" &&
      selectedItem == "> 200"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: none;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: block;";
    } else if (
      document.getElementById("stage-name").value == "Late Stage Pre-IPO" &&
      selectedItem == "< 25"
    ) {
      document.getElementById("growth").style = "display: block;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: none;";
      document.getElementById("starter").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Late Stage Pre-IPO" &&
      selectedItem == "25 - 50"
    ) {
      document.getElementById("basic").style = "display: none;";
      document.getElementById("growth").style = "display: none;";
      document.getElementById("enterprise").style = "display: block;";
      document.getElementById("starter").style = "display: none;";
    } else if (
      document.getElementById("stage-name").value == "Late Stage Pre-IPO" &&
      selectedItem == "51 -100"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: none;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: block;";
    } else if (
      document.getElementById("stage-name").value == "Late Stage Pre-IPO" &&
      selectedItem == "101 -200"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: none;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: block;";
    } else if (
      document.getElementById("stage-name").value == "Late Stage Pre-IPO" &&
      selectedItem == "> 200"
    ) {
      document.getElementById("starter").style = "display: none;";
      document.getElementById("growth").style = "display: none;";
      document.getElementById("basic").style = "display: none;";
      document.getElementById("enterprise").style = "display: block;";
    }
  });
});
