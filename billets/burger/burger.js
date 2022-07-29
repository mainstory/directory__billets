// иконка
//@ data-burger-icon
// основное тело
//@ data-burger-main-body
// крестик
//@ data-menu-cross

function burgerFn() {
   const btns = document.querySelectorAll('[data-burger-icon]')
   const body = document.querySelector('[data-burger-main-body]')
   const docBody = document.querySelector('body')
   const cross = document.querySelector('[data-menu-cross]')

   if (btns.length > 0) {

      btns.forEach((btn) => {
         btn.addEventListener('click', (event) => {
            body.classList.toggle('_active')
            docBody.classList.toggle('_lock')
         })
      })

      //@ on/off
      // cross.addEventListener('click', (event) => {
      //    body.classList.remove('_active')
      //    docBody.classList.remove('_lock')
      // })

      window.addEventListener('click', (event) => {
         if (!event.target.closest('[data-burger-main-body]') && !event.target.closest('[data-burger-icon]')) {
            body.classList.remove('_active')
            docBody.classList.remove('_lock')
         }
      })


   }
}
burgerFn()














