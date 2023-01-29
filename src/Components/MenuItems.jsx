import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";

/* No MenuItems componente, receberemos a propriedade items e exibiremos os itens do menu.
Também verificaremos se os itens têm um submenue, em seguida, exibiremos um menu suspenso. */
const MenuItems = ({ items, depthLevel }) => {
  // estado que indica se o menu está aberto ou fechado
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  //   lógica para Fechar o menu suspenso quando os usuários clicarem fora dele
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  /*
  Com o código, o onMouseEnter manipulador é invocado quando o ponteiro do mouse se move para um item de menu.
  E a partir daí verificamos se a largura interior da janela é maior que 960px, então abrimos o dropdown.
  Sempre que o mouse sai do item de menu, invocamos o onMouseLeavemanipulador, que então fecha o menu suspenso.
   */
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* verifica qual item tem submenu */}
      {items.submenu ? (
        <>
          {/* o button abre o  menu suspenso */}
          <button
            type="button"
            aria-expanded={dropdown ? true : false}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {/* o menuItems acessa o depthLevel para exibir a seta no menu suspenso */}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          {/* exibe o menu suspenso */}
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
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
