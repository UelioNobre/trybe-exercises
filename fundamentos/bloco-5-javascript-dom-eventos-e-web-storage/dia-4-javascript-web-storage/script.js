const selectBackground = document.querySelector('#backGround');
const textColor = document.querySelector('#textColor');
const textSize = document.querySelector('#textSize');
const textLineHeight = document.querySelector('#textLineHeight');
const textFontFamily = document.querySelector('#textFontFamily');


selectBackground.addEventListener('change', changeBackground)
textColor.addEventListener('change', changeTextColor)
textSize.addEventListener('change', changeTextSize)
textLineHeight.addEventListener('change', changeTextLineHeight)
textFontFamily.addEventListener('change', changeTextFontFamily)

console.log(selectBackground)

// 1 Background
function changeBackground(e) {
  document.querySelector('body').style.backgroundColor = e.target.value;
}

// 2 Text Color
function changeTextColor(e) {
  const tagsP = document.getElementsByTagName('p');
  for (let tagP of tagsP) {
    tagP.style.color = e.target.value;
  }
}

// 3 Font Size
function changeTextSize(e) {
  const tagsP = document.getElementsByTagName('p');
  for (let tagP of tagsP) {
    tagP.style.fontSize = e.target.value + 'px';
  }
}

// 4 Line Height
function changeTextLineHeight(e) {
  const tagsP = document.getElementsByTagName('p');
  for (let tagP of tagsP) {
    tagP.style.lineHeight = e.target.value + '%';
  }
}

// 5 Font Family
function changeTextFontFamily(e) {
  const tagsP = document.getElementsByTagName('p');
  for (let tagP of tagsP) {
    tagP.style.fontFamily = e.target.value;
  }
}
