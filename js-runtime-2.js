function moreJavascriptRuntime() {
  console.log("8");
  Promise.resolve("3").then(function (value) {
    console.log(value);
  });
  setTimeout(function () {
    console.log("2");
  }, 0);
  Promise.resolve("9").then(function (response) {
    console.log(response);
  });
  console.log("5");
}

moreJavascriptRuntime();
