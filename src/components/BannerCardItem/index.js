// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {eachCard} = props
  const {headerText, description, className} = eachCard
  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
