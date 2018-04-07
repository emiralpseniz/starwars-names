import {expect} from 'chai';
import starWars from './index';

describe('starwars-name', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain Luke Skywalker', () => {
      expect(starWars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', () => {
    it('should return a random item from the starWars.all', () => {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', () => {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(starWars.all).to.include(item);
      });
    });
  });
});