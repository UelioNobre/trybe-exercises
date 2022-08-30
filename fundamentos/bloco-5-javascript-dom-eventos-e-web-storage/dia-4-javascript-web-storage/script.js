const selectBackground = document.querySelector('#backGround');
const textColor = document.querySelector('#textColor');
const textSize = document.querySelector('#textSize');


selectBackground.addEventListener('change', changeBackground)
textColor.addEventListener('change', changeTextColor)
textSize.addEventListener('change', changeTextSize)

console.log(selectBackground)

// 1
function changeBackground(e) {
  document.querySelector('body').style.backgroundColor = e.target.value;
}

// 2
function changeTextColor(e) {
  const tagsP = document.getElementsByTagName('p');
  for (let tagP of tagsP) {
    tagP.style.color = e.target.value;
  }
  console.log(tagsP)
}

// 3
function changeTextSize(e) {
  const tagsP = document.getElementsByTagName('p');
  for (let tagP of tagsP) {
    tagP.style.fontSize = e.target.value + 'px';
  }
  console.log(tagsP)
}