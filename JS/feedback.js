document.addEventListener('DOMContentLoaded', function() {
    const feedbackList = document.querySelector('.feedback__list');
    const feedbackItems = document.querySelectorAll('.feedback__item');
    const feedbackWraps = document.querySelectorAll('.feedback__wrap');
  
    feedbackList.addEventListener('click', function(e) {
      // Проверяем, что клик был именно по кнопке
      if (e.target.closest('.feedback__button')) {
        // Получаем id элемента списка, в котором была кнопка
        const currentId = e.target.closest('.feedback__item').id;
        
        // Переключаем класс active для элемента списка
        feedbackItems.forEach(item => {
          if (item.id === currentId) {
            item.classList.add('feedback__item--active');
          } else {
            item.classList.remove('feedback__item--active');
          }
        });
  
        // Показываем соответствующий блок отзыва и скрываем остальные
        feedbackWraps.forEach(wrap => {
          if (wrap.id === currentId) {
            wrap.classList.add('feedback__wrap--active');
          } else {
            wrap.classList.remove('feedback__wrap--active');
          }
        });
      }
    });
  });
  
