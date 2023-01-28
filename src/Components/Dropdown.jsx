import React from "react";
import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  /*
o depthLevel(Nivel de profundidade ) serve para podemos adicionar setas variadas dinamicamente para mostrar que
existe um menu suspenso. Em segundo lugar, podemos usá-lo para detectar uma lista suspensa de nível “segundo e superior”,
posicionando-os logicamente à direita do submenu.
*/

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    /* a classe muda de foma dinamica para alterar o css de acordo com o estado do menu.
    caso  o menu esteja aberto, ou seja, dropdown seja true, então o css mudara para display: block
    fazendo com que o menu suspenso seja exibido. Caso contrario o css mudará para display?: none assim escondendo o menu suspenso. */
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {/* aqui ele faz um map nos itens do submenu */}
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        // <li key={index} className="menu-items">
        //   <a href={submenu.url}>{submenu.title}</a>
        // </li>
      ))}
    </ul>
  );
};

export default Dropdown;
