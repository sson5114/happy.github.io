window.onload = function () {
  // Click span and zoom
  var Allspan = document.getElementsByTagName('span')
  for (var i = 0; i < Allspan.length; i++) {
    Allspan[i].onclick = function () {
      if (this.className == 'open') {
        this.className = 'closed'
        this.nextElementSibling.className = 'hide'
      } else {
        var span = document.querySelector('ul.tree span.open')
        if (span) {
          span.className = 'closed'
          span.nextElementSibling.className = 'hide'
        }
        this.className = 'open'
        this.nextElementSibling.className = 'show'
      }
    }
  }
  // Get value of results
  var result = document.querySelector('.main-right ul')
  var results_li = result.getElementsByTagName('li')
  var Results = document.querySelector('#Results')

  Results.innerHTML = results_li.length + ' Results'

  Results.onclick = function () {
    location.reload()
  }

  // Showing the left side by clicking the right side
  var itemBtn = document.querySelectorAll('.one-menu ul li a')
  var right_item = document.querySelectorAll('.main-right ul li a')
  for (var i = 0; i < itemBtn.length; i++) {
    itemBtn[i].addEventListener('click', function () {
      const element1 = this.innerHTML
      if (element1) {
        for (let j = 0; j < right_item.length; j++) {
          var element2 = right_item[j]
          if (element1.toUpperCase() != element2.childNodes.item(3).innerHTML) {
            element2.childNodes.item(1).parentNode.parentNode.style.display =
              'none'
          } else {
            element2.childNodes.item(1).parentNode.parentNode.style.display =
              'block'
          }
        }
      }
    })
  }
}
