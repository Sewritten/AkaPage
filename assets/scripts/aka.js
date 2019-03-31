function registerAkaComponents() {
  let Aka = {
    // NOTE: Initialize collection of AkaComponents.
  }

  // NOTE: Defaults
  Aka.baseURL = new URL(window.location.href).host
  Aka.blogURL = 'https://b2.seia.io/'

  Aka.version = '0.0.1'
  Aka.release = 1219

  // NOTE: Aka:Loader
  Aka.loader = document.querySelector('#aka-loader')
  Aka.loader.image = document.querySelector('#aka-loader-image')

  // NOTE: Aka:UpdateNotify
  Aka.updatenotify = document.querySelector('#aka-updatenotify')
  Aka.updatenotify.message = document.querySelector('#aka-updatenotify-message')
  Aka.updatenotify.message.text = document.querySelector('#aka-updatenotify-message-text')
  Aka.updatenotify.message.confirm = document.querySelector('#aka-updatenotify-message-confirm')

  // NOTE: Aka:App
  Aka.app = document.querySelector('#aka-app')

  // NOTE: Aka:Header
  Aka.header = document.querySelector('#aka-header')
  Aka.header.text = document.querySelector('#aka-header-text')
  Aka.header.text.title = document.querySelector('#aka-header-text-title')
  Aka.header.text.paragraph = document.querySelector('#aka-header-text-paragraph')
  Aka.header.text.button = document.querySelector('#aka-header-text-button')

  // NOTE: Aka:Navbar (inner at Aka:Header)
  Aka.navbar = document.querySelector('#aka-navbar')
  Aka.navbar.input = document.querySelector('#aka-navbar-input')
  Aka.navbar.input.button = document.querySelector('#aka-navbar-input-button')

  // NOTE: Aka:Footer
  Aka.footer = document.querySelector('#aka-footer')

  return Aka
}

function getWebContent(url) {
  let request = new XMLHttpRequest()

  request.open('GET', url, false)
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; Charset=utf-8')

  request.send(null)

  if (request.readyState === 4  && request.status === 200) {
    return request.responseText
  } else {
    return request.status
  }
}

function startupAkaPage(Aka) {
  function checkUpdate() {
    let latestRelease = getWebContent('./release')

    if (latestRelease > Aka.release) {
      Aka.updatenotify.message.text.innerHTML =
        'Aka 앱을 버전 ' + Aka.release + '에서 ' +
        '버전 ' + latestRelease + '로 업데이트할 수 있습니다.'
      Aka.updatenotify.style.display = 'block'
    }
  }
  function confirmUpdate() {
    Aka.loader.image.innerHTML = '잠시만 기다려주세요, 앱을 업데이트하고 있습니다'

    Aka.loader.style.display = 'block'

    Aka.header.style.display = 'none'
    Aka.app.style.display = 'none'

    setTimeout(function() {
      window.location.reload(true)
    }, 1000)
  }
  function searchPost() {
    if (event.keyCode == 13) {
      location.href =
        Aka.blogURL + '?s=' +
        Aka.navbar.input.value
      Aka.navbar.input.value = ''
    }
  }

  /*
   * Initialize event listeners for components.
   */
  Aka.navbar.input.addEventListener('keydown', searchPost)
  Aka.navbar.input.button.addEventListener('click', searchPost)

  Aka.updatenotify.message.confirm.addEventListener('click', confirmUpdate)

  /*
   * Initialize interval tasks for components.
   */
  // NOTE: First burn group.
  checkUpdate()

  // NOTE: Interval handlers.
  setInterval(() => checkUpdate(), 1000 * 30)
}

const eventHandlers = {
  DOMContentLoaded: function() {
    try {
      const Aka = registerAkaComponents()

      /*
       * Initialize UI components
       */
      $('.ui.dropdown').dropdown()

      // NOTE: Start up.
      startupAkaPage(Aka)

      setTimeout(function() {
        Aka.loader.image.innerHTML = '모두 완료되었습니다'
      }, 500)
      setTimeout(function() {
        Aka.loader.style.display = 'none'

        Aka.header.style.display = 'block'
        Aka.app.style.display = 'block'
        Aka.footer.style.display = 'block'
      }, 1000)
    } catch (error) {
      console.error(error)

      Aka = {
        // NOTE: Try initializing DOM again and reload.
      }
      Aka.loader = document.querySelector('#aka-loader')

      if (Aka.loader !== null) {
        Aka.loader.image = document.querySelector('#aka-loader-image')
        Aka.loader.image.innerHTML = '무언가 부서졌어요! 문제를 해결하는 중입니다'
      } else {
        alert('무언가 부서졌어요! 문제를 해결하는 중입니다')
      }

      setTimeout(function() {
        window.location.reload(true)
      }, 1000 * 15)
    }
  }
}

document.addEventListener('DOMContentLoaded', eventHandlers.DOMContentLoaded)
