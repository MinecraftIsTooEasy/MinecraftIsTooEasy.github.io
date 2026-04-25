# Maven仓库的使用

## Maven仓库的优点

1. 替代传统的本地依赖, 改为从中央仓库拉取
2. 免去手动下载依赖并链接到项目的过程
3. 便于项目的多人协作
4. 便于github action实现自动构建

## 本组织的Maven仓库

1. 地址: [https://maven.limingzxc.top/repository/maven-public/](https://maven.limingzxc.top/repository/maven-public/)
2. 使用方法: 在`settings.gradle`和`build.gradle`中的`repositories`闭包中添加
```
		maven {
			name = 'ModdedMITE'
			url = 'https://maven.limingzxc.top/repository/maven-public/'
		}
```

## 添加依赖
在`build.gradle`的`dependencies`闭包中添加类似以下的语句
```
    implementation "com.github.MinecraftIsTooEasy:RustedIronCore:1.5.2"
```

## 发布依赖
见下一篇教程
