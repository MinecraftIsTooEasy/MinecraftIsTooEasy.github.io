# 从fml1迁移到fm3

注意: 本文讲解的内容已过时.

## 重映射

1. 获取fml142客户端, 装上你要迁移的模组
2. 编辑fishmodloader的config, 打开dumpclass选项
3. 进入游戏游玩, 尽可能多访问游戏内容, 以加载尽可能多的class
4. 退出游戏, 把dump的class打包成jar, 保存
5. 进入任意fml342环境, 新建Test类, 执行以下代码
```java
    ModRemapper.main(
            new String[]{
                    "D:\\mitedev\\migrate\\itf\\MITE-ITF R14.jar",
                    "D:\\mitedev\\migrate\\itf\\MITE-ITF R14-FML3.4.0.jar",
                    "D:\\mitedev\\migrate\\dump\\LibRef1.4.2.jar",
            }
    );
```
其中三个字符串需换成你电脑上的路径:
一, 模组的fml142版本的jar
二, 你要保存到的路径
三, 你在第4步中保存的jar路径

6. 根据第5步执行结果, 处理可能的错误:
一, 类缺失: 退回第3步, 访问相应的类, 再执行4,5
二, 映射冲突: 你可能混合了不同环境的dump

## 写法转换

待建设
