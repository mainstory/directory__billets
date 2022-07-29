//@ кнопки
// data-popup-login-btn
//@ основное тело
// data-popup-login
//@ крестики
// data-popup-login-cross

function popupLogin() {
   const btns = document.querySelectorAll('[data-popup-login-btn]')
   const popup = document.querySelector('[data-popup-login]')
   const overflow = document.querySelector('body')

   const crosses = document.querySelectorAll('[data-popup-login-cross]')

   const BurgerBody = document.querySelector('[data-burger-main-body]')

   if (btns.length > 0) {
      btns.forEach((btn) => {
         btn.addEventListener('click', (event) => {
            popup.classList.add('_active')
            overflow.classList.add('_lock')
         })
      })

      crosses.forEach((cross) => {
         cross.addEventListener('click', (event) => {
            popup.classList.remove('_active')
            overflow.classList.remove('_lock')
            // @ BurgerBody
            BurgerBody.classList.remove('_active')
         })
      })

      popup.addEventListener('click', (event) => {
         if (!event.target.closest('[data-popup-login-main-body]')) {
            popup.classList.remove('_active')
            overflow.classList.remove('_lock')
            // @ BurgerBody
            BurgerBody.classList.remove('_active')
         }
      })
   }

}
popupLogin()



