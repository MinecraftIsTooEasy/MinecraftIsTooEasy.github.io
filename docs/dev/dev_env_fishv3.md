# Fish v3环境搭建

---

## IDEA设置篇

1. 下载软件IntelliJ IDEA, 社区版足够, 不必购买专业版.
2. 进入IDEA, 找到设置, 插件市场, 下载 Minecraft Development Kit, 如有需要, 还可以下载一些汉化插件.
3. 因为我们开发需要的库很多需要从国外下载, 配置一个网络代理是必不可少的.
4. 配置方法有很多, 如果你已经掌握, 直接跳过本节即可.
5. 现在假定你已经配置好了系统代理, 我们下面开始配置IDEA的代理.
6. 按下Win+I, 进入网络, 代理, 查看地址与端口, 记录下来.
7. 进入IDEA, 设置, 代理, 选择手动代理并填入上一步中的地址与端口.
8. 现在你的IDEA应该能够使用代理运行项目了.

---

## 文件准备篇

1. 下载并安装Java17, 并配置环境变量. 且你需要知晓安装的路径. 此步可根据网络上的教程.
2. 在 `C:\Users\用户名\.m2` 新建名为 `repository` 的文件夹.
3. 按下Win+R, 输入 `%USERPROFILE%/.m2/repository` 检查是否创建成功.
4. 下载 [fml-loom-0.1.local-repo.zip](https://github.com/XiaoYuOvO/fml-loom/releases/download/0.1/fml-loom-0.1.local-repo.zip), 解压到刚才创建的目录. 检查是否多嵌套了文件夹, 我们的文件树结构应该类似如下:

```
repository
 ├── fml-loom
 └── net
```

5. 获取最新的FishModLoader的jar文件, 保存到适宜的目录中.
6. 获取MITE核心的jar文件(例如自行文件覆盖, 或下载某一客户端并提取), 暂时备用.
7. 获取MITE的资源包, 暂时备用.

---

## 项目构建篇

1. 找到任意FML3的项目, 例如从[组织项目库](https://github.com/orgs/MinecraftIsTooEasy/repositories)下载.
2. 用IDEA打开其中的 `build.gralde` 文件. 这是项目的构建脚本, 我们能否运行起项目的关键.
3. 打开后项目应该会自动开始构建, 等待片刻.
4. 若成功构建, 可直接跳过本节
5. 你可能会遇到以下问题:
    - Java版本过低(例如8), 进入设置, 项目结构, 将SDK和语言水平设为17.
    - FishModLoader目录不对, 进入构建脚本, 将相关路径改为你在上节准备的.
    - 找不到MITE.jar文件, 根据报错给的目录, 将你在上节准备的文件移动过去.
    - 缺少库, 这可能是你拿到的项目有一些自定义的前置, 例如ManyLib等. 想办法下载相关文件, 并将构建脚本中相关路径设为你的.
6. 以防你不知道, 可以双击Ctrl, 输入 `gradle build` 以重新构建项目.

---

## 项目运行篇

1. 在右边侧栏中, 可以找到gradle. 运行任务都在其中.
2. 在Tasks build中, 有jar和sourcesJar, 前者编译出给用户的模组, 后者是源代码可供阅读.
3. 在Tasks fml中, 有runClient和runServer, 用以运行客户端和运行服务器.
4. 运行客户端时, 如遇主菜单的缺少资源包警告, 将你在上上节准备的资源包移入项目的run文件夹中适宜位置.
5. 还有genSources, 可以生成mc的源码, 这里需注意genSources时要关闭所有关于源码的标签页.

---

## 项目编写篇

这里是一些项目编写的技巧, 只讲大概流程, 具体代码编写请参考相关的项目.

1. 引入依赖模组的流程: 在构建脚本的dependencies块中使用implementation即可. 在runClient时这些模组也会参与.
2. 如果你只想用来编译而不想运行模组依赖, 将implementation改成compileOnly.
3. 若以同样的方式引入sources文件, 则能看到源码, 且查找用法等功能也能使用.
4. 访问加宽(accessWidener)需要在构建脚本和fml.mod.json中都指定. 前者在开发环境, 而后者在用户环境.
5. 在Fabric-like的环境中, 大部分功能要自己修改mc代码实现. 我们通过Mixin系统实现这个操作.
