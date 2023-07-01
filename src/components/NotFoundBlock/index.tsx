import React from 'react'

import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found
      </h1>

      <p>Unfortunately, this page does not exist.</p>
    </div>
  )
}
