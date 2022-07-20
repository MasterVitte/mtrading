import './ListItem.css'
import {ListItemLogo} from "./ListItemLogo";
import {ListItemTitle} from "./ListItemTitle";
import {ListItemProfit} from "./ListItemProfit";

export const ListItem = ({ children }) => {
  return (
    <div className="ListItemContainer">{children}</div>
  )
}

ListItem.Logo = ListItemLogo
ListItem.Title = ListItemTitle
ListItem.Profit = ListItemProfit
