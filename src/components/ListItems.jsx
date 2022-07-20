import {ListItem} from "./ListItem";

export const ListItems = ({ data }) => {
  return data.map(({ flag, name, monthly_profit }, index) => {
    return (
      <ListItem key={name}>
        <div>
          <ListItem.Logo url={flag} />
        </div>
        <div className="ListItemInfo">
          <ListItem.Title title={name} index={index + 1} />
          <ListItem.Profit profit={monthly_profit} />
        </div>
      </ListItem>
    )
  })
}
