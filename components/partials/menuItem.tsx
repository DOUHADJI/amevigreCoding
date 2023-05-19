import { FunctionComponent } from 'react'


type MenuItemProps = {
title : string
}
const MenuItemFc : FunctionComponent<MenuItemProps> = ({title}) => {
    return (
        <div>
        <p className="text-white text-[15px] px-[15px] tracking-[3px] uppercase  font-prompt font-[600]">
          {title}
        </p>
        </div>
    )
}

export default MenuItemFc