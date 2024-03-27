import { type DefaultTheme } from 'vitepress';
import pluginlist from './pluginlist.json';

export default [
  {
    text: 'TiddlyWiki',
    items: [{ text: '介绍', link: '/README' }],
  },
  {
    text: '插件',
    collapsed: true,
    items: [
      { text: '插件生态', link: '/plugins/' },
      // { text: 'vue gemini', link: '/plugins/vue-gemini' },
      ...pluginlist,
    ],
  },
  {
    text: '开发',
    items: [
      { text: '插件开发', link: '/dev/' },
      { text: 'API', link: '/api' },
    ],
  },
] as DefaultTheme.Config['sidebar'];
