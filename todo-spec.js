describe("Test the juliemr website", function(){

it("it should be equal to 10", function(){

browser.get("https://juliemr.github.io/protractor-demo/");
browser.driver.manage().window().maximize();
element(by.model("first")).sendKeys("5");
element(by.model("second")).sendKeys("5");
element(by.id("gobutton")).click();




})

})