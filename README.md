# BDD example
In this example, we have a simple front end of a calculator that offloads
processing of the expressions to a backend api.

In order to check both the components have been integrated, we have used cucmber
with python selenium to validate them in a readable way!

## Install
You should just have to run:
```
npm i
```
from the top level.

Ensure you have python3/pip3 installed.
You might have to install behave manually:
```
pip3 install behave
```

## Running it
This one is easier:
```
npm start
```

## Testing
Unit tests are run:
```
npm test
```

To run the cucumbers, ensure you are running the server, then,
```
npm test:cucumber
```