const swiperThumb = new Swiper('.gift__swiper--thumb', {
  slidesPerView: "auto",
  spaceBetween: 12,
  freeMode: true,
  breakpoints: {
    320: {
      spaceBetween: 12,
    },
    1141: {
      spaceBetween: 16,
    }
  }
});

const swiperMain = new Swiper('.gift__swiper--card', {
  spaceBetween: 16,
  thumbs: {
    swiper: swiperThumb,
  } 
});

const phoneInputs = document.querySelectorAll('.form__field--phone');
const form = document.querySelector('.form');
const submitButton = document.querySelector('.form__button');

phoneInputs.forEach((item) => {
  IMask(item, {
    mask: "+{7}(000)000-00-00",
  })
})

const updateSubmitButton = () => {
  let isFormFilled = true;
  for  (const field of form.elements) {
    if (field.classList.contains('form__field')) {
      if (!field.value.trim()) {
        isFormFilled = false;
        break;
      }
    }
  }

  submitButton.disabled = !isFormFilled;
};

const phoneValidateOption = {
  presence: {
    message: 'Поле телефон обязательно для заполнения!',
  },
  format: {
    pattern: '\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}'
  }
}

form.addEventListener('input', updateSubmitButton)

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const errors = Validate(form, {
    sender_phone: ,
    receiver_phone:
  })
})
