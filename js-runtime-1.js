function printMessage() {
  console.log("2");
  setTimeout(function () {
    console.log("5");
  }, 5000);
  console.log("7");
  setTimeout(function () {
    console.log("0");
  }, 0);
}
// 2 7 0 5
printMessage();

/** JAVASCRIPT RUNTIME
 *
 * CALLSTACK                              CALLBACK QUEUE
 * **********************                 * ST-5, ST-0 *
 * *                    *
 * **********************
 * *  printMessage()    *
 * **********************
 * *  anonymus (window) *                 👀 EVENT LOOP
 * **********************
 *
 * **********************
 * *                    *
 * **********************
 * *                    *
 * **********************
 * *                    *
 * **********************
 * **/
