const webdriver = require("selenium-webdriver");
const edge = require("selenium-webdriver/edge");

// Create a new Edge driver
const driver = new webdriver.Builder()
  .forBrowser("MicrosoftEdge")
  .setEdgeOptions(new edge.Options().addArguments("--headless"))
  .build();

// Navigate to the website to test
driver.get("http://localhost:5173/");

// Define a function to simulate user actions
const simulateUserActions = async () => {
//   const buttonElement = await driver.findElement(webdriver.By.id("my-button"));
//   buttonElement.click();
  const element1 = await driver.findElement(webdriver.By.id("text1"));
  await element1.sendKeys("Selenium");
  const element2 = await driver.findElement(webdriver.By.id("text2"));
  await element2.sendKeys("Selenium");
  const element3 = await driver.findElement(webdriver.By.id("text3"));
  await element3.sendKeys("Selenium");
  await element3.submit();
};

// Define a function to measure the page load time
const measurePageLoadTime = async () => {
  const startTime = new Date().getTime();
  await driver.wait(webdriver.until.titleIs("Selenium - Google Search"), 20000);
  const endTime = new Date().getTime();
  const pageLoadTime = endTime - startTime;
  console.log(`Page load time: ${pageLoadTime} ms`);
};

// Call the simulateUserActions function multiple times to simulate load
async function f() {
  for (let i = 0; i < 10; i++) {
    await simulateUserActions();
  }

  // Call the measurePageLoadTime function to measure the page load time
  await measurePageLoadTime();

  // Quit the driver
  await driver.quit();
}
f();
