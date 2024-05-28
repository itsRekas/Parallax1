// Get references to the elements by their IDs
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

// Add an event listener for the scroll event on the window object
window.addEventListener('scroll', function() {
    // Get the current scroll position on the Y axis
    var value = window.scrollY;

    // Move the background image vertically at half the scroll speed
    bg.style.top = value * 0.5 + 'px';

    // Move the moon image horizontally at half the scroll speed, in the opposite direction
    moon.style.left = -value * 0.5 + 'px';

    // Move the mountain image vertically at 15% of the scroll speed, in the opposite direction
    mountain.style.top = -value * 0.15 + 'px';

    // Move the road image vertically at 15% of the scroll speed
    road.style.top = value * 0.15 + 'px';

    // Move the text vertically at the same speed as the scroll
    text.style.top = value * 1 + 'px';
});
