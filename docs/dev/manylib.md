# ManyLib模组开发文档

## 如何从文件读写配置

实现一个 `IConfigHandler`，然后调用 `save` 或 `load` 即可。  
你可以通过继承 `SimpleConfigs` 来实现。这是一个模板。

## 如何在ManyLib菜单中加入我的模组

调用 `ConfigManager.getInstance().register()` 以注册你的配置。  
你的配置对象的 `.getValues()` 和 `.getHotkeys()` 不应该都为 `null`，否则我们会忽略你的模组。

## 如何在ManyLib菜单中重定向我的模组的配置Gui

覆写 `IConfigHandler.getConfigScreen()` 方法即可

## 如何在配置Gui中加入多个标签页

覆写 `IConfigHandler.getConfigTabs()` 方法即可。

## 关于支持多语言

我们建议你在每个配置项注册时，名字前加入你的模组的命名空间。这样能够避免多个模组的同名配置起冲突。

你可以观察本模组的lang(语言文件)来学习如何编写自己的lang。

---