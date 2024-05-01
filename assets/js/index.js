const menu = document.querySelector('.menu')

const list = document.querySelector('.unlist')

const open = document.querySelector('.open')
const close = document.querySelector('.close')

close.style.display = 'none'

menu.addEventListener('click', () => {
  if(list.classList == 'unlist'){
    close.style.display = 'flex'
    open.style.display = 'none'
    list.classList.remove('unlist')
    list.classList.add('list')
  } else {
    close.style.display = 'none'
    open.style.display = 'flex'
    list.classList.remove('list')
    list.classList.add('unlist')
  }
})