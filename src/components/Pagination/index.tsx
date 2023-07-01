import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './pagination.module.scss'

type PaginationProps = {
  page: number,
  pageOnChange: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({ page, pageOnChange }) => (
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
