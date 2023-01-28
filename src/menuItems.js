/*OBS: Observe que você pode ignorar a barra /nos submenuURLs.
No nosso caso aqui, não importa se adicionamos ou não.
No entanto, se você deseja obter uma rota aninhada dinâmica, não deve incluí-la.*/
export const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/Services",
    submenu: [
      {
        title: 'web design',
        url: "/web-design",
      },
      {
        title: 'web development',
        url: 'web-dev',
        submenu: [
          {
            title: 'Frontend',
            url: 'frontend',
          },
          {
            title: "Backend",
            submenu: [
              {
                title: 'NodeJS',
                url: 'node',
              },
              {
                title: 'PHP',
                url: 'php',
              },
            ]
          }
        ]
      },
      {
        title: 'SEO',
        url: 'seo',
      },
    ]
  }, {
    title: "About",
    url: "/About",
  },
];



