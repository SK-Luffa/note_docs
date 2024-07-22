import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  srcDir:'./src',
  base:"/note_docs/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  locales:{
    root:{
      label:'English',
      lang:'en'
    },
    fr:{
      label: 'French',
      lang: 'fr', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
