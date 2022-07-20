import './ListItem.css'

export const ListItemLogo = ({ url }) => {
  return (
    <div className="ListItemIconContainer">
      <img src={url} className="ListItemIcon" alt="" />
    </div>
  )
}
