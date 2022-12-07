const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Resuelta");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Resuelta");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Resuelta");
  }, 5000);
});

const promises = [p1, p2, p3];

Promise.any(promises)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
