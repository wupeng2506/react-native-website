(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[72899],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(y,a(a({ref:t},c),{},{components:n})):o.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65101:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var o=n(29603),i=n(50120),r=(n(27378),n(35318)),a={id:"app-extensions",title:"iOS\u5e94\u7528\u6269\u5c55"},s=void 0,p={unversionedId:"app-extensions",id:"app-extensions",isDocsHomePage:!1,title:"iOS\u5e94\u7528\u6269\u5c55",description:"App extensions let you provide custom functionality and content outside of your main app. There are different types of app extensions on iOS, and they are all covered in the App Extension Programming Guide. In this guide, we'll briefly cover how you may take advantage of app extensions on iOS.",source:"@site/../cndocs/app-extensions.md",sourceDirName:".",slug:"/app-extensions",permalink:"/docs/next/app-extensions",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/app-extensions.md",tags:[],version:"current",frontMatter:{id:"app-extensions",title:"iOS\u5e94\u7528\u6269\u5c55"},sidebar:"docs",previous:{title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",permalink:"/docs/next/communication-ios"},next:{title:"\u4e0a\u67b6 App Store",permalink:"/docs/next/publishing-to-app-store"}},l=[{value:"Memory use in extensions",id:"memory-use-in-extensions",children:[{value:"Today widget",id:"today-widget",children:[]},{value:"Other app extensions",id:"other-app-extensions",children:[]}]}],c={toc:l};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"App extensions let you provide custom functionality and content outside of your main app. There are different types of app extensions on iOS, and they are all covered in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214-CH20-SW1"},"App Extension Programming Guide"),". In this guide, we'll briefly cover how you may take advantage of app extensions on iOS."),(0,r.kt)("h2",{id:"memory-use-in-extensions"},"Memory use in extensions"),(0,r.kt)("p",null,"As these extensions are loaded outside of the regular app sandbox, it's highly likely that several of these app extensions will be loaded simultaneously. As you might expect, these extensions have small memory usage limits. Keep these in mind when developing your app extensions. It's always highly recommended to test your application on an actual device, and more so when developing app extensions: too frequently, developers find that their extension works fine in the iOS Simulator, only to get user reports that their extension is not loading on actual devices."),(0,r.kt)("p",null,"We highly recommend that you watch Conrad Kramer's talk on ",(0,r.kt)("a",{parentName:"p",href:"https://cocoaheads.tv/memory-use-in-extensions-by-conrad-kramer/"},"Memory Use in Extensions")," to learn more about this topic."),(0,r.kt)("h3",{id:"today-widget"},"Today widget"),(0,r.kt)("p",null,"The memory limit of a Today widget is 16 MB. As it happens, Today widget implementations using React Native may work unreliably because the memory usage tends to be too high. You can tell if your Today widget is exceeding the memory limit if it yields the message 'Unable to Load':"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(63435).Z})),(0,r.kt)("p",null,"Always make sure to test your app extensions in a real device, but be aware that this may not be sufficient, especially when dealing with Today widgets. Debug-configured builds are more likely to exceed the memory limits, while release-configured builds don't fail right away. We highly recommend that you use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/index.html"},"Xcode's Instruments")," to analyze your real world memory usage, as it's very likely that your release-configured build is very close to the 16 MB limit. In situations like these, you can quickly go over the 16 MB limit by performing common operations, such as fetching data from an API."),(0,r.kt)("p",null,"To experiment with the limits of React Native Today widget implementations, try extending the example project in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/matejkriz/react-native-today-widget/"},"react-native-today-widget"),"."),(0,r.kt)("h3",{id:"other-app-extensions"},"Other app extensions"),(0,r.kt)("p",null,"Other types of app extensions have greater memory limits than the Today widget. For instance, Custom Keyboard extensions are limited to 48 MB, and Share extensions are limited to 120 MB. Implementing such app extensions with React Native is more viable. One proof of concept example is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/andrewsardone/react-native-ios-share-extension"},"react-native-ios-share-extension"),"."))}u.isMDXComponent=!0},63435:function(e,t,n){"use strict";t.Z=n.p+"assets/images/TodayWidgetUnableToLoad-b931f8be6eeb72c037338b9ab9766477.jpg"}}]);