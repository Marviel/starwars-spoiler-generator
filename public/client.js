// client-side js
// run by the browser each time your view template is loaded





function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}


Array.prototype.sample = function(size) {
  return getRandomSubarray(this, size);
};

Array.prototype.pick = function() {
  return this.sample(1)[0]
}



// our default array of dreams
const dreams = [];



const generateSpoiler = function() {
  return "<p>In this star wars movie, our heroes return to take on the first order and new villain... " + 
      ["Kyler Ren", "Malloc", "Darth Sebelius", "Theranos", "Lord Juul"].pick().toUpperCase() +
      " with help from their new friend " +
      ["Kim Spacemeasurer", "Teen Yoda", "Dab Tweetdeck", "Yaz Progestin", "TI-83"].pick().toUpperCase() +
      ".</p><p>Rey Builds a new lightsaber with a " +
      ["Beige", "Ochre", "Mauve", "Aquamarine", "Taupe"].pick().toUpperCase() +
      " blade, and they head out to confront the First Order's new superweapon, the " +
      ["SUN OBLITERATOR", "moonsquisher", "world eater", "planet zester", "superconducting supercollider"].pick().toUpperCase() +
      "; a space station capable of " +
      [
        "blowing up a planet with a bunch of beams of energy that combine into one",
        "blowing up a bunch of planets with one beam of energy that splits into many",
        "cutting a planet in half and smashing the halves together like two cymbals",
        "increasing the C02 levels in a planet's atmosphere, causing rapid heating",
        "triggering the end credits before the movie is done"
      ].pick() +
      ".</p> <p>They unexpectedly join forces with their old enemy " + 
      ["Boba Fett", "Salacious Crumb", "The Space Slug", "the bottom half of Darth Maul", "YouTube Commenters"].pick().toUpperCase() +
      " and destroy the superweapon in a battle featuring " +
      [
        "a bow that shoots little lightsaber-headed arrows",
        "X-Wings and Tie Fighters dodging the giant letters of the opening crawl",
        "a Sith educational display that uses Force Lightning to demonstrate the dielectric breakdown of air",
        "Kylo Ren putting on another helmet over his smaller one",
        "a Sith car wash where the bristles on the brushes are little lightsabers"
      ].pick() +
      ".<\p><p>(P.S: Rey's parents are " +
      ["Luke", "Leia", "Han", "Obi-Wan", "A Random Junk Trader"].pick().toUpperCase() +
      " and " +
      ["Poe", "BB-8", "Amilyn Holdo", "Laura Dern", "A Random Junk Trader", "That one droid from the Jawa Sandcrawler that says *GONK*."].pick().toUpperCase() +
      ")<\p>" + 
      "<br/><br/><br/><br/><br/><br/><i style='color: gray'>(hastily cobbled together by <a href='http://www.lukebechtel.com'>LAB</a>, text options pulled from <a href='http://www.xkcd.com'>XKCD</a> with love & regards to Randall)</i>"
  ;
    
}

const generateTitle = function () {
  return [
    "A New Pair of Shoes",
    "The Bowler Strikes Back",
    "Return of the Sweater",
    "The Little Sith That Could"
  ].pick().toUpperCase()
}

// Disable crawl until we've loaded everything
const crawlElement = document.getElementsByClassName("crawl")[0];
console.log(crawlElement.className)
crawlElement.className = ""


// populate title and spoilers
const titleEl = document.getElementById("episode-name")
titleEl.innerHTML = generateTitle()

const dreamsList = document.getElementById("episode-summary");
dreamsList.innerHTML = generateSpoiler()

// re-enable crawl
crawlElement.className = "crawl"



/*
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];

// a helper function that creates a list item for a given dream
const appendNewDream = function(dream) {
  const newListItem = document.createElement("li");
  newListItem.innerHTML = dream;
  dreamsList.appendChild(newListItem);
};

const setNewItem = function(text) {
  dreamsList.innerHTML = text
}

// iterate through every dream and add it to our page
dreams.forEach(function(dream) {
  appendNewDream(dream);
});

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();
  
  
  // Generate a new Star Wars Spoiler
  const newSpoiler = generateSpoiler()
  
  // get dream value and add it to the list
  dreams.push(newSpoiler);
  setNewItem(newSpoiler);
};*/
