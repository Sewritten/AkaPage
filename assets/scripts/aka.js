/*
 *   AkaPage;
 * Copyright 2019 Seia-Soto. All rights reserved.
 */

const AkaPage = {
  register: {
    menuSwitcher: function() {
      $('#sidebarToggle').click(function() {
        $('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle')
      })
    },
    blogSearchInput: function() {
      $('.blogSearchInput').each(function(idx, el) {
        $(el).on('keydown', function(eventObject) {
          if ((eventObject.keyCode || eventObject.which) == 13) {
            location.href = 'https://b2.seia.io/?s=' + $(el).val()
          }
        })
      })
    }
  }
}

// NOTE: Aka
function AkaConstructor() {
  console.log('AkaPage, also we think User Interface is the language of the web.')
  console.log('----')

  AkaPage.register.menuSwitcher()
  AkaPage.register.blogSearchInput()
}

document.addEventListener('DOMContentLoaded', AkaConstructor)
