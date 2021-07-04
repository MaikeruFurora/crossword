const words = ["slung", "lain", "gotten", "stung", "borne", "wrung"];
let next = $(".btn");
next.attr("disabled", true);
const slung = new Array(5);
$(".slung").on("input", function () {
  if ($(this).val()) {
    slung.splice($(this).attr("data-slung"), 1, $(this).val());
  } else {
    slung.splice($(this).attr("data-slung"), 1, $(this).val());
  }
  if (slung.length == slung.join("").length) {
    if (slung.join("").toLowerCase() == "slung") {
      $(".slung").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "slung" ? arr.splice(i, 1) : ""));
    } else {
      $(".slung").css("border", "1.2px solid red");
    }
  }
});

const borne = new Array(5);
$(".borne").on("input", function () {
  if ($(this).val()) {
    borne.splice($(this).attr("data-borne"), 1, $(this).val());
  } else {
    borne.splice($(this).attr("data-borne"), 1, $(this).val());
  }
  if (borne.length == borne.join("").length) {
    if (borne.join("").toLowerCase() == "borne") {
      $(".borne").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "borne" ? arr.splice(i, 1) : ""));
    } else {
      $(".borne").css("border", "1.2px solid red");
    }
  }
});

const lain = new Array(4);
$(".lain").on("input", function () {
  if ($(this).val()) {
    lain.splice($(this).attr("data-lain"), 1, $(this).val());
  } else {
    lain.splice($(this).attr("data-lain"), 1, $(this).val());
  }
  if (lain.length == lain.join("").length) {
    if (lain.join("").toLowerCase() == "lain") {
      $(".lain").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "lain" ? arr.splice(i, 1) : ""));
    } else {
      $(".lain").css("border", "1.2px solid red");
    }
  }
});

const gotten = new Array(6);
$(".gotten").on("input", function () {
  if ($(this).val()) {
    gotten.splice($(this).attr("data-gotten"), 1, $(this).val());
  } else {
    gotten.splice($(this).attr("data-gotten"), 1, $(this).val());
  }
  if (gotten.length == gotten.join("").length) {
    if (gotten.join("").toLowerCase() == "gotten") {
      $(".gotten").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "gotten" ? arr.splice(i, 1) : ""));
    } else {
      $(".gotten").css("border", "1.2px solid red");
    }
  }
});

const stung = new Array(5);
$(".stung").on("input", function () {
  if ($(this).val()) {
    stung.splice($(this).attr("data-stung"), 1, $(this).val());
  } else {
    stung.splice($(this).attr("data-stung"), 1, $(this).val());
  }
  if (stung.length == stung.join("").length) {
    if (stung.join("").toLowerCase() == "stung") {
      $(".stung").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "stung" ? arr.splice(i, 1) : ""));
    } else {
      $(".stung").css("border", "1.2px solid red");
    }
  }
});

const wrung = new Array(5);

$(".wrung").on("input", function (i) {
  if ($(this).val()) {
    wrung.splice($(this).attr("data-wrung"), 1, $(this).val());
  } else {
    wrung.splice($(this).attr("data-wrung"), 1, $(this).val());
  }

  if (wrung.length == wrung.join("").length) {
    if (wrung.join("").toLowerCase() == "wrung") {
      $(".wrung").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "wrung" ? arr.splice(i, 1) : ""));
    } else {
      $(".wrung").css("border", "1.2px solid red");
    }
  }
});
$("input").on("input", function (i) {
  console.log(words.length);
  if (words.length == 0) {
    $("#staticBackdrop").modal("show");
  }
});
