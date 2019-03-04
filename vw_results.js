"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Diego Sandoval
   Date:   3/1/19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// DVARS:
var reportHTML = `<h1>${raceTitle}</h1>`;
// DVARN:
var totalVotes = 0;
// DLOOP:
for (var i = 0; i < race.length; i++) {
    votes[i].forEach(calcSum);
    reportHTML += "<table>";
    reportHTML += `<caption>${race[i]}</caption>`;
    reportHTML += "<tr><th>Canidate</th><th>Votes</th></tr>";
    reportHTML += canidateRows(i, totalVotes);
    reportHTML += "</table>";
}
// DDOES:
document.getElementById('reportHTML').innerHTML = reportHTML;
// DFUNC:
function canidateRows(raceNum, totalVotes) {
    // DVARS:
    var rowHTML = "";
    for (var j = 0; j <= 2; j++) {
        // DVARL:
        var candidateName = candidate[raceNum][j];
        var canidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        // DVARS:
        rowHTML += `<tr><td>${candidateName}${canidateParty}</td><td>${candidateVotes.toLocaleString()}${candidatePercent.toFixed(1)}</td>`
        for (var k = 0; k < candidatePercent; k++) {
            createBar(canidateParty)
        }
        rowHTML += "</tr>";
    }
    // DDOES:
    return rowHTML;
}

function createBar(partyType) {
    var barHTML = "";
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>"
            break;
        case "R":
            barHTML = "<td class='dem'></td>"
            break;
        case "I":
            barHTML = "<td class='ind'></td>"
            break;
    }
    return barHTML;
}





/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}