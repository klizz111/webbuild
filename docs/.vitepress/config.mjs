  import { defineConfig } from 'vitepress'

  // https://vitepress.dev/reference/site-config
  export default defineConfig({
    lastUpdated: true,
    lang : 'zh-CN',
    title: "老狼王的小窝",
    description: "zzzz",
    logo: "img/favicon.ico",
    appearance: 'dark',
    head: [
      [
        'script', 
        { id: 'register-sw' },
        `;(() => {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
          }
          //alert('Service worker has been registered!'); 
        })()`
      ]
    ],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      outlineTitle: '目录',
      //右上角导航栏
      nav: [

        //Home
        { text: 'Home', link: '/' },
        
        //Guide
        {
          text: 'Guide',
          items: [
            {
              text: 'Section A Title',
              items: [
                { text: 'Section A Item A', link: '...' },
                { text: 'Section B Item B', link: '...' }
              ]
            },
            {
              text: 'Section B Title',
              items: [
                { text: 'Section B Item A', link: '...' },
                { text: 'Section B Item B', link: '...' }
              ]
            }
          ]
        },

        //😭
        { text:'😭',
          items:[
            { text: '🤡', link: 'https://www.emojiall.com/zh-hans/emoji/%F0%9F%A4%A1'},
            { text: '🤓', link:'https://www.emojiall.com/zh-hans/emoji/%F0%9F%A4%93'},
            { text: '😤', link:'https://www.emojiall.com/zh-hans/emoji/%F0%9F%98%A4'},
          ]
        },

        {
          text: '电子手办',
          items:[
            {text: 'Cubism 2',link: 'https://klizz.online/z_live2D/indexe.html'},
            {text: 'Cubism 3',link: 'https://klizz.online/z_live2D/live2d_3/indexe.html'},
          ]
        },

        //About me
        { text: 'About me', link: 'https://klizz111.github.io' },
      ],


      //左侧导航栏
      sidebar: [
        {
          text: 'Examples',
          items: [
            { text: '远程桌面', link: '/rdp' },
            { text: 'Runtime API Examples', link: '/api-examples' },
            { text: 'zzzz', link: '/zzz/1.md' },
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Frontmatter', link: '/frontmatter' },
            { text: 'Global Computed', link: '/global-computed' },
            { text: 'Global Component', link: '/global-component' },
            { text: 'Global Layout', link: '/global-layout' },
            { text: 'Custom Theme', link: '/custom-theme' },
            { text: 'Custom Style', link: '/custom-style' },
            { text: 'Custom Page', link: '/custom-page' },
            { text: 'Custom API', link: '/custom-api' },
          ]
        },
      ],

      //socialLinks: [
        //{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      //]

      //搜索框
      search: {
        provider: 'local',
        options: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档'
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换'
                  }
                }
              }
            }
      },

      // 页脚
      footer:{
        copyright:"CopyRight@ 2024 Klizz",
      }, 
        
      
      //编辑链接
      editLink: {
        pattern: 'https://github.com/klizz111/klizz111.github.io/',
        text: 'Edit this page on GitHub'
      },

      //最后更新时间
      lastUpdated: 
      {
        text: 'Updated at',
        formatOptions:
        {
          dateStyle: 'full',
          timeStyle: 'short',
        }
      },
    },
    
  })
