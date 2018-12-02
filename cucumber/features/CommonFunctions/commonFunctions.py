from browser import Browser
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

class CommonFunctions(Browser):

    @staticmethod
    def clickElement(self, *locator):
        self.driver.find_element(*locator).click()

    @staticmethod
    def waitForElement(self,locator):
        element = WebDriverWait(self.driver, 3).until(
            EC.presence_of_element_located(locator)
        )
    @staticmethod
    def fill(self, text, *locator):
        self.driver.find_element(*locator).send_keys(text)

    def refreshPage(self):
        self.driver.refresh()

    def clear(self, *locator):
        self.driver.find_element(*locator).clear()
