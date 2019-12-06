# Star Wars - Front End Developer Assessment

We welcome you and thank you for taking the time to do our coding assessment. Please read the guidelines before getting started.

## Assessment Guidelines:

* The purpose of this assessment is to help us evaluate your front end application development coding skills.
* You may use **any** front end framework to complete this assessment, or no framework at all!
* You will not be graded on your visual design skills (i.e. styling)
* You are allowed to use any non-human resource. Ex:
  * **Allowed:** StackOverflow, Google, reference code on Github, etc.
  * **Not Allowed:** Chatting or calling your old boss, using the code of your friend who already took this assessment
 * You may use external projects or copy and paste examples under two conditions:
   * Make sure to commit any changes you make immediately before and after including the external code and make note of it in the commit message when you add it.
   * Make sure you still provide us with enough of your own code to get a feel for how you think
* Don't be overwhelmed, there are supposed to be more steps than you will likely complete in your given time frame. Try to do them in order, but you can skip steps if you get stuck. If you skip a feature, put in the notes as to why you skipped it.
* Add any grading advice, disclaimers, brags, feedback, or anomalies you encounter along your way to notes.md
* Please use git to track changes to your code. Try to commit often and add messages to your commits so we can more easily review your work. You may use a local git repository, you are not required to push your commits up to any remotely hosted repo.
* We use the [Star Wars API](https://swapi.co/) as the backend data source for this evaluation. You can find comprehensive documentation for the Star Wars API here: https://swapi.co/documentation

## Assessment Steps:

### PART I - Basic Data Retrieval

1. GET Star Wars people data from https://swapi.co/api/people and show it in a list. Show each person's name, birthday, and home world name on the list view.

### PART II - Controlled Data Fetching

2. The https://swapi.co/api/people endpoint only gives you data for 10 person records at a time, but there are many more total people than that. Implement pagination to allow the user to view all of the people, one page at a time.  Hint: The Star Wars API will return `count`, `next`, and `previous` data in the response payload to help you implement pagination.
3. Add a search bar to work as a filter on the people, searching by the person's name, and paginate the results. See https://swapi.co/documentation#search for documentation on searching

### PART III - Favoriting Cards

4. Add a *favorite* button to each Person in the list and a favorite count to the upper right hand corner of the screen. Clicking the button should toggle the favorited button state and increments/decrements the favorite count appropriately. The Star Wars API is read-only, so store the favorite data in-memory on the client-side.

### PART IV - Drag and Drop

5. When a user clicks on the favorite count, route to a page that displays all the favorite people. Include a back button to go back to the main list.
6. Add drag-and-drop functionality in order to sort the favorites. Display the order on or above the card.  The Star Wars API is read-only, so store the sort order on the client-side.

# May the force be with you.
