const words = ["simple", "sentence", "complex", "compound"];
let next = $(".btn");
next.attr("disabled", true);
const simple = new Array(6);
const flag = [];
$(".simple").on("input", function () {
  if ($(this).val()) {
    simple.splice($(this).attr("data-simple"), 1, $(this).val());
  } else {
    simple.splice($(this).attr("data-simple"), 1, $(this).val());
  }
  $(this).prevAll(".simple").focus();
  if (simple.length == simple.join("").length) {
    if (simple.join("").toLowerCase() == "simple") {
      $(".simple").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "simple" ? arr.splice(i, 1) : ""));
    } else {
      $(".simple").css("border", "1.2px solid red");
    }
  }
});

const complex = new Array(7);

$(".complex").on("input", function (i) {
  if ($(this).val()) {
    complex.splice($(this).attr("data-complex"), 1, $(this).val());
  } else {
    complex.splice($(this).attr("data-complex"), 1, $(this).val());
  }

  if (complex.length == complex.join("").length) {
    if (complex.join("").toLowerCase() == "complex") {
      $(".complex").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "complex" ? arr.splice(i, 1) : ""));
    } else {
      $(".complex").css("border", "1.2px solid red");
    }
  }
});

const compound = new Array(8);
$(".compound").on("input", function (i) {
  if ($(this).val()) {
    compound.splice($(this).attr("data-compound"), 1, $(this).val());
  } else {
    compound.splice($(this).attr("data-compound"), 1, $(this).val());
  }
  //   $(this).attr()
  if (compound.length == compound.join("").length) {
    if (compound.join("").toLowerCase() == "compound") {
      $(".compound").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "compound" ? arr.splice(i, 1) : ""));
    } else {
      $(".compound").css("border", "1.2px solid red");
    }
  }
});

const sentence = new Array(8);
$(".sentence").on("input", function (i) {
  if ($(this).val()) {
    sentence.splice($(this).attr("data-sentence"), 1, $(this).val());
  } else {
    sentence.splice($(this).attr("data-sentence"), 1, $(this).val());
  }
  //   $(this).attr()
  if (sentence.length == sentence.join("").length) {
    if (sentence.join("").toLowerCase() == "sentence") {
      $(".sentence").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "sentence" ? arr.splice(i, 1) : ""));
    } else {
      $(".sentence").css("border", "1.2px solid red");
    }
  }
});

$("input").on("input", function (i) {
  console.log(words.length);
  next.attr("disabled", words.length != 0 ? true : false);
});
