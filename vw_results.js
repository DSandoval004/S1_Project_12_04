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
// DVARS: Creates the reportHTML var and gives it HTML for a header
var reportHTML = `<h1>${raceTitle}</h1>`;
// DLOOP: Creates a loop to run through each of the districts and create a table for them
for (var i = 0; i < race.length; i++) {
    // DVARN: stores the total votes for each district
    var totalVotes = 0;
    // DDOES: Calculates the total votes from the votes array
    votes[i].forEach(calcSum);
    // DVARS: Adds to the reportHTML variable the tables for each district
    reportHTML += "<table>";
    reportHTML += `<caption>${race[i]}</caption>`;
    reportHTML += "<tr><th>Canidate</th><th>Votes</th></tr>";
    reportHTML += canidateRows(i, totalVotes);
    reportHTML += "</table>";
}
// DDOES: Applies the reportHTML to the document
document.getElementById('reportHTML').innerHTML = reportHTML;
// DFUNC: create the function to create the rows of the tables
function canidateRows(raceNum, totalVotes) {
    // DVARS: Creates the rowHTML variable
    var rowHTML = "";
    // DLOOP: Runs 3 times cause their is 3 canadites for each district
    for (var j = 0; j <= 2; j++) {
        // DVARL: Creates some local variable by calling upon the arrays, or a function
        var candidateName = candidate[raceNum][j];
        var canidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        // DVARS: Adds to the rowHTML var
        rowHTML += `<tr><td>${candidateName} (${canidateParty})</td><td>${candidateVotes.toLocaleString()} (${candidatePercent.toFixed(1)}%)</td>`
        // DLOOP: Creates a loop the adds a visual of the oercent of the canidate
        for (var k = 0; k <= candidatePercent; k++) {
            // DVARS: Calls upon the createBar function with the parameter of canidateParty and adds it to rowHTML
            rowHTML += createBar(canidateParty)
        }
        // DVARS: Closing row tag
        rowHTML += "</tr>";
    }
    // DDOES: Returns the value of rowHTML
    return rowHTML;
}
// DFUNC: The createBar function
function createBar(partyType) {
    // DVARS: the barHTML variable
    var barHTML = "";
    // DSWCA: Determines what party they belong to, then adds to the barHTML the td with its respective class
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>"
            break;
        case "R":
            barHTML = "<td class='rep'></td>"
            break;
        case "I":
            barHTML = "<td class='ind'></td>"
            break;
    }
    // DDOES: Returns the barHTML
    return barHTML;
}

/*
 *
 *   ____      _ _ _                _      _____                 _   _                 
 *  / ___|__ _| | | |__   __ _  ___| | __ |  ___|   _ _ __   ___| |_(_) ___  _ __  ___ 
 * | |   / _` | | | '_ \ / _` |/ __| |/ / | |_ | | | | '_ \ / __| __| |/ _ \| '_ \/ __|
 * | |__| (_| | | | |_) | (_| | (__|   <  |  _|| |_| | | | | (__| |_| | (_) | | | \__ \
 *  \____\__,_|_|_|_.__/ \__,_|\___|_|\_\ |_|   \__,_|_| |_|\___|\__|_|\___/|_| |_|___/
 *                                                                                     
 *
 */

/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}