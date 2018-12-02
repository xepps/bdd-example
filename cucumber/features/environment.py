from selenium import webdriver
from browser import Browser
from pages.calculatorPage import CalculatorPage
from CommonFunctions.commonFunctions import CommonFunctions


def before_all(context):
    context.browser = Browser()
    context.calculatorPage = CalculatorPage()


def after_all(context):
    context.browser.close()
