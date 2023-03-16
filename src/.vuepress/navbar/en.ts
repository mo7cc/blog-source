import { navbar } from 'vuepress-theme-hope';

export const enNavbar = navbar([
  '/en/',
  { text: 'Demo', icon: 'discover', link: '/en/demo/' },
  {
    text: 'Posts',
    icon: 'edit',
    prefix: 'posts/',
    children: [
      {
        text: 'Apple',
        icon: 'edit',
        prefix: 'apple/',
        children: [{ text: 'Apple1', icon: 'edit', link: '1' }, { text: 'Apple2', icon: 'edit', link: '2' }, '3', '4'],
      },
      {
        text: 'Banana',
        icon: 'edit',
        prefix: 'banana/',
        children: [
          {
            text: 'Banana 1',
            icon: 'edit',
            link: '1',
          },
          {
            text: 'Banana 2',
            icon: 'edit',
            link: '2',
          },
          '3',
          '4',
        ],
      },
      { text: 'Cherry', icon: 'edit', link: 'cherry' },
      { text: 'Dragon Fruit', icon: 'edit', link: 'dragonfruit' },
      'tomato',
      'strawberry',
    ],
  },
]);
