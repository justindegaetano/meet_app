Feature Scenarios:

Feature 1: Filter events by city
As a user, I should be able to filter events by city so that I can see events taking place in that city.
	•	Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
		o	Given the user hasn't searched for any city
		o	When the user opens the app
		o	Then the user should see a list of all upcoming events
	•	Scenario 2: User should see a list of suggestions when they search for a city
		o	Given the main page is open
		o	When the user starts typing in the city search bar
		o	Then the user should see a list of cities (suggestions) that match what they’ve typed
	•	Scenario 3: User can select a city from the suggested list
		o	Given the user was typing “Berlin” in the city textbox and the list of cities is showing
		o	When the user clicks on a city from the list
		o	Then their city should be changed to that city and the user should receive a list of upcoming events in that city

Feature 2: Show/Hide an event’s details
As a user, I should be able to show/hide event details so that I can see more/less information about the events.
	•	Scenario 1: An event element is collapsed by default
		o	Given an event element is visible
		o	When the event element hasn’t been clicked yet
		o	Then the event element is collapsed
	•	Scenario 2: User can expand an event to see its details
		o	Given an event element is visible
		o	When the event element is clicked
		o	Then the event element is expanded
	•	Scenario 3: User can collapse an event to hide its details
		o	Given The event element is expanded
		o	When the user clicks it
		o	Then the element is collapsed

Feature 3: Specify number of events
As a user, I should be able to specify the number of events I want to view so that I can increase or decrease the number of visible events in the area.
	o	Scenario 1: When user hasn’t specified a number, 32 is the default number
		o	Given “number of events” is visible
		o	When the user hasn’t specified a number
		o	Then the number is 32
	o	Scenario 2: User can change the number of events they want to see
		o	Given “number of events” is visible
		o	When the user specifies a number
		o	Then the number becomes the user’s input number

Feature 4: Use the app when offline
As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.
	o	Scenario 1: Show cached data when there’s no internet connection
		o	Given there is cached data 
		o	When there is no internet connection 
		o	Then the cached data remains displayed
	o	Scenario 2: Show error when user changes the settings (city, time range)
		o	Given the user changes the city or time range
		o	When there are no events that meet those criteria
		o	Then an error message displays “No Results”

Feature 5: Data Visualization
As a user, I should be able to see a chart showing all upcoming events in each city so that I know what events are organized in which city.
	o	Scenario 1: Show a chart with the number of upcoming events in each city
		o	Given A user is viewing a city
		o	When the user requests for information to be visualized
		o	Then a page with data presented in the form of a chart is displayed
