window.onload = function () {
  // Get the content in the route

  var H_1 = document.querySelector('.main-detail-title>h2:nth-child(1)')
  var H_2 = document.querySelector('.main-detail-title>h2:nth-child(2)')
  var left_text = document.querySelector('.main-detail-text p')
  var right_text1 = document.querySelector('.right-text p:nth-child(1)')
  var right_text2 = document.querySelector('.right-text p:nth-child(2)')
  var right_img = document.querySelector('.right-img img')
  var url = decodeURI(window.location.href)
  var id = fn(url).id
  console.log(id)
  function fn(url) {
    let obj = {}
    var arr = url.split('?')[1].split('&')
    arr.forEach(item => {
      obj[item.split('=')[0]] = item.split('=')[1]
    })

    return obj
  }

  // Get info according to id
  var obj = info.find(v => v.id == id)
  // Return the info to interface
  switch (true) {
    case id == 1:
      left_text.innerHTML = obj.left_text
      H_1.innerHTML = obj.text
      H_2.innerHTML = obj.title
      right_text1.innerHTML = obj.right_text1
      right_text2.innerHTML = obj.right_text2
      right_img.src = obj.img
      break
    case id == 2:
      left_text.innerHTML = obj.left_text
      H_1.innerHTML = obj.text
      H_2.innerHTML = obj.title
      right_text1.innerHTML = obj.right_text1
      right_text2.innerHTML = obj.right_text2
      right_img.src = obj.img
      break
    case id == 3:
      left_text.innerHTML = obj.left_text
      H_1.innerHTML = obj.text
      H_2.innerHTML = obj.title
      right_text1.innerHTML = obj.right_text1
      right_text2.innerHTML = obj.right_text2
      right_img.src = obj.img
      break
    case id == 4:
      left_text.innerHTML = obj.left_text
      H_1.innerHTML = obj.text
      H_2.innerHTML = obj.title
      right_text1.innerHTML = obj.right_text1
      right_text2.innerHTML = obj.right_text2
      right_img.src = obj.img
      break
  }
}
