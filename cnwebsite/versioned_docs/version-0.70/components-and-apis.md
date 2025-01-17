---
id: components-and-apis
title: 核心组件和API
---

React Native 提供了一些内置的[核心组件](intro-react-native-components)供你使用。你可以在网站的左侧看到组件的完整列表。如果你不知道从哪看起，那么可以先看一下下面这个简单的分类：

- [基础组件](components-and-apis#基础组件)
- [交互控件](components-and-apis#交互控件)
- [列表视图](components-and-apis#列表视图)
- [iOS 独有组件](components-and-apis#iOS独有的组件和API)
- [Android 独有组件](components-and-apis#Android独有的组件和API)
- [其他](components-and-apis#其他)

需要说明的是，你不会被局限在这些内置组件上。React Native 是大开源社区的作品，所以你还可以在 github 或是 npm 上搜索到带有`react native`关键字的大量的第三方组件。

## 基础组件

大多数应用都会用到这里的基础组件。如果你是新手的话，那更应该先好好熟悉一下这些组件：

<div class="component-grid component-grid-border">
  <div class="component">
    <h3><a href="view">View</a></h3>
    <p>搭建用户界面的最基础组件。</p>
  </div>
  <div class="component">
    <h3><a href="text">Text</a></h3>
    <p>显示文本内容的组件。</p>
  </div>
  <div class="component">
    <h3><a href="image">Image</a></h3>
    <p>显示图片内容的组件。</p>
  </div>
  <div class="component">
    <h3><a href="textinput">TextInput</a></h3>
    <p>文本输入框。</p>
  </div>
  <div class="component">
    <h3><a href="scrollview">ScrollView</a></h3>
    <p>可滚动的容器视图。</p>
  </div>
  <div class="component">
    <h3><a href="stylesheet">StyleSheet</a></h3>
    <p>提供类似CSS样式表的样式抽象层。</p>
  </div>
</div>

## 交互控件

提供一些常见的跨平台的交互控件。

<div class="component-grid component-grid-border">
  <div class="component">
    <h3><a href="button">Button</a></h3>
    <p>一个简单的跨平台的按钮控件。</p>
  </div>
  <div class="component">
    <h3><a href="switch">Switch</a></h3>
    <p>开关控件。</p>
  </div>
</div>

## 列表视图

和一般化用途的`ScrollView`不同，下面的列表组件只会渲染当前屏幕可见的元素，这样有利于显示大量的数据。

<div class="component-grid component-grid-border">
  <div class="component">
    <h3><a href="flatlist">FlatList</a></h3>
    <p>高性能的滚动列表组件。</p>
  </div>
  <div class="component">
    <h3><a href="sectionlist">SectionList</a></h3>
    <p>类似<code>FlatList</code>，但是多了分组显示。</p>
  </div>
</div>

## iOS 独有的组件和 API

下面的组件都是对常用的 UIKit 类的封装。

<div class="component-grid component-grid-border">
  <div class="component">
    <h3><a href="actionsheetios">ActionSheetIOS</a></h3>
    <p>从设备底部弹出一个显示一个ActionSheet弹出框选项菜单或分享菜单。</p>
  </div>
</div>

## Android 独有的组件和 API

下面的组件提供了对 Android 常用类的封装。

<div class="component-grid component-grid-border">
  <div class="component">
    <h3><a href="backhandler">BackHandler</a></h3>
    <p>监听并处理设备上的返回按钮。</p>
  </div>
  <div class="component">
    <h3><a href="drawerlayoutandroid">DrawerLayoutAndroid</a></h3>
    <p>渲染一个<code>DrawerLayout</code>抽屉布局。</p>
  </div>
  <div class="component">
    <h3><a href="permissionsandroid">PermissionsAndroid</a></h3>
    <p>对Android 6.0引入的权限模型的封装。</p>
  </div>
  <div class="component">
    <h3><a href="toastandroid">ToastAndroid</a></h3>
    <p>弹出一个Toast提示框。</p>
  </div>
</div>

## 其他

下面的组件可能适用于一些特定场景。

<div class="component-grid">
  <div class="component">
    <h3><a href="activityindicator">ActivityIndicator</a></h3>
    <p>显示一个圆形的正在加载的符号。</p>
  </div>
  <div class="component">
    <h3><a href="alert">Alert</a></h3>
    <p>弹出一个提示框，显示指定的标题和信息。</p>
  </div>
  <div class="component">
    <h3><a href="animated">Animated</a></h3>
    <p>易于使用和维护的动画库，可生成流畅而强大的动画。</p>
  </div>
  <div class="component">
    <h3><a href="dimensions">Dimensions</a></h3>
    <p>获取设备尺寸。</p>
  </div>
  <div class="component">
    <h3><a href="keyboardavoidingview">KeyboardAvoidingView</a></h3>
    <p>一种视图容器，可以随键盘升起而自动移动。</p>
  </div>
  <div class="component">
    <h3><a href="linking">Linking</a></h3>
    <p>提供了一个通用的接口来调起其他应用或被其他应用调起。</p>
  </div>
  <div class="component">
    <h3><a href="modal">Modal</a></h3>
    <p>一种简单的覆盖全屏的模态视图。</p>
  </div>
  <div class="component">
    <h3><a href="pixelratio">PixelRatio</a></h3>
    <p>可以获取设备的像素密度。</p>
  </div>
  <div class="component">
    <h3><a href="refreshcontrol">RefreshControl</a></h3>
    <p>此组件用在<code>ScrollView</code>及其衍生组件的内部，用于添加下拉刷新的功能。</p>
  </div>
  <div class="component">
    <h3><a href="statusbar">StatusBar</a></h3>
    <p>用于控制应用顶部状态栏样式的组件。</p>
  </div>
  <div class="component">
    <h3><a href="webview">WebView</a></h3>
    <p>在原生视图中显示Web内容的组件。</p>
  </div>
</div>
