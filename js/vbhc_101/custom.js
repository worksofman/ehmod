function go(loc) {
  document.getElementById("figma").src = loc;
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("bar-1").classList.add("bar-50");
    document.getElementById("bar-1").classList.remove("bar-100");
    document.getElementById("eta-1").classList.add("hidden");
  }, 7000);
});

function clickPart1() {
  document.getElementById("bar-1").classList.add("bar-50");
  document.getElementById("bar-1").classList.remove("bar-100");
  document.getElementById("bar-2").classList.remove("bar-100");
  document.getElementById("bar-2").classList.remove("bar-50");
  document.getElementById("bar-3").classList.remove("bar-100");
  document.getElementById("bar-3").classList.remove("bar-50");
  document.getElementById("bar-4").classList.remove("bar-100");
  document.getElementById("bar-4").classList.remove("bar-50");
  document.getElementById("bar-5").classList.remove("bar-100");
  document.getElementById("bar-5").classList.remove("bar-50");

  document.getElementById("eta-1").classList.add("hidden");
  document.getElementById("eta-2").classList.remove("hidden");
  document.getElementById("eta-3").classList.remove("hidden");
  document.getElementById("eta-4").classList.remove("hidden");
  document.getElementById("eta-5").classList.remove("hidden");
}

function clickPart2() {
  document.getElementById("bar-1").classList.add("bar-100");
  document.getElementById("bar-1").classList.remove("bar-50");
  document.getElementById("bar-2").classList.add("bar-50");
  document.getElementById("bar-2").classList.remove("bar-100");
  document.getElementById("bar-3").classList.remove("bar-100");
  document.getElementById("bar-3").classList.remove("bar-50");
  document.getElementById("bar-4").classList.remove("bar-100");
  document.getElementById("bar-4").classList.remove("bar-50");
  document.getElementById("bar-5").classList.remove("bar-100");
  document.getElementById("bar-5").classList.remove("bar-50");

  document.getElementById("eta-1").classList.add("hidden");
  document.getElementById("eta-2").classList.add("hidden");
  document.getElementById("eta-3").classList.remove("hidden");
  document.getElementById("eta-4").classList.remove("hidden");
  document.getElementById("eta-5").classList.remove("hidden");
}

function clickPart3() {
  document.getElementById("bar-1").classList.add("bar-100");
  document.getElementById("bar-1").classList.remove("bar-50");
  document.getElementById("bar-2").classList.add("bar-100");
  document.getElementById("bar-2").classList.remove("bar-50");
  document.getElementById("bar-3").classList.remove("bar-100");
  document.getElementById("bar-3").classList.add("bar-50");
  document.getElementById("bar-4").classList.remove("bar-100");
  document.getElementById("bar-4").classList.remove("bar-50");
  document.getElementById("bar-5").classList.remove("bar-100");
  document.getElementById("bar-5").classList.remove("bar-50");

  document.getElementById("eta-1").classList.add("hidden");
  document.getElementById("eta-2").classList.add("hidden");
  document.getElementById("eta-3").classList.add("hidden");
  document.getElementById("eta-4").classList.remove("hidden");
  document.getElementById("eta-5").classList.remove("hidden");
}

function clickPart4() {
  document.getElementById("bar-1").classList.add("bar-100");
  document.getElementById("bar-1").classList.remove("bar-50");
  document.getElementById("bar-2").classList.add("bar-100");
  document.getElementById("bar-2").classList.remove("bar-50");
  document.getElementById("bar-3").classList.add("bar-100");
  document.getElementById("bar-3").classList.remove("bar-50");
  document.getElementById("bar-4").classList.remove("bar-100");
  document.getElementById("bar-4").classList.add("bar-50");
  document.getElementById("bar-5").classList.remove("bar-100");
  document.getElementById("bar-5").classList.remove("bar-50");

  document.getElementById("eta-1").classList.add("hidden");
  document.getElementById("eta-2").classList.add("hidden");
  document.getElementById("eta-3").classList.add("hidden");
  document.getElementById("eta-4").classList.add("hidden");
  document.getElementById("eta-5").classList.remove("hidden");
}

function clickPart5() {
  document.getElementById("bar-1").classList.add("bar-100");
  document.getElementById("bar-1").classList.remove("bar-50");
  document.getElementById("bar-2").classList.add("bar-100");
  document.getElementById("bar-2").classList.remove("bar-50");
  document.getElementById("bar-3").classList.add("bar-100");
  document.getElementById("bar-3").classList.remove("bar-50");
  document.getElementById("bar-4").classList.add("bar-100");
  document.getElementById("bar-4").classList.remove("bar-50");
  document.getElementById("bar-5").classList.remove("bar-100");
  document.getElementById("bar-5").classList.add("bar-50");

  document.getElementById("eta-1").classList.add("hidden");
  document.getElementById("eta-2").classList.add("hidden");
  document.getElementById("eta-3").classList.add("hidden");
  document.getElementById("eta-4").classList.add("hidden");
  document.getElementById("eta-5").classList.add("hidden");
}
