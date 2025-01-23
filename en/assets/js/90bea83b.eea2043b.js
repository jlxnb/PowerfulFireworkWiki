"use strict";(self.webpackChunkwiki_template=self.webpackChunkwiki_template||[]).push([[362],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),u=i,d=f["".concat(m,".").concat(u)]||f[u]||s[u]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={title:"\u914d\u7f6e\u6587\u4ef6",sidebar_position:100},o="\u914d\u7f6e\u6587\u4ef6",l={unversionedId:"config/config",id:"config/config",title:"\u914d\u7f6e\u6587\u4ef6",description:"config.yml",source:"@site/docs/config/config.md",sourceDirName:"config",slug:"/config/",permalink:"/PowerfulFireworkWiki/en/config/",draft:!1,editUrl:"https://github.com/jlxnb/PowerfulFireworkWiki/blob/main/docs/config/config.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"\u914d\u7f6e\u6587\u4ef6",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"\u547d\u4ee4",permalink:"/PowerfulFireworkWiki/en/commands"},next:{title:"\u6d41\u7a0b\u8282\u70b9",permalink:"/PowerfulFireworkWiki/en/config/interval"}},m={},p=[{value:"config.yml",id:"configyml",level:2},{value:"\u70df\u82b1\u6d41\u7a0b\u914d\u7f6e",id:"\u70df\u82b1\u6d41\u7a0b\u914d\u7f6e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],c={toc:p},f="wrapper";function s(e){let{components:n,...t}=e;return(0,i.kt)(f,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("h2",{id:"configyml"},"config.yml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u662f\u5426\u542f\u7528\u8c03\u8bd5\u6a21\u5f0f\n# \u5982\u679c\u4f60\u662f\u666e\u901a\u7528\u6237\uff0c\u4e0d\u8981\u4fee\u6539\u6b64\u9879\ndebug: false\n# \u968f\u673a\u70df\u82b1\u914d\u7f6e\nrandom-firework:\n  # \u662f\u5426\u542f\u7528\u968f\u673a\u70df\u82b1\n  enabled: true\n  # \u5728\u73a9\u5bb6\u672a\u64cd\u4f5c\u5f00\u5173\u7684\u60c5\u51b5\u4e0b\uff0c\u662f\u5426\u9ed8\u8ba4\u5f00\u542f\u968f\u673a\u70df\u82b1\n  # \u6e38\u620f\u5185\uff0c\u73a9\u5bb6\u53ef\u4f7f\u7528 /fireworks toggle \u51b3\u5b9a\u662f\u5426\u5f00\u542f\n  # \u5177\u4f53\u53ef\u4ee5\u53c2\u89c1 permission.md \u7ae0\u8282\n  turn-on-by-default: true\n  # \u662f\u5426\u81ea\u52a8\u914d\u7f6e\u70df\u82b1\u71c3\u653e\u8ddd\u79bb\n  # \u81ea\u52a8\u914d\u7f6e:\u5373\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u670d\u52a1\u5668\u89c6\u8ddd\n  automatic-distance: true\n  # \u70df\u82b1\u71c3\u653e\u8ddd\u79bb\n  # \u542f\u7528automatic-distance\u540e\uff0c\u8be5\u8ddd\u79bb\u81ea\u52a8\u5931\u6548\n  distance: 20\n  # \u7981\u7528\u7684\u4e16\u754c\n  # \u5728\u4e0b\u754c\u4e2d\uff0crandom-firework\u4f1a\u58f0\u79f0\u5728\u5728\u9876\u5c42\u57fa\u5ca9\u4e0a\n  # \u56e0\u6b64\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u4e2d\u52a0\u5165\u4e86world_nether\n  blacklist-worlds:\n    - world_nether\n# \u5b57\u4f53\u5217\u8868\n# \u952e\u4e3atext\u7c7b\u578b\u8282\u70b9\u4e2dfont\u9009\u9879\u586b\u5199\u7684\u5185\u5bb9\n# \u503c\u4e3afonts\u4e0b\u7684\u6587\u4ef6\u540d\nfonts:\n  example: example.bdf\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ca1\u5565\u597d\u8bf4\u7684\uff0c\u4e0d\u8be6\u89e3\u4e86")),(0,i.kt)("h2",{id:"\u70df\u82b1\u6d41\u7a0b\u914d\u7f6e"},"\u70df\u82b1\u6d41\u7a0b\u914d\u7f6e"),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u5f53\u524d\u6d41\u7a0b\u914d\u7f6e\u7684ID\uff0c\u7528\u4e8e\u5728\u6e38\u620f\u4e2d\u71c3\u653e\uff0c\u4e0d\u80fd\u4e0e\u5176\u4ed6\u6d41\u7a0b\u91cd\u590d\nid: "test"\n\n# \u9884\u8bbe\u70df\u82b1\uff0c\u5177\u4f53\u89c1\u4e0b\u65b9\u7684\u8be6\u89e3\npresets:\n  a:\n    effects:\n      - colors:\n          - "#FFFFFF"\n        flicker: true\n  b:\n    effects:\n      - colors:\n          - "#000000"\n        fades:\n          - "#FFFFFF"\n\n# \u4e3b\u4f53\u90e8\u5206\uff0c\u5b9a\u4e49\u70df\u82b1\u7684\u5168\u8fc7\u7a0b\n# \u5177\u4f53\u89c1 config/nodes.md \u7ae0\u8282\nnodes:\n  - type: "original"\n    xOff:\n      minimum: 0.0\n      maximum: 0.0\n    yOff:\n      minimum: 1.0\n      maximum: 1.0\n    zOff:\n      minimum: 1.0\n      maximum: 1.0\n    presets: [a]\n\n  - type: "wait"\n    ticks: 20\n\n  - type: "original"\n    count: 5\n    xOff:\n      minimum: -5.0\n      maximum: 5.0\n    yOff: 0.0\n    zOff: [-5.0, 5.0]\n\n  - type: "text"\n    text: "Minecraft"\n    flyTime: 20\n    rotate: false\n    presets: [a]\n    gap: 1\n    font: example\n    size: 1.5\n    face: NORTH_WEST\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," \u6b64\u70df\u82b1\u6d41\u7a0b\u7684 ID\uff0c\u4e0d\u80fd\u4e0e\u5176\u4ed6\u6d41\u7a0b\u91cd\u590d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"presets")," \u9884\u8bbe\u70df\u82b1\u914d\u7f6e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[id]")," \u9884\u8bbe ID",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"effects")," \u6548\u679c\uff08\u5217\u8868\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"colors")," \u5b57\u7b26\u4e32\u5217\u8868\uff0c\u4e3b\u8981\u989c\u8272\uff0c\u4f7f\u7528 RGB 16 \u8fdb\u5236\u989c\u8272\u4ee3\u7801\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"#FFFFFF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fades")," \u5b57\u7b26\u4e32\u5217\u8868\uff0c\u6b21\u8981\u989c\u8272\uff0c\u4f7f\u7528 RGB 16 \u8fdb\u5236\u989c\u8272\u4ee3\u7801\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"#FFFFFF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"flicker")," \u662f\u5426\u542f\u7528\u95ea\u70c1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"trail")," \u662f\u5426\u542f\u7528\u5c3e\u8ff9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," \u6548\u679c\u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"BALL")," ",(0,i.kt)("inlineCode",{parentName:"li"},"BALL_LARGE")," ",(0,i.kt)("inlineCode",{parentName:"li"},"BURST")," ",(0,i.kt)("inlineCode",{parentName:"li"},"CREEPER")," ",(0,i.kt)("inlineCode",{parentName:"li"},"STAR")))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nodes")," \u70df\u82b1\u6d41\u7a0b\u4e3b\u4f53\uff08\u5217\u8868\uff09\uff0c\u4e13\u7528\u914d\u7f6e\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"/PowerfulFireworkWiki/en/config/nodes"},"\u6d41\u7a0b\u8282\u70b9"))))}s.isMDXComponent=!0}}]);