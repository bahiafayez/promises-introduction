var sleep = require('sleep');
module.exports = {

  lairBoss: {
    "Evil Dennys": "Evil Denny",
    "The Swiss Alps" : "Angriest Saint Bernard",
    "Space" : "Nefarion the Mildly Unpleasant",
    "Dormant Volcano" : "Trogdor The Burninator",
    "Chicago" : "Orange Julius Caesar",
  },

  findBoss: function(lairName, callback) {
    sleep.sleep(1);
    if (this.lairBoss[lairName]) {
      callback(null,this.lairBoss[lairName]);
    } else {
      callback( new Error("Lair does not exist"), null);
    }
  }
};