'use strict'

const API_URL = 'https://mature-instinctive-hail.glitch.me/';


const card = document.querySelector('.card');
const cardTitle = document.querySelector('.card__title');
const cardContacts = document.querySelector('.card__contacts');

const cardImage = document.querySelector('.card__image')
const cardFrom = document.querySelector('.card__from')
const cardTo = document.querySelector('.card__to')
const cardMessage = document.querySelector('.card__message')

const rearrangeElement = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 580) {
    card.after(cardContacts)
  } else {
    cardTitle.after(cardContacts)
  }
};

const getIdFromUrl = () => {
  const params = new URLSearchParams(location.search)
  return params.get('id')
}

const getGiftData = async(id) => {
  try {
    const response = await fetch(`${}`)
  } catch (error) {
    
  }
};

const init = async() => {
  rearrangeElement()
  window.addEventListener('resize', rearrangeElement)

  const id = getIdFromUrl();
  const data = await getGiftData(id)
};

init();





