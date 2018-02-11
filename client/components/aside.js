import React from 'react'
import Button from '../common/button'
import Input from '../common/input'

const Aside = ({ addFilter, addSort, searchInfo, selectedSorting, selectedFilter }) => {
  return (
    <div className='aside'>
      <div className='aside_backgound'>
        <div className='aside_content'>
          <div>
            <span>Фильтр</span>
              <Button
                className={selectedFilter === 'exhibition' ? 'fav' : ''}
                onClick={() => addFilter({ data: 'exhibition' })}
              >Выставки</Button>
              <Button
                className={selectedFilter === 'concert' ? 'fav' : ''}
                onClick={() => addFilter({ data: 'concert' })}
              >Концерты</Button>
              <Button
                className={!selectedFilter ? 'fav' : ''}
                onClick={() => addFilter({ data: '' })}
              >Все мероприятия</Button>
          </div>
          <div>
            <span>Сортировать цену</span>
              <Button
                className={selectedSorting === 'asc' ? 'fav' : ''}
                onClick={() => addSort({ data: 'asc' })}>По возрастанию</Button>
              <Button
                className={selectedSorting === 'desc' ? 'fav' : ''}
                onClick={() => addSort({ data: 'desc' })}
              >По убыванию</Button>
          </div>
          <div>
            <span>Поиск</span>
              <Input onChange={(e) => searchInfo({ data: e.target.value })} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
