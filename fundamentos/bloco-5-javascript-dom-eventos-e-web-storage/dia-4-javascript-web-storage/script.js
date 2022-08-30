const selectBackground = document.querySelector('#backGround');
const textColor = document.querySelector('#textColor');

selectBackground.addEventListener('change', changeBackground)
textColor.addEventListener('change', changeTextColor)

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
