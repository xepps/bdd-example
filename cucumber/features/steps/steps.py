from nose.tools import assert_equal, assert_true
from selenium.webdriver.common.by import By
import time

@given(u'I have my calculator open')
def step_impl(context):
   context.calculatorPage.navigate()

# @when(u'I press the keys "{a}" "{b}" "{c}" "{d}"')
# def step_impl(context, a, b, c, d):
#    context.calculatorPage.press(a)
#    context.calculatorPage.press(b)
#    context.calculatorPage.press(c)
#    context.calculatorPage.press(d)
#    context.calculatorPage.press('equals')

# @when(u'I press the keys "{a}" "{b}" "{c}"')
# def step_impl(context, a, b, c):
#    context.calculatorPage.press(a)
#    context.calculatorPage.press(b)
#    context.calculatorPage.press(c)
#    context.calculatorPage.press('equals')

# @then(u'I should get the answer "{ans}"')
# def step_impl(context, ans):
#     assert_equal(context.calculatorPage.getResult(ans), ans)
