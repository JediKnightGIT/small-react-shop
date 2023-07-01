import { useState } from "react"

type ItemCardProps = {
  title: string;
  price: number;
  imageUrl: string;
  platforms: string[]
}

const ItemCard: React.FC<ItemCardProps> = ({ title, price, imageUrl, platforms }) => {
  const [activeType, setActiveType] = useState(0)

  const title2ImgLink = (title: string) => {
    return `/assets/${title.split(' ').join('_').toLowerCase()}`
  }

  return (
    <div className="item-card">
      <img
        className="item-card__imag"
        src={title2ImgLink(title)}
        width="260" height="260"
        alt={title}
      />
      <h4 className="item-card__title">{title}</h4>
      <div className="item-card__selector">
        <ul>
          {
            platforms.map((platform: string, i: number) =>
              <li
                key={platform}
                onClick={() => setActiveType(i)}
                className={activeType === i ? 'active' : ''}>
                {platform}
              </li>
            )
          }
        </ul>
        {/* <ul>
          {
            sizes.map((size, i) => <li key={size} onClick={() => setActiveSize(i)} className={activeSize === i ? 'active' : ''}>{size} см.</li>)
          }
        </ul> */}
      </div>
      <div className="item-card__bottom">
        <div className="item-card__price">${price}</div>
        <button className="button button--outline button--add" type="button">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add to cart</span>
          <i>1</i>
        </button>
      </div>
    </div>
  )
}

export default ItemCard