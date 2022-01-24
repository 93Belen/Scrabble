const { assert } = require("chai");
const { board } = require('../public/app.js');


describe('board', () =>{
    describe('.addWord()', () =>{
        it('changes value of clicked tile', () =>{
            // SETUP
            const abc = ['a', 'b', 'c']
            const random = Math.floor(Math.random() * abc.length);

            const inputLetter = abc[random];
            const inputContainer = 'tile-1'
            const expected = inputLetter;
            // EXERCISE
            const actual = board.addWord(inputContainer, inputLetter);
            // VERIFY
            assert.equal(actual, expected);

        });
        it('displays value in tile', () => {
            // SETUP
            const expected = 'a';
            const input = 'a';
            const tileValue = board.tile.value;
            // EXERCISE
            const actual = board.addWord(tileValue, input)
            //VERIFY
            assert.equal(actual, expected);
        })
    })
})