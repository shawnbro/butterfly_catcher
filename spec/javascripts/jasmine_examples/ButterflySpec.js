describe("Game", function() {
  var butterfly;

  beforeEach(function() {
    butterfly = new Butterfly( { id: 1, name: 'monarch', caught: false } );
    game = new Game;
    gameID = 1;
  });

  it("has an initial high score of 0", function() {
    expect(game.get('highScore')).toEqual(0);
  });

  it("has an initial current score of 0", function() {
    expect(game.get('currentScore')).toEqual(0);
  });

  describe("#catch", function() {
    beforeEach(function() {
      butterfly.catch();
    });

    it("changes butterfly caught to true", function() {
      expect(butterfly.get('caught')).toEqual(true);
    });

    it("should update the current score", function() {
      expect(game.get('currentScore')).toEqual(25);
    });

    it("adds a new butterfly to the game", function() {

    })
  });
});
