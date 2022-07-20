import './ListItem.css'

export const ListItemProfit = ({ profit }) => {
  const formattedProfit = profit > 0 ? `+${profit}%` : `${profit}%`
  return (
    <div className="ListItemProfit" style={{ color: profit > 0 ? 'var(--green)' : 'red' }}>{formattedProfit}</div>
  )
}
