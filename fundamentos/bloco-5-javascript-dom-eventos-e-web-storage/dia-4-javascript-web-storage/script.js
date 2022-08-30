const selectBackground = document.querySelector('#backGround');
selectBackground.addEventListener('change', changeBackground)
console.log(selectBackground)

// 1
function changeBackground(e) {
  document.querySelector('body').style.backgroundColor = e.target.value;
}