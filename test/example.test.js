// IMPORT MODULES under test here:

import { renderGame, renderTeam } from '../render-utils.js';

const test = QUnit.test;

test('renderGame function should take in a game argument consisted of 2 teams and 2 sets of score, then return a DOM node with 2 div elements.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const game = {
        name1: 'Duck',
        score1: 4,
        name2: 'Beaver',
        score2: 3
    }; 

    const expected = `<div class="game"><div class="team"><p class="name">Duck</p><p class="score">4</p></div><div class="team"><p class="name">Beaver</p><p class="score">3</p></div></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'returns a DOM node consisted of a div element with 4 p tags wrapped inside a div element');
});


test('renderTeam function returns a DOM node consisted of 2 p elements-name and score', (expect) => {

    const newTeam = {
        name: 'Santa',
        score: 6
    }; 

    const expected = `<div class="team"><p class="name">Santa</p><p class="score">6</p></div>`;
    

    const actual = renderTeam(newTeam.name, newTeam.score);

 
    expect.equal(actual.outerHTML, expected, 'returns a div consisted of 2 p elements with a class of "name" and "score"');
});
