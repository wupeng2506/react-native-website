(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),c=(n(0),n(584)),i={id:"settings",title:"Settings"},o={unversionedId:"settings",id:"settings",isDocsHomePage:!1,title:"Settings",description:"Settings\u662f\u5bf9NSUserDefaults\u7684\u5c01\u88c5\u3002\u5b83\u662fiOS\u5e73\u53f0\u4e0a\u7684\u4e00\u79cd\u6301\u4e45\u7684\u952e\u503c\u5bf9\u5b58\u50a8\u3002",source:"@site/../cndocs/settings.md",slug:"/settings",permalink:"/docs/next/settings",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/settings.md",version:"current",lastUpdatedAt:1620016053,sidebar:"api",previous:{title:"DynamicColorIOS",permalink:"/docs/next/dynamiccolorios"}},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>clearWatch()</code>",id:"clearwatch",children:[]},{value:"<code>get()</code>",id:"get",children:[]},{value:"<code>set()</code>",id:"set",children:[]},{value:"<code>watchKeys()</code>",id:"watchkeys",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Settings"),"\u662f\u5bf9",Object(c.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/foundation/nsuserdefaults"},Object(c.b)("inlineCode",{parentName:"a"},"NSUserDefaults")),"\u7684\u5c01\u88c5\u3002\u5b83\u662fiOS\u5e73\u53f0\u4e0a\u7684\u4e00\u79cd\u6301\u4e45\u7684\u952e\u503c\u5bf9\u5b58\u50a8\u3002"),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Settings Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Settings%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bdata%2C%20setData%5D%20%3D%20useState(Settings.get(%22data%22))%3B%0A%0A%20%20const%20storeData%20%3D%20data%20%3D%3E%20%7B%0A%20%20%20%20Settings.set(data)%3B%0A%20%20%20%20setData(Settings.get(%22data%22))%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EStored%20value%3A%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7Bdata%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20storeData(%7B%20data%3A%20%22React%22%20%7D)%7D%0A%20%20%20%20%20%20%20%20title%3D%22Store%20'React'%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20storeData(%7B%20data%3A%20%22Native%22%20%7D)%7D%0A%20%20%20%20%20%20%20%20title%3D%22Store%20'Native'%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20value%3A%20%7B%0A%20%20%20%20fontSize%3A%2024%2C%0A%20%20%20%20marginVertical%3A%2012%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(c.b)("hr",null),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"clearwatch"},Object(c.b)("inlineCode",{parentName:"h3"},"clearWatch()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static clearWatch(watchId: number)\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"watchId")," is the number returned by ",Object(c.b)("inlineCode",{parentName:"p"},"watchKeys()")," when the subscription was originally configured."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"get"},Object(c.b)("inlineCode",{parentName:"h3"},"get()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static get(key: string): mixed\n")),Object(c.b)("p",null,"Get the current value for a given ",Object(c.b)("inlineCode",{parentName:"p"},"key")," in ",Object(c.b)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"set"},Object(c.b)("inlineCode",{parentName:"h3"},"set()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static set(settings: object)\n")),Object(c.b)("p",null,"Set one or more values in ",Object(c.b)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"watchkeys"},Object(c.b)("inlineCode",{parentName:"h3"},"watchKeys()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static watchKeys(keys: string | array<string>, callback: function): number\n")),Object(c.b)("p",null,"Subscribe to be notified when the value for any of the keys specified by the ",Object(c.b)("inlineCode",{parentName:"p"},"keys")," parameter has been changed in ",Object(c.b)("inlineCode",{parentName:"p"},"NSUserDefaults"),". Returns a ",Object(c.b)("inlineCode",{parentName:"p"},"watchId")," number that may be used with ",Object(c.b)("inlineCode",{parentName:"p"},"clearWatch()")," to unsubscribe."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Note:")," ",Object(c.b)("inlineCode",{parentName:"p"},"watchKeys()")," by design ignores internal ",Object(c.b)("inlineCode",{parentName:"p"},"set()")," calls and fires callback only on changes preformed outside of React Native code.")))}b.isMDXComponent=!0},584:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);