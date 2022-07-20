import './ListItem.css'

export const ListItemTitle = ({ title, index }) => {
  return (
    <div className="ListItemTitle">
      <h5>{index}. {title}</h5>
    </div>
  )
}
