import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  srcDir: './src',
  base: "/note_docs/",
  title: "大专哥",
  description: "SK-LUFFA",
  rewrites:{
   'src/(.*)': ':src/index.md'
  },
  themeConfig: {
    footer: {
      message: '<a style="text-decoration: none;" href="https://vitepress.dev/zh/">本文档由Vitepress提供技术支持</a>',
      copyright: '<a style="text-decoration: none;" href="https://github.com/SK-Luffa">© SK-LUFFA</a>'
    },
    i18nRouting: true,

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
