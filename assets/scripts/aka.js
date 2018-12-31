// NOTE: Destructuring functions and objectives
const pick = target => {
  return document.querySelector(target)
}

// NOTE: General functions
function appearance(target) {
  if (pick(target).style.display === 'block') {
    pick(target).style.display = 'none'
  } else {
    pick(target).style.display = 'block'
  }
}
function alteration(target, content) {
  pick(target).innerHTML = content
}
function restyle(target, content) {
  pick(target).setAttribute('class', content)
}

// Semantic-UI migrated
function toggleSidebar(target) {
  $('.ui.sidebar' + target)
    .sidebar('toggle')
  ;
}

// NOTE: After DOM contents are loaded
document.addEventListener('DOMContentLoaded', function(event) {
  // ...
})
