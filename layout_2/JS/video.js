document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("video");
  const playButton = document.querySelector(".play__btn");
  const volumeSlider = document.getElementById("sound__level");
  const durationSlider = document.getElementById("duration__level");
  const durationImage = document.querySelector(".duration__img");

  // Установка начальной громкости и продолжительности
  video.volume = 0.5; // Начальная громкость 50%
  volumeSlider.value = video.volume * 100;
  durationSlider.value = 0;

  // Функция для запуска/остановки видео
  function togglePlay() {
      if (video.paused) {
          video.play();
          playButton.classList.add("play__btn--active");
          durationImage.classList.add("duration__img--active"); // Добавление класса при воспроизведении
      } else {
          video.pause();
          playButton.classList.remove("play__btn--active");
          durationImage.classList.remove("duration__img--active"); // Удаление класса при остановке
      }
  }

  video.addEventListener("click", togglePlay);
  playButton.addEventListener("click", togglePlay);

  // Изменение громкости
  volumeSlider.addEventListener("input", function() {
      video.volume = this.value / 100;
  });

  // Изменение текущего времени видео
  durationSlider.addEventListener("input", function() {
      video.currentTime = (this.value / 100) * video.duration;
  });

  // Обновление слайдера продолжительности
  video.addEventListener("loadedmetadata", function() {
      durationSlider.max = video.duration;
  });

  video.addEventListener("timeupdate", function() {
      durationSlider.value = (video.currentTime / video.duration) * 100;
  });
});
