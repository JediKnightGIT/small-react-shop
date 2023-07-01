import React from "react"
import ContentLoader from "react-content-loader"

const Placeholder: React.FC = () => (
  <ContentLoader
    className="item-card"
    speed={2}
    width={260}
    height={453}
    viewBox="0 0 260 453"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="260" height="260" />
    <rect x="0" y="276" rx="10" ry="10" width="260" height="25" />
    <rect x="0" y="325" rx="10" ry="10" width="260" height="53" />
    <rect x="0" y="402" rx="10" ry="10" width="75" height="27" />
    <rect x="105" y="392" rx="30" ry="30" width="150" height="45" />
  </ContentLoader>
)

export default Placeholder

