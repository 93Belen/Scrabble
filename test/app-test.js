const assert = require('assert');
const { expect } = require('chai');
const chai = require('chai');
require('../app');

describe('board', () =>{
    describe('tiles', () =>{
        it('acepts letters', () =>{
        // SETUP
            const input = 'a';
            const expected = 'a';
            const i = Math.floor(Math.random() * 15);
        // EXERCISE
            board.tiles[i].value = input;
        // VERIFY
           assert.equal(board.tiles[i].value, expected);
        })
        it('accepts only one letter', ()=>{
        // SETUP
            const input = 'aa';
            const i = Math.floor(Math.random() * 15);
        // EXERCISE
            board.tiles[i].value = input
        // VERIFY
            expect(board.tiles[i].value).to.throw;
         })
        it('does not accepts numbers', () =>{
         // SETUP
            const input = Math.floor(Math.random() * 9);
            const i = Math.floor(Math.random() * 15);
        // EXERCISE
            board.tiles[i].value = input;
            const actual = typeof board.tiles[i].value;
        // VERIFY
            expect(actual).to.throw();
        })
        it('keep letters on display', ()=>{
        // SETUP

        // EXERCISE

        // VERIFY
        
        })
    })
    describe('.isInDictionary', () =>{
        it('accepts only words that appear in dictionary', () =>{
        // SETUP
            
        // EXERCISE

        // VERIFY
        
    })
})
    it('accepts only words form with abailable letters', ()=>{
        // SETUP

        // EXERCISE

        // VERIFY
        
    })
    it('accepts only one word from each player durin each round', () =>{
        // SETUP

        // EXERCISE

        // VERIFY
        
    })
    it('accepts only words that use one letter from board', () =>{
        // SETUP

        // EXERCISE

        // VERIFY
        
    })
    it('accepts the first word of the game by itself', () =>{
        // SETUP

        // EXERCISE

        // VERIFY
        
    })
});