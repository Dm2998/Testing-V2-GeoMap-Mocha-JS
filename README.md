# Testing-V2-GeoMap-Mocha-JS
Testing_bike_Rental_Project_Mocha_JavaScript.

This code verifies that certain elements are present on the page or performs specific actions on the Rental Bike website.
Analyze the results: Examine the output of the test code and determine if the test passed or failed.
Report Results: Document the results of the test, it includes all the code implemented, and  can also see that the test resulted in a pass test.

![Screenshot 2023-04-25 123221](https://user-images.githubusercontent.com/114578666/235265960-25f1ce42-c050-4f24-b738-cfc728eaacff.png)


```
Update Selenium Webdriver:
It seems like your Selenium Webdriver version might be outdated. Try updating it to the latest version by running the following command:

npm install selenium-webdriver@latest


Check Chromedriver Compatibility:
Ensure that your installed Chromedriver version is compatible with your Chrome browser. You can manually download the Chromedriver executable from the official Chromedriver download page and replace the existing Chromedriver executable in your project's node_modules/selenium-webdriver/chrome directory.


npm install -g chromedriver


Specify Chromedriver Version:
If the issue persists, you can try specifying the Chromedriver version in your package.json file. Add the following line:
You can find the available versions on the npm Chromedriver page.

npm install chromedriver

npm test

```

<br>

```

 Let's go through the steps to resolve this issue:

Check package.json for "scripts" section:
Open your package.json file and make sure, it contains a "Scripts" section. If it doesn't exist, add it:

json
"scripts": {
  "start": "your-start-command-here"
}
Replace "your-start-command-here" with the actual command, you want to run when you start your project.

Verify npm version:
Ensure you have a recent version of npm installed. Run the following command to check your npm version:

bash
npm -v
If your npm version is outdated, you can update it using:

bash
npm install -g npm@latest
Install dependencies:
If you recently created the project or Cloned it from a repository, make sure to install the dependencies. Run the following command in your project directory:

bash
npm install



This will install the dependencies specified in your package.json.

Check for typos:
Ensure there are no typos in the script name or in the command. The script name is case-sensitive, so make sure it's exactly "start" in lowercase.
```

```
├── chai@4.3.7
├── chromedriver@112.0.0
├── license.js@3.1.2
├── mocha@10.2.0
└── selenium-webdriver@4.9.0

```
<br>
#Example Js Mocha
```
Run the Tests:
Execute the tests using the Mocha test runner:
```
npx mocha your_test_script.js
```

#Explanation of Selenium Methods:

-driver.get(url): Navigates to the specified URL.
-driver.findElement(By.locator): Finds the first element matching the given locator strategy.
-sendKeys(keys): Types the specified keys into the element.
-click(): Clicks the element.
-getText(): Gets the visible text of the element.
-assert.strictEqual(actual, expected): Asserts that the actual value is strictly equal to the expected value.

```
