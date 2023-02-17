const autocannon = require("autocannon");

const instance = autocannon({
  url: "http://localhost:5173",
  connections: 10, // number of concurrent connections
  duration: 10, // duration of the test in seconds
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    text: "Some text ~~",
    day: "2022 - 01- 01",
    reminder: true,
  }), // request body
});

autocannon.track(instance, { renderProgressBar: true });

instance.on("done", (result) => {
  console.log(result);
});
