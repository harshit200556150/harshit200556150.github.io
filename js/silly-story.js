// VARIABLE DECLARATIONS
var customName = document.getElementById("customname"); // Corrected ID
var randomize = document.querySelector(".randomize"); // Using class for button selection
var story = document.querySelector(".story"); // Using class for story selection
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem);

    if (customName.value.trim() !== "") {
        newStory = newStory.replace(/Bob/g, customName.value);
    }

    if (document.getElementById("metric").checked) {
        var weight = (300 * 0.453592).toFixed(2); // Convert pounds to kilograms
        newStory = newStory.replace('300 pounds', weight + ' kg');

        var temp = ((94 - 32) * 5/9).toFixed(2); // Convert Fahrenheit to Celsius
        newStory = newStory.replace('94 farenheit', temp + ' celsius');
    }

    story.textContent = newStory;
    story.style.visibility = "visible";
}

// EVENT LISTENERS
randomize.addEventListener("click", result);
