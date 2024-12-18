import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  srcDir: './src',
  base: "/note_docs/",
  title: "首页",
  description: "SK-LUFFA",
  
  rewrites: {
    'src/(.*)': ':src/index.md'
  },
  themeConfig: {
    outline:{
      level:[1,2],
      label:'页面导航'
    },
    footer: {
      message: '<a style="text-decoration: none;" href="https://vitepress.dev/zh/">本文档由VitePress提供技术支持</a>',
      copyright: '<a style="text-decoration: none;" href="https://github.com/SK-Luffa">© SK-LUFFA</a>'
    },
    i18nRouting: true,

   

    sidebar: [
      {
        text: '技术类',
        items: [
          // { text: 'vue', link: '/FixedArticle' },
          {text:"Rust",link:'/pages/Rust'},
          {text:"手写一个脚手架",link:'/pages/Cli'}
        ]
      },
      {
        text: '面试与八股',
        items: [
          { text: 'CSS', link: '/pages/FixedArticle/CSS' },
          { text: 'JavaScript', link: '/pages/FixedArticle/JavaScript' },
          { text: 'ES6', link: '/pages/FixedArticle/ES6' },
          { text: 'vue', link: '/pages/FixedArticle/vue' },
          { text: 'vue3', link: '/pages/FixedArticle/vue3' },
          { text: 'webpack', link: '/pages/FixedArticle/webpack' },
          { text: '网络', link: '/pages/FixedArticle/internet' },
          { text: '说明', link: '/pages/FixedArticle/README.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SK-Luffa' }
    ]
  }
})
