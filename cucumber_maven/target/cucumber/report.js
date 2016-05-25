$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("github_login.feature");
formatter.feature({
  "line": 1,
  "name": "github login",
  "description": "",
  "id": "github-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login without username and password",
  "description": "",
  "id": "github-login;login-without-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on github homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginSD.user_is_on_github_homepage()"
});
formatter.result({
  "duration": 296083867,
  "error_message": "org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: VISTA\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Dan-PC\u0027, ip: \u0027192.168.219.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:72)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:59)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:55)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.cucumber.Selenium.SeleniumFunctions.createDriver(SeleniumFunctions.java:21)\r\n\tat com.cucumber.StepDefinitions.GithubLoginSD.user_is_on_github_homepage(GithubLoginSD.java:16)\r\n\tat ✽.Given user is on github homepage(github_login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GithubLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginSD.user_is_displayed_login_screen()"
});
formatter.result({
  "status": "skipped"
});
});