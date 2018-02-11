export const sortPrice = (order='asc') => {
  return function compareAge(eventA, eventB) {
    let sorted = []
    sorted = eventA.price - eventB.price
    return order === 'asc' ? sorted * 1 : sorted * -1
  }
}
