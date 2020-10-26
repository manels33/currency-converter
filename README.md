# CurrencyConverter Euro / Dollar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Prerequisites
- npm - Package Manager
- Node.js
- Angular CLI

## Setup and installation
- Clone the repository.
- Navigate to root project folder using any command line interface (e.g. Command Prompt on Windows). 
- Run `npm install` to install packages.
- Run development server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Application functionalities

1. Display a value that will represent the EUR / USD exchange rate. It will be initialized to 1.1.
Every 3 seconds, a random value between -0.05 and +0.05 will be added or subtracted from the
initial value.
2. Create a front allowing you to enter an amount in EUR and display its value in USD on the
exchange rate basis
3. Set up regular polling allowing the USD part to be updated according to
updating the exchange rate
4. Add a switch allowing you to enter an amount in USD instead of the amount in EUR:
at. Switch set to "EUR": the amount entered is in Euro, the value displayed is in USD
b. Switch set to "USD": the amount entered is in dollars, the value displayed is in EUR
5. Ensure the continuity of the values ​​(if the switch is activated, the new entry becomes the old one.
exit)
6. Add a history table for the last 5 conversion requests calculated. 
Table will display the actual rate, the initial value with the associated currency and the calculated value
with the associated currency.
