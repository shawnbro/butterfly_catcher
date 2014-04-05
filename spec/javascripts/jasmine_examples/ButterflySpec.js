describe("Game", function() {
  var butterfly;

  beforeEach(function() {
    butterfly = new Butterfly( { id: 1, name: 'monarch', caught: false } );
    game = new Game;
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
      console.log(game)
      expect(game.get('currentScore')).toEqual(25);
    });
  });

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
