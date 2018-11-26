module.exports = {
  base: '/docs/',
  title: 'About WEB',
  description: ' ',
  head: [],
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    serviceWorker: {
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    },
    nav: [
      {
        text: '前端整理',
        link: '/前端整理/'
      },
      {
        text: 'ECMAScript6',
        link: '/ECMAScript6/'
      },
      {
        text: 'CDN',
        link: '/CDN/'
      }
    ],
    sidebar: {
      '/前端整理/': genSidebarConfig('前端整理', '前端整理'),
      '/ECMAScript6/': genSidebarConfig('ECMAScript6', 'ECMAScript6'),
      '/CDN/': genSidebarConfig('CDN', 'CDN')
    }
  }
}

function genSidebarConfig(module, title) {
  if (module === '前端整理') {
    return [
      {
        title,
        collapsable: false,
        children: ['', 'ifream']
      }
    ]
  }
  if (module === 'ECMAScript6') {
    return [
      {
        title,
        collapsable: false,
        children: ['', 'let', 'destructuring', 'proxy']
      }
    ]
  }
  if (module === 'CDN') {
    return [
      {
        title,
        collapsable: false,
        children: ['']
      }
    ]
  }
}
