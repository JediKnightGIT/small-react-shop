import React, { useState } from "react"

const categories = ['All', 'PS5', 'PS4', 'Xbox Series X|S', 'PC', 'Nintendo Switch']

const Categories: React.FC = () => {
  const [active, setActive] = useState(0)


  const onActive = (e: React.MouseEvent) => {
    setActive(categories.indexOf((e.target as HTMLLIElement).innerText))
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((cat, i) => {
            return <li
              key={cat}
              onClick={onActive}
              className={i === active ? 'active' : ''}>
              {cat}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Categories