document.addEventListener('AkaInitialized', function() {
  try {
    const Aka = registerAkaComponents()

    Aka.marketplace = document.querySelector('#aka-marketplace')
    Aka.marketplace.cards = document.querySelector('#aka-marketplace-cards')

    Aka.marketplace.placeholder = document.querySelector('#aka-marketplace-placeholder')

    setTimeout(function() {
      const buffer = getWebContent('./assets/data/marketplace.json')
      const data = JSON.parse(buffer)

      if (data !== []) {
        Aka.marketplace.placeholder.style.display = 'none'

        data.forEach(function(property) {
          let card = document.createElement('div')
          let cardContent = document.createElement('div')
          let cardContentHeader = document.createElement('div')
          let cardContentMeta = document.createElement('div')
          let cardContentDescription = document.createElement('div')
          let cardExtraContent = document.createElement('a')

          let cardExtraContentIcon = document.createElement('i')

          card.setAttribute('class', 'ui card')
          cardContent.setAttribute('class', 'content')
          cardContentHeader.setAttribute('class', 'header')
          cardContentMeta.setAttribute('class', 'meta')
          cardContentDescription.setAttribute('class', 'description')

          cardExtraContent.setAttribute('class', 'extra content')
          cardExtraContent.setAttribute('onclick', 'showModal(\'' + property.id + '\');')

          cardExtraContentIcon.setAttribute('class', 'check icon')

          cardContentHeader.innerHTML = property.title
          cardContentMeta.innerHTML = property.price
          cardContentDescription.innerHTML = property.description

          cardExtraContent.appendChild(cardExtraContentIcon)
          cardExtraContent.appendChild(document.createTextNode(property.status))

          cardContent.appendChild(cardContentHeader)
          cardContent.appendChild(cardContentMeta)
          cardContent.appendChild(cardContentDescription)

          card.appendChild(cardContent)
          card.appendChild(cardExtraContent)

          Aka.marketplace.cards.appendChild(card)
        })
      }
    }, 3000)
  } catch (error) {
    console.error(error)

    Aka = {
      // NOTE: Try initializing DOM again and reload.
    }
    Aka.loader = document.querySelector('#aka-loader')

    if (Aka.loader !== null) {
      Aka.loader.image = document.querySelector('#aka-loader-image')
      Aka.loader.image.innerHTML = '무언가 부서졌어요! 문제를 해결하는 중입니다'

      Aka.loader.style.display = 'block'

      Aka.header.style.display = 'none'
      Aka.app.style.display = 'none'
      Aka.footer.style.display = 'none'
    } else {
      alert('무언가 부서졌어요! 문제를 해결하는 중입니다')
    }

    setTimeout(function() {
      window.location.reload(true)
    }, 1000 * 15)
  }
})
