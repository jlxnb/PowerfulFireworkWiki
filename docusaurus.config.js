// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PowerfulFireworkWiki',
  tagline: '富有力量的烟花 官方文档(大雾',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jlxnb.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PowerfulFireworkWiki',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jlxnb', // Usually your GitHub org/user name.
  projectName: 'PowerfulFireworkWiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/jlxnb/PowerfulFireworkWiki/blob/main'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/card.jpg',
      navbar: {
        title: 'PowerfulFireworkWiki',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '开始',
          },
          // 搜索框
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/jlxnb/PowerfulFireworkWiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      // 底部链接
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开始',
                to: '/intro',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'QQ群',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ew3GvcB_CuDLcedGaYagktfD_S-R-9E2&authKey=7pfy%2B2h0SbNO%2B8eYQWO1ltLqcu2ObIPKm4jp%2BXpsCStbykFRKtowBy2U6%2Bdp6rY%2B&noverify=0&group_code=755099653',
              },
            ],
          },
          {
            title: '文档仓库',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jlxnb/PowerfulFireworkWiki',
              },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright © ${new Date().getFullYear()} NullPepper, All Rights Reserved.`,
      },
      // 深浅主题
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // 颜色随系统切换
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),

    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          language: ["en", "zh"],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          indexBlog: false,
          docsRouteBasePath: "/"
        },
      ],
    ],
};

module.exports = config;
