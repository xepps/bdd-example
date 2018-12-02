// ./step-defintions/calculator.js

module.exports = function () {
    this.Given(/^I have my calculator open$/, () => {
        return helpers.loadPage('http://localhost:3000')
    })

    this.When(/^I enter "(.*)" "(.*)" "(.*)"$/, (a, b, c) => {
        return helpers.clickElement(page.calculator.elements.button(a))
            .then(() => helpers.clickElement(page.calculator.elements.button(b)
                .then(() => helpers.clickElement(page.calculator.elements.button(c)))
            )
        )
    })

    this.Then(/^I should get the answer "([^"]*)"$/, answer => {
        return driver.findElement(page.calculator.elements.display).then(elm => {
            expect(elm.text).to.equal(answer)
        })
    })
}