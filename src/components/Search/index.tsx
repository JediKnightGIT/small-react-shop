import React, { useRef, useState, useMemo } from 'react'
import { ReactSVG } from 'react-svg'
import debounce from 'lodash.debounce'

import styles from './search.module.scss'
import searchIcon from '../../assets/img/search-icon.svg'
import { useAppDispatch } from '../../redux/hooks'
import { setSearch } from '../../redux/slices/filter-slice'

const Search: React.FC = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onClearClick = () => {
    dispatch(setSearch(''))
    setValue('')
    inputRef.current?.focus()
  }

  const updateSearchValue = useMemo(
    () => debounce((str: string) => {
      dispatch(setSearch(str));
    }, 1000),
    [dispatch],
  );

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <ReactSVG className={styles.searchIcon} src={searchIcon} />
      <input ref={inputRef} onChange={onChangeSearch} value={value} className={styles.input} type="text" placeholder="Search..." />
      <span onClick={onClearClick}>&times;</span>
    </div>
  )
}

export default Search