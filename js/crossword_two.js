const words = ["anybody", "these", "that", "each", "those"];
let next = $(".btn");
next.attr("disabled", true);
const anybody = new Array(7);
const flag = [];
$(".anybody").on("input", function () {
  if ($(this).val()) {
    anybody.splice($(this).attr("data-anybody"), 1, $(this).val());
  } else {
    anybody.splice($(this).attr("data-anybody"), 1, $(this).val());
  }
  if (anybody.length == anybody.join("").length) {
    if (anybody.join("").toLowerCase() == "anybody") {
      $(".anybody").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "anybody" ? arr.splice(i, 1) : ""));
    } else {
      $(".anybody").css("border", "1.2px solid red");
    }
  }
});

const that = new Array(4);

$(".that").on("input", function (i) {
  if ($(this).val()) {
    that.splice($(this).attr("data-that"), 1, $(this).val());
  } else {
    that.splice($(this).attr("data-that"), 1, $(this).val());
  }

  if (that.length == that.join("").length) {
    if (that.join("").toLowerCase() == "that") {
      $(".that").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "that" ? arr.splice(i, 1) : ""));
    } else {
      $(".that").css("border", "1.2px solid red");
    }
  }
});

const these = new Array(5);

$(".these").on("input", function (i) {
  if ($(this).val()) {
    these.splice($(this).attr("data-these"), 1, $(this).val());
  } else {
    these.splice($(this).attr("data-these"), 1, $(this).val());
  }

  if (these.length == these.join("").length) {
    if (these.join("").toLowerCase() == "these") {
      $(".these").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "these" ? arr.splice(i, 1) : ""));
    } else {
      $(".these").css("border", "1.2px solid red");
    }
  }
});

const each = new Array(4);

$(".each").on("input", function (i) {
  if ($(this).val()) {
    each.splice($(this).attr("data-each"), 1, $(this).val());
  } else {
    each.splice($(this).attr("data-each"), 1, $(this).val());
  }

  if (each.length == each.join("").length) {
    if (each.join("").toLowerCase() == "each") {
      $(".each").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "each" ? arr.splice(i, 1) : ""));
    } else {
      $(".each").css("border", "1.2px solid red");
    }
  }
});

const those = new Array(5);

$(".those").on("input", function (i) {
  if ($(this).val()) {
    those.splice($(this).attr("data-those"), 1, $(this).val());
  } else {
    those.splice($(this).attr("data-those"), 1, $(this).val());
  }

  if (those.length == those.join("").length) {
    if (those.join("").toLowerCase() == "those") {
      $(".those").css("border", "1.2px solid green");
      words.find((val, i, arr) => (val == "those" ? arr.splice(i, 1) : ""));
    } else {
      $(".those").css("border", "1.2px solid red");
    }
  }
});

$("input").on("input", function (i) {
  console.log(words.length);
  next.attr("disabled", words.length != 0 ? true : false);
});
