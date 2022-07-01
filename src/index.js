require('jquery-modal');

import './sass/style.scss';

import addSource from './js/addSource';
import toggleSource from './js/toggleSource';
import layoutOptions from './js/layoutOptions';

$(function() {

  // Initialize Components

  addSource();
  toggleSource();
  layoutOptions();

  // Initialize Modal

  $('.button').on('click', function(e) {

    $(this).modal({
      fadeDuration: 500,
      fadeDelay: 0
    });

    return false;

  });

});