function pick(target) {
  return document.querySelector(target)
}

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
function remodel(target, content) {
  pick(target).setAttribute('class', content)
}

// Semantic-UI migrated
function toggleSidebar(target) {
  $('.ui.sidebar' + target)
    .sidebar('toggle')
  ;
}
$('.menu .item')
  .tab()
;

// Execute to make up the site enviroment
document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('.additional').style.display = 'none';
})
