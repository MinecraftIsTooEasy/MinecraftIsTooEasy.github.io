# 将构建发布到Maven仓库

## 准备工作

### 构建脚本`build.gradle`

1. 确保`plugins`闭包部分有插件
```
id 'maven-publish'
```
2. 确保`publishing`部分的内容与别的正常的项目一致
3. 确保`dependencies`部分无冗余依赖(只有真正的依赖能用implementation, 仅编译的用compileOnly, 仅在运行客户端时测试的用localRuntime)

### 项目设置`gradle.properties`

1. 确保`maven_group=com.github.MinecraftIsTooEasy`

## 发布到本地仓库并检查

1. 在gradle任务中执行publishToMavenLocal
2. 访问本地maven仓库: 将以下路径替换关键词后访问:
```
C:\Users\${用户名}\.m2\repository\com\github\MinecraftIsTooEasy
```
3. 你的项目会出现在此.
4. 进入到最后一层文件夹
5. 检查`pom`文件, 若里面存在冗余依赖, 退回上一章.
6. 检查`module`文件, 确保`"org.gradle.jvm.version": 17`

## 发布到远程仓库

### 获取权限
1. 完整阅读本文
2. 联系组织的管理员
3. 证明第1条
4. 从管理员处取得包含账号密码的`gradle.properties`文件
5. 将文件放在你的`GRADLE_HOME`的根目录处

### 正式发布
1. 在gradle任务中执行publish
2. 检查[远程仓库](https://maven.limingzxc.top/service/rest/repository/browse/maven-public/com/github/MinecraftIsTooEasy/)是否有你的内容
