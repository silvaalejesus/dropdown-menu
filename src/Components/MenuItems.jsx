import React, { useState } from "react";
import Dropdown from "./Dropdown";

/* No MenuItems componente, receberemos a propriedade items e exibiremos os itens do menu.
Também verificaremos se os itens têm um submenue, em seguida, exibiremos um menu suspenso. */
const MenuItems = ({ items, depthLevel }) => {
  // estado que indica se o menu está aberto ou fechado
  const [openMenu, setDropdown] = useState(false);

  return (
    <li className="menu-items">
      {/* verifica qual item tem submenu */}
      {items.submenu ? (
        <>
          {/* o button abre o  menu suspenso */}
          <button
            type="button"
            aria-expanded={openMenu ? true : false}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {/* o menuItems acessa o depthLevel para exibir a seta no menu suspenso */}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          {/* exibe o menu suspenso */}
          <Dropdown
            submenus={items.submenu}
            dropdown={openMenu}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        // exibe o menu sem submenus
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
