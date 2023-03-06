# Feature Scenarios:

## Feature 1: Filter events by city
As a user, I should be able to filter events by city so that I can see events taking place in that city.

- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
    - Given the user hasn't searched for any city
    - When the user opens the app
    - Then the user should see a list of all upcoming events
- Scenario 2: User should see a list of suggestions when they search for a city
    - Given the main page is open
    - When the user starts typing in the city search bar
    - Then the user should see a list of cities (suggestions) that match what they’ve typed
- Scenario 3: User can select a city from the suggested list
    - Given the user was typing “Berlin” in the city textbox and the list of cities is showing
    - When the user clicks on a city from the list
    - Then their city should be changed to that city and the user should receive a list of upcoming events in that city

## Feature 2: Show/Hide an event’s details
As a user, I should be able to show/hide event details so that I can see more/less information about the events.

- Scenario 1: An event element is collapsed by default
    - Given an event element is visible
    - When the event element hasn’t been clicked yet
    - Then the event element is collapsed
- Scenario 2: User can expand an event to see its details
    - Given an event element is visible
    - When the event element is clicked
    - Then the event element is expanded
- Scenario 3: User can collapse an event to hide its details
    - Given The event element is expanded
    - When the user clicks it
    - Then the element is collapsed

## Feature 3: Specify number of events
As a user, I should be able to specify the number of events I want to view so that I can increase or decrease the number of visible events in the area.

- Scenario 1: When user hasn’t specified a number, 32 is the default number
    - Given “number of events” is visible
    - When the user hasn’t specified a number
    - Then the number is 32
- Scenario 2: User can change the number of events they want to see
    - Given “number of events” is visible
    - When the user specifies a number
    - Then the number becomes the user’s input number

## Feature 4: Use the app when offline
As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.

- Scenario 1: Show cached data when there’s no internet connection
    - Given there is cached data 
    - When there is no internet connection 
    - Then the cached data remains displayed
- Scenario 2: Show error when user changes the settings (city, time range)
    - Given the user changes the city or time range
    - When there are no events that meet those criteria
    - Then an error message displays “No Results”

## Feature 5: Data Visualization
As a user, I should be able to see a chart showing all upcoming events in each city so that I know what events are organized in which city.

- Scenario 1: Show a chart with the number of upcoming events in each city
    - Given A user is viewing a city
    - When the user requests for information to be visualized
    - Then a page with data presented in the form of a chart is displayed


### Serverless Functions
This application uses a serverless function to handle the delivery of authorization tokens to user. The function uses OAuth 2.0 to authenticate users and grant them access to event data provided through the Google Calendar API.
