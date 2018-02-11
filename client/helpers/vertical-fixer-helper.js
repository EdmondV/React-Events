/**
 * Хелпер для фиксирования элемента при скролле
 * @param {Array} root                 Элемент, фиксируемый при скролле
 * @param {Array} topLimiter           Элемент, ограничивающий минимальное расстояние фиксации эл-та
 * @param {Array} bottomLimiter        Элемент, ограничивающий максимальное расстояние фиксации эл-та
 * @param {Number} opt_topMargin       Отступ фиксируемого эл-та от верха страницы при скролле
 * @param {Number} opt_bottomMargin    Дополнительный отступ снизу
 * @param {Number} headerHeight        Дополнительный отступ сверху
 */
export const VerticalFixer = (
  root,
  topLimiter,
  bottomLimiter,
  opt_topMargin = 25,
  opt_bottomMargin = 0,
  headerHeight = 0,
  fixedWidth = 300,
) => {
  let bounds = getBounds()
  let freeTop = window.pageYOffset + opt_topMargin
  let usedClass = root.classList[0]
  if (root) {
    if (freeTop < bounds.top) {
      root.className = ${usedClass} stopped
      root.style.top = ''
    } else if (freeTop > bounds.top && freeTop < bounds.bot) {
      root.style.top = ${opt_topMargin}px
      root.style.width = ${fixedWidth}px
      root.className = ${usedClass} active
    } else if (freeTop > bounds.bot) {
      root.style.top = ${bounds.bot - opt_bottomMargin - headerHeight}px
      root.className = ${usedClass} stopped
    }
  }
  /**
   * Вычисляем отступ сверху и нижнюю точку остановки блока
   * @return {{ top: number, bottom: number }}
   */
  function getBounds() {
    let top = topLimiter.offsetTop + headerHeight
    let bot =
              bottomLimiter.offsetTop +
              bottomLimiter.offsetHeight +
              headerHeight -
              root.clientHeight -
              opt_bottomMargin
    return { top, bot }
  }
}
