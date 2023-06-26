import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './pagination.module.scss'

export const Pagination = ({ page, pageOnChange }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => pageOnChange(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={page - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  )
}
