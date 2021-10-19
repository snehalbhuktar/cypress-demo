# Book Store application - Cypress

## Test scenarios
- Book store application is chosen because it includes interaction with multiple pages
- Login - To enter into any application , suceessful login is required. The scenarios include successful login and unsuccessful login when user enters invalid username or password.
- Book search - This includes the search for particular book and verify the result as per search criteria
- Profile page - Includes validation of links
- Modal Dialogs - Includes actions performed on modal dialogs

## Run tests locally
- Clone this repo and `cd` into it
  ```shell
  $ git clone https://github.com/snehalbhuktar/cypress-demo.git
  $ cd demoqa
  ```
- Execute following commands to run this test suite locally
    ```shell
    # To install npm
    $ npm install

    # Open cypress - open cypress and select test to run
    $ npx cypress open

    # To run all cypress tests
    $ npx cypress run

## Results
Results are integrated with [GitHub Pages](https://snehalbhuktar.github.io/cypress-demo/).