/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* The next test is an extension of the RSS Feeds suite - it will
     * determine if the URLs are actually defined, along with testing
     * to see if the URLs themselves are not empty
     */

    it('URLs are defined and not empty', function() {

      for (var i = 0; i < allFeeds.length; i++) { // iterating through each feed in the allFeeds array
        expect(allFeeds[i].url).toBeDefined(); // expect each URL to be defined
        expect(allFeeds[i].url).toBeTruthy(); // expect each URL to contain text
      }
    });

    /* This is essentially the above test, but applied to the names of the URLs */

    it('URLs are defined and not empty', function() {

      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined(); // expect each name to be defined
        expect(allFeeds[i].name).toBeTruthy(); // expect each name to contain text
      }
    });
  });

  /* The second test suite will cater to the page's menu */

  describe('The menu', function() {

    /* The following test will determine if the side panel menu is hidden by default */

    it('is hidden', function() {
      expect($('body')).toHaveClass('menu-hidden'); // the body will be expected to initially have the 'menu-hidden' class, which hides the menu
    });

    /* And now to test if clicking on the menu icon brings up the menu */

    it('changes visiblity', function() {
      $('.menu-icon-link').click(); // click the menu icon
      expect($('body')).not.toHaveClass('menu-hidden'); // expect side panel should be visible
      $('.menu-icon-link').click(); // click the menu again
      expect($('body')).toHaveClass('menu-hidden'); // expect side panel to be hidden again
    });
  });

  /* The third test suite applies to the first set of entries loaded onto the page */

  describe('Initial Entries', function() {

    beforeEach(function(done) { // before anything can be done
      loadFeed(0, function() { // asynchronous call, time 0
        done(); // async done
      });
    });

    /* This test will determine if at least a single entry shows up upon
     * completion of the loadFeed call
     */

    it('contains at least a single entry', function(done) {
      expect($('.feed .entry')).toExist(); // expects a feed-entry to be present, more specifically checks to see if the CSS is currently present
      done(); // call done in order to finish beforeEach
    });
  });

  /* The final test suite applies updated content */

  describe('New Feed Selection', function() {
    var feedContent1, feedContent2; // will be used to compare
    beforeEach(function(done) {
      loadFeed(2, function() { // asynchronous call, time 2
        feedContent1 = $('.feed'); // store the feed into feedContent1
        done();
      });
    });

    /* This test will check to see if the content on the page changes with each loadFeed call */

    it('content changes', function(done) {
      loadFeed(3, function() { // seperate LoadFeed call, this time time 3 to ensure it runs after previous loadFeed call
        feedContent2 = $('.feed'); // store the feed into feedContent2
        done();
      });
      expect(feedContent1).not.toEqual(feedContent2); // expect for both feeds to have different content, specifically feedContent1 not equal to feedContent2
      done();
    });
  });
}());
