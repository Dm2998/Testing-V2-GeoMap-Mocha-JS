const assert = require('assert');                     // assert
const {Builder, By, Key, until} = require('selenium-webdriver');  // selenium-webdriver
const chrome = require('selenium-webdriver/chrome');  /// chrome
const options = new chrome.Options();                  // options
options.addArguments('--disable-dev-shm-usage');      // disable dev shm usage

describe('Geolocation', function() {      // test geo location
  let driver;                             //  driver 

  before(async function() {            // get the function before
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)                    // set chrome options
      .build();
  });
  //it is a test case to check if the map is displayed or not 
  it('should show a map based on the user\'s location', async function() {  // test the map  
    this.timeout(50000); // Increase the timeout         
    await driver.get('file:///C:/FinalVersionProject23/FinalVersionProject/public/index.html'); // get the index.html
    await driver.executeScript(`
      // Load the Google Maps API script                     
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBXyrN1uAnLUNoPdyXTa6RPoIKeL9bzz48&callback=initMap";
      document.head.appendChild(googleMapsScript);

      // Define the initMap function
      function initMap() {
        navigator.geolocation.getCurrentPosition(function(position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Use the lat and lng coordinates to show a map
          const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat, lng: lng},
            zoom: 8
          });
        });
      }
    `);                                 // execute the script
    const mapElement = await driver.findElement(By.id('map'));       // find the map
    const isDisplayed = await mapElement.isDisplayed(); // check if the map is displayed
    assert.ok(isDisplayed, 'The map should be displayed');       // assert the map is displayed
  });

  after(async function() {       // get the function after
    await driver.quit();          // quit the driver
  });
});                               // end of the test


