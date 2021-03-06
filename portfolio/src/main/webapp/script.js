// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a podcast suggestion to the page. I repurposed the code 
 previously written that added a random greeting to the webpage when 
 clicked. 
 */
function selectPodcastReccomendations() {
  const podcastReccomendations = ['Modern Love', 'tech-ish', 'Welcome To Night Vale', 'Radiolab', 'The Nod',
  'Still Processing', 'Ologies with Alie Ward', 'Hello From the Magic Tavern', 'Critical Role'];
  // Pick a podcast.
  const selectedPodcast = podcastReccomendations[Math.floor(Math.random() * podcastReccomendations.length)];
  // Add it to the page.
  const reccomendationsContainer = document.getElementById('recs-container');
  reccomendationsContainer.innerText=selectedPodcast;
}
/**
 * Fetches the JSON string of comments from the server and adds it to the DOM. 
 */
 function getCommentMessage() {
  const commentPromise = fetch('/data');
  commentPromise.then(handleComment);
}
/**
 * Converts the comment in getCommentMessage() to text, which is handled
 * by addCommentToDOM(). 
 */
function handleComment(comment) {
  const textPromise = comment.text();
  textPromise.then(addCommentToDOM); 
}
/**
 * Adds the comment to the DOM, by parsing the JSON string, creating a bullet list of 
 * comments and appending it to the DOM. 
 */
function addCommentToDOM(comment) {
    comment = JSON.parse(comment);
    // Obtains all new and past comments and adds them to the DOM. 
    comment.forEach(function(i){
        const liElement = createListElement(i);
        $('#comments-history').append(liElement);
    })   
}
/**
 * Creates a li element with the text provided in the paramaters. 
 */
function createListElement(text) {
  const liElement = $('<li></li>');
  $(liElement).text(text);
  return liElement;
}
/** Creates a new map.*/
function createMap() {
  const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 42.641, lng: -70.953}, zoom: 13});
}