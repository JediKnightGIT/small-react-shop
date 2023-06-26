import { useState } from "react"

export default function Categories() {
  const [active, setActive] = useState(0)

  const categories = ['All', 'PS5', 'PS4', 'Xbox Series X|S', 'PC', 'Nintendo Switch']

  const onActive = (e) => {
    setActive(categories.indexOf(e.target.innerText))
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