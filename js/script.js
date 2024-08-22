const API_URL = 'https://mature-instinctive-hail.glitch.me/';
// const API_URL = 'https://localhost:3000/';


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
const submitButton = form.querySelector('.form__button');
const cardInput = form.querySelector('.form__card');

const updateCardInput = () => {
  const activeSlide = document.querySelector('.gift__swiper--card .swiper-slide-active');

  const cardData = activeSlide.querySelector('.gift__card-image').dataset.card;
  cardInput.value = cardData;
};

updateCardInput()

swiperMain.on('slideChangeTransitionEnd', updateCardInput)

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
  format: {
    pattern: '\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}',
    message: 'Номер телефона должен соответствовать формату: "+7(ХХХ)ХХХ-ХХ-ХХ"',
  }
}

form.addEventListener('input', updateSubmitButton)

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const errors = validate(form, {
    sender_phone: phoneValidateOption,
    receiver_phone: phoneValidateOption,
  })

  if (errors) {
    for (const key in errors) {
      const errorString = errors[key];
      alert(errorString)
    }
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch(`${API_URL}/api/gift`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (response.ok) {
      prompt('Открытка успешно сохранена. Доступна по дресу: ', `${location.origin}/card.html?id=${result.id}`,);
      form.reset()
    } else {
      alert(`Ошибка при отправке: ${result.message}`)
    }

  } catch (error) {
    console.error(`Ошибка при отправке: ${error}`)
    alert('Произошла ошибка! Попробуйте позже.')
  }

})
