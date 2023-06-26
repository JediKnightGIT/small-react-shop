import React, { useRef, useState, useMemo } from 'react'
import { ReactSVG } from 'react-svg'
import debounce from 'lodash.debounce'

import styles from './search.module.scss'
import searchIcon from '../../assets/img/search-icon.svg'
import { useAppDispatch } from '../../redux/hooks'
import { setSearch } from '../../redux/slices/filter-slice'

export default function Search() {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')
  const inputRef = useRef()

  const onClearClick = () => {
    dispatch(setSearch(''))
    setValue('')
    inputRef.current?.focus()
  }

  const updateSearchValue = useMemo(
    () => debounce((str) => {
      dispatch(setSearch(str));
    }, 1000),
    [dispatch],
  );

  const onChangeSearch = (e) => {
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