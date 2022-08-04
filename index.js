'use strict';

document.getElementById('random-button').addEventListener('click', () => {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('activity-name').innerHTML = `
        ${data.activity}`;
    });
});
