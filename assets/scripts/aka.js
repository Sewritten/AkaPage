/*
 *   AkaPage;
 * Copyright 2019 Seia-Soto. All rights reserved.
 */

let AkaComponents = {
  // NOTE: Initialize components.
}

AkaComponents.caches = null
AkaComponents.pushds = null

// NOTE: Preferences
//  ; Function:wpInsertPosts
const blogURI = 'https://b2.seia.io/'
const maxPost = 6
//  ; Function:alexaInsertRank
const queryDomain = 'seia.io'

// NOTE: Utilities
function requestData(url, callback) {
  console.log('AkaPage:requestData, requesting to ' + url)

  let request = new XMLHttpRequest()

  request.onreadystatechange = function() {
    if (request.readyState === 4  && request.status === 200) {
      callback(request.responseText)
    }
  }

  request.open('GET', url)
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; Charset=utf-8')

  request.send(null)
}
function parseXML(xml) {
  const xmlDOM = new DOMParser().parseFromString(xml, 'text/xml')

  return xmlDOM
}

function removeDisplayByElementsClassName(parentNode, className) {
  if (className) {
    let elements = document.querySelector(parentNode).querySelectorAll(className)

    for (var k = 0; k < elements.length; k++) {
      elements[k].style.display = 'none'
    }
  } else {
    document.querySelector(parentNode).style.display = 'none'
  }
}
function createPostCard(post) {
  let card = document.createElement('div')
  card.setAttribute('class', 'ui card')

  let cardContent = document.createElement('div')
  cardContent.setAttribute('class', 'content')

  let cardContentHeader = document.createElement('div')
  cardContentHeader.setAttribute('class', 'header')
  cardContentHeader.innerHTML = post.title.rendered

  let cardContentDescription = document.createElement('p')
  cardContentDescription.innerHTML = post.excerpt.rendered.replace(/\\n/gi, '').split('').slice(0, 50).join('') + '...'

  let cardButton = document.createElement('a')
  cardButton.setAttribute('class', 'ui bottom attached button')
  cardButton.setAttribute('href', post.link)

  let cardButtonIcon = document.createElement('i')
  cardButtonIcon.setAttribute('class', 'add icon')

  cardContent.appendChild(cardContentHeader)
  cardContent.appendChild(cardContentDescription)

  cardButton.appendChild(cardButtonIcon)
  cardButton.innerHTML += '\n더 읽기'

  card.appendChild(cardContent)
  card.appendChild(cardButton)

  return card
}
function createListItem(options) {
  let item = document.createElement('a')
  item.setAttribute('class', 'item')

  let icon = document.createElement('i')
  icon.setAttribute('class', 'right triangle icon')

  let itemContent = document.createElement('div')
  itemContent.setAttribute('class', 'content')

  let itemContentHeader = document.createElement('div')
  itemContentHeader.setAttribute('class', 'header')
  itemContentHeader.innerHTML = options.title

  let itemContentDescription = document.createElement('div')
  itemContentDescription.setAttribute('class', 'description')
  itemContentDescription.innerHTML = options.description

  return item
}

// NOTE: Section builders
function wpInsertPosts(responseText) {
  console.log('AkaPage:wpInsertPosts, got response from API route and now constructing cards')
  const posts = JSON.parse(responseText)

  // NOTE: Make big collection for posts:
  let cards = document.createElement('div')
  cards.setAttribute('class', 'ui cards')

  for (var i = 0; i < maxPost; i++) {
    const post = posts[i]

    cards.appendChild(createPostCard(post))
  }

  let recentFeed = document.querySelector('#recentFeed')

  removeDisplayByElementsClassName('#recentFeed', '.placeholder')
  recentFeed.appendChild(cards)
}

// NOTE: Aka
function AkaConstructor() {
  console.log('AkaPage, also we think User Interface is the language of the web.')
  console.log('----')

  requestData(blogURI + 'wp-json/wp/v2/posts', wpInsertPosts)
}

document.addEventListener('DOMContentLoaded', AkaConstructor)
