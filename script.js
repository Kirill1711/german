let btn_top = document.querySelector('.btn__up');

btn_top.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
});