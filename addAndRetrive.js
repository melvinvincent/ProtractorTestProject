describe("Test the juliemr website", function () {
    function add(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }

    it("Add and retrieve text from UI", function () {

        browser.get("https://juliemr.github.io/protractor-demo/");
        browser.driver.manage().window().maximize();
        add(4, 5);
        add(5, 5);
        add(14, 15);
        add(5, 15);
        element.all(by.css("tr[ng-repeat='result in memory']")).each(function (item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            })
        })
    })
})