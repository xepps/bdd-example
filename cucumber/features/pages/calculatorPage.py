from selenium.webdriver.common.by import By
from nose.tools import assert_equal, assert_true
from browser import Browser
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import allure
import onetimepass as otp
from CommonFunctions.commonFunctions import CommonFunctions
import time


class CalculatorPage(Browser):
    # Login Page Actions

    def navigate(self):
        self.driver.get('http://localhost:3000')

    def press(self, button):
        element = (By.CSS_SELECTOR, '.button--' + button)
        CommonFunctions.waitForElement(self, element)
        CommonFunctions.clickElement(self, *element)

    def getResult(self, ans):
        time.sleep(.3)
        return self.driver.find_element(*(By.CSS_SELECTOR, 'input')).get_attribute('value')
