function PartyTime() {
  var _this = this;

  var _swapImages = function() {
    var images = document.getElementsByTagName('img');
    for (var index = 0; index < images.length; index++) {
      images[index].src = 'http://www.nerdgranny.com/wp-content/uploads/2008/06/ascii-goatse.gif';
    }
  }

  var _imageParty = function() {
    _swapImages();
    //DOMNodeInserted
  }

  var _marqueeParty = function() {
    var tags = ['span', 'p', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'a', 'td', 'pre', 'label'];
    for(var y = 0; y < tags.length; y++) {
      var party = document.getElementsByTagName(tags[y]);
      for(var x = 0; x < party.length; x++) {
        var html = party[x].innerHTML;
        party[x].innerHTML = '<marquee>'+html+'</marquee>';
      }
    }
  }

  var _init = function() {
    _imageParty();
    _marqueeParty();
    //_mouseParty();
    //_soundParty();
    alert('GET READY TO PARTY');
  }

  _init();
};

var partyTime = new PartyTime();
