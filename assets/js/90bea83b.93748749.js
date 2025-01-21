"use strict";(self.webpackChunkwiki_template=self.webpackChunkwiki_template||[]).push([[362],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(t),u=i,k=s["".concat(p,".").concat(u)]||s[u]||f[u]||a;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var r=t(7462),i=(t(7294),t(3905));const a={title:"\u914d\u7f6e\u6587\u4ef6",sidebar_position:100},l="\u914d\u7f6e\u6587\u4ef6",o={unversionedId:"config/config",id:"config/config",title:"\u914d\u7f6e\u6587\u4ef6",description:"config.yml",source:"@site/docs/config/config.md",sourceDirName:"config",slug:"/config/",permalink:"/PowerfulFireworkWiki/config/",draft:!1,editUrl:"https://github.com/jlxnb/PowerfulFireworkWiki/blob/main/docs/config/config.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"\u914d\u7f6e\u6587\u4ef6",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"\u547d\u4ee4",permalink:"/PowerfulFireworkWiki/commands"},next:{title:"\u5b57\u4f53",permalink:"/PowerfulFireworkWiki/config/fonts"}},p={},m=[{value:"config.yml",id:"configyml",level:2},{value:"\u70df\u82b1\u6d41\u7a0b\u914d\u7f6e",id:"\u70df\u82b1\u6d41\u7a0b\u914d\u7f6e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],c={toc:m},s="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("h2",{id:"configyml"},"config.yml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\n#\u4e0d\u9700\u8981\u66f4\u6539\u6b64\u503c\nconfig-version: 0.0.1\n\n#\u662f\u5426\u542f\u7528\u8c03\u8bd5\u6a21\u5f0f\ndebug: false\n\n#\u968f\u673a\u70df\u82b1\u914d\u7f6e, \u5373:\u5bf9\u4e8e\u6bcf\u4e2a\u73a9\u5bb6, \u5728\u4ed6\u7684\u56db\u5468\u968f\u673a\u71c3\u653e\u70df\u82b1\u7684\u914d\u7f6e\nrandom-firework:\n  #\u662f\u5426\u542f\u7528\u8fd9\u4e00\u9879\u529f\u80fd\n  enabled: true\n  #\u4e24\u6b21\u70df\u82b1\u7684\u968f\u673a\u95f4\u9694, \u8fd9\u4e00\u9879\u4f1a\u51b3\u5b9a\u70df\u82b1\u7684\u5bc6\u5ea6 \u5355\u4f4d:tick\n  delay:\n    minimum: 10\n    maximum: 20\n  #\u662f\u5426\u81ea\u52a8\u8c03\u8282\u70df\u82b1\u7684\u968f\u673a\u71c3\u653e\u4f4d\u7f6e?\n  #\u81ea\u52a8\u8c03\u8282:\u5373\u6839\u636e\u5f53\u524d\u670d\u52a1\u5668\u89c6\u89c9\u8ddd\u79bb\u8bbe\u7f6e\u70df\u82b1\u71c3\u653e\u534a\u5f84\n  automatic-distance: true\n  #\u81ea\u5b9a\u4e49\u71c3\u653e\u534a\u5f84 \u5355\u4f4d:\u683c\n  distance: 20\n  #\u70df\u82b1\u98de\u884c\u7684\u65f6\u95f4, \u5355\u4f4d:tick\n  fly-time:\n    maximum: 30\n    minimum: 70\n\n#\u52a0\u8f7d\u7684\u5b57\u4f53\u5217\u8868\nfonts:\n  example: example.bdf\n")),(0,i.kt)("h2",{id:"\u70df\u82b1\u6d41\u7a0b\u914d\u7f6e"},"\u70df\u82b1\u6d41\u7a0b\u914d\u7f6e"),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'id: "test"\n\npresets:\n  a:\n    effects:\n      - colors:\n          - "#FFFFFF"\n        flicker: true\n  b:\n    effects:\n      - colors:\n          - "#000000"\n        fades:\n          - "#FFFFFF"\n\nnodes:\n  - type: "single"\n    xOff: 0.0\n    yOff: 1.0\n    zOff: 1.0\n    preset: a\n\n  - type: "wait"\n    ticks: 20\n\n  - type: "random"\n    full: true\n    count: 5\n    maxX: 5.0\n    maxY: 5.0\n    maxZ: 5.0\n    minX: -5.0\n    minY: -5.0\n    minZ: -5.0\n    presets: [ a, b ]\n\n  - type: "text"\n    text: "Minecraft"\n    flyTime: 20\n    rotate: false\n    preset: a\n    gap: 1\n    font: example\n    size: 1.5\n    face: NORTH_WEST\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," \u6b64\u70df\u82b1\u6d41\u7a0b\u7684 ID\uff0c\u4e0d\u80fd\u4e0e\u5176\u4ed6\u6d41\u7a0b\u91cd\u590d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"presets")," \u5355\u4e2a\u70df\u82b1\u9884\u8bbe",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[id]")," \u9884\u8bbe ID",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"effects")," \u6548\u679c\uff08\u5217\u8868\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"colors")," \u5b57\u7b26\u4e32\u5217\u8868\uff0c\u4e3b\u8981\u989c\u8272\uff0c\u4f7f\u7528 RGB 16 \u8fdb\u5236\u989c\u8272\u4ee3\u7801\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"#FFFFFF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fades")," \u5b57\u7b26\u4e32\u5217\u8868\uff0c\u6b21\u8981\u989c\u8272\uff0c\u4f7f\u7528 RGB 16 \u8fdb\u5236\u989c\u8272\u4ee3\u7801\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"#FFFFFF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"flicker")," \u662f\u5426\u542f\u7528\u95ea\u70c1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"trail")," \u662f\u5426\u542f\u7528\u5c3e\u8ff9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," \u6548\u679c\u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"BALL")," ",(0,i.kt)("inlineCode",{parentName:"li"},"BALL_LARGE")," ",(0,i.kt)("inlineCode",{parentName:"li"},"BURST")," ",(0,i.kt)("inlineCode",{parentName:"li"},"CREEPER")," ",(0,i.kt)("inlineCode",{parentName:"li"},"STAR")))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nodes")," \u70df\u82b1\u6d41\u7a0b\u4e3b\u4f53\uff08\u5217\u8868\uff09\uff0c\u4e13\u7528\u914d\u7f6e\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"/PowerfulFireworkWiki/config/nodes"},"\u6d41\u7a0b\u8282\u70b9"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," \u6d41\u7a0b\u8282\u70b9\u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"preset")," \u4f7f\u7528\u7684\u9884\u8bbe ID\uff0c\u5b9a\u4e49\u4e8e\u4e0a\u65b9presets")))))}f.isMDXComponent=!0}}]);