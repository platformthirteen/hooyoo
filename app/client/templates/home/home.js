/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  people: function () {
    return [
      "http://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg",
      "http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg",
      "http://w1nd.cc/promo/347.jpg",
      "http://static.168ora.hu/db/09/AF/orban-d0001C9AFa1ba9618c180.jpg"
    ];
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
  // FIXME should be able to do all in CSS.
  var cardSize;
  if ($(window).width() < $(window).height()) {
    cardSize = $(".deckCard").outerWidth();
  } else {
    cardSize = $(window).height() / 1.5;
  }
  $(".deckCard").css("height", cardSize);

  // initializing jTinder.
  $("#tinderslide").jTinder({
    onDislike: function (item) {
	    // mark as disliked
    },
    onLike: function (item) {
      $('#modal1').openModal({
          dismissible: false, // Modal can be dismissed by clicking outside of the modal
          opacity: .5, // Opacity of modal background
          in_duration: 100, // Transition in duration
          out_duration: 200, // Transition out duration
          ready: function() { }, // Callback for Modal open
          complete: function() {
            // TODO: mark as liked
          }
        });
    },

  	animationRevertSpeed: 200,
  	animationSpeed: 400,
  	threshold: 1,
  	likeSelector: '.like',
  	dislikeSelector: '.dislike'
  });

  $('i.like, i.dislike').click(function(e) {
  	e.preventDefault();
  	$("#tinderslide").jTinder($(this).data("action"));
  });
});

Template.Home.onDestroyed(function () {
});
