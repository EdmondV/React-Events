 import { createReducer, createActions } from 'reduxsauce'

 const { Types, Creators } = createActions({
    updateState: ['data'],
    addToFavorites: ['data']
  })

export const RequestsTypes = Types
export default Creators

const events = [
  {
    title: "Концерт Depeche Mode",
    description: "Описание концерта здесь",
    price: 320,
    type: "concert",
  },
  {
    title: "Выставка Модильяни",
    description: "Российские ценители живописи смогут увидеть уникальное собрание картин, написанных в первой половине прошлого столетия мастерами Парижской школы. Полотна именитых живописцев Монпарнаса из коллекции Йонаса Неттера представит зрителям Музей Фаберже. Приходите смотреть на работы Модильяни, Утрилло, Сутина, Дерена и других знаменитых художников.",
    price: 200,
    type: "exhibition",
  },
  {
    title: "Проект «Эрмитаж. Погружение в историю»",
    description: "Описание выставки здесь",
    price: 310,
    type: "exhibition",
  },
  {
    title: "Концерт Tyler, the Creator",
    description: "Описание концерта здесь",
    price: 340,
    type: "concert",
  },
  {
    title: "Выставка «Климт — Ожившие полотна»",
    description: "Описание выставки здесь",
    price: 250,
    type: "exhibition",
  },
  {
    title: "Концерт ABBA",
    description: "Описание концерта здесь",
    price: 380,
    type: "concert",
  },
  {
    title: "Выставка «Марк Шагал. La Bible»",
    description: "Описание выставки здесь",
    price: 400,
    type: "exhibition",
  },
  {
    title: "Выставка «Внутренний свет»",
    description: "Описание выставки здесь",
    price: 120,
    type: "exhibition",
  },
  {
    title: "Концерт NICKELBACK",
    description: "Описание концерта здесь",
    price: 2500,
    type: "concert",
  },
  {
    title: "Концерт DEEP PURPLE - ЮБИЛЕЙНЫЙ КОНЦЕРТ 50 ЛЕТ",
    description: "Описание концерта здесь",
    price: 2000,
    type: "concert",
  },
  {
    title: "Концерт THIRTY SECONDS TO MARS",
    description: "Описание концерта здесь",
    price: 3000,
    type: "concert",
  },
  {
    title: "Музей автомобилей Retro Car Show",
    description: "Описание выставки здесь",
    price: 500,
    type: "exhibition",
  },
]

 export const INITIAL_STATE = {
   	events: JSON.parse(localStorage.getItem('/events')) || events,
    location: localStorage.getItem('location') || 'Events',
}

export const updateState = (state, { data }) => {
  	return { ...state, ...data }
}

export const addToFavorites = (state, { data }) => {
    const events = state.events
    const newData2 = events.map((content) => {
      if (content.title === data.title) {
        content.favorite === true  ? content.favorite = false : content.favorite = true
      }
      return content
    })
    console.log(newData2);
    localStorage.setItem('/events', JSON.stringify(newData2))
  	return { ...state, events: newData2 }
}

 export const reducer = createReducer(INITIAL_STATE, {
    [Types.UPDATE_STATE]: updateState,
    [Types.ADD_TO_FAVORITES]: addToFavorites,
})
