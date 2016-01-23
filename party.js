function PartyTime() {
  var _swapImages = function() {
    var images = document.getElementsByTagName('img');
    for (var index = 0; index < images.length; index++) {
      images[index].src = 'http://i.imgur.com/DLXvBgs.gif';
    }
  }

  var _imageParty = function() {
    _swapImages();
    document.addEventListener('DOMNodeInserted', _swapImages);
  }

  var _marqueeParty = function() {
    var tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'a', 'td', 'pre', 'label'];
    for(var y = 0; y < tags.length; y++) {
      var party = document.getElementsByTagName(tags[y]);
      for(var x = 0; x < party.length; x++) {
        var html = party[x].innerHTML;
        party[x].innerHTML = '<marquee>'+html+'</marquee>';
      }
    }
  }

  var _mouseParty = function() {
  }

  var _soundParty = function() {
    var music = document.createElement('div');
    music.innerHTML = '<iframe width="1" height="1" src="https://www.youtube.com/embed/ujKRFbPYUmM?autoplay=1" frameborder="0"></iframe>';
    document.body.appendChild(music);
  }

  var _init = function() {
    _imageParty();
    _marqueeParty();
    _mouseParty();
    _soundParty();
  }

  _init();
};

var partyTime = new PartyTime();
