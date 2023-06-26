export default function Platforms({ id, platformOnClick }) {

  const platforms = ['All', 'PS5', 'PS4', 'Xbox Series X|S', 'PC', 'Nintendo Switch']

  return (
    <div className="categories">
      <ul>
        {
          platforms.map((plat, i) => {
            return <li
              key={plat}
              onClick={() => platformOnClick(i)}
              className={i === id ? 'active' : ''}>
              {platforms[i]}
            </li>
          })
        }
      </ul>
    </div>
  )
}