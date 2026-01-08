---
title: 关于B站无法启用HEVC的方法&&yuzu/eden模拟器Vulkan模式闪退解决办法（NVIDIA 显卡）
tags: 教程
keywords: 显卡问题
categories: 教程
cover: "https://pic2.zhimg.com/100/v2-7d43ddb0d8490be3b09dd8ce81e029f5_r.jpg"
abbrlink: 54172
date: 2025-12-31 16:36:18
---

# 故障现象

- B 站问题（已经安装[HEVC Video Extension 解码器](https://www.bilibili.com/blackboard/era/KJreCa9Qz0nocM94.html)）还是无法启用 hevc

- yuzu/eden 模拟器问题：
  模拟器的 Vulkan 模式比 OpenGL 模式性能有极大优势。但经常遇到一个 Windows 操作系统和 NVIDIA 驱动共同导致的 bug：只要选择了 Vulkan 模式，点击开始游戏时 yuzu 就会闪退或者加载几秒钟之后闪退，反正进入不了游戏自身的任何画面。

# 解决办法

### 亲测，两者基本上都是显卡驱动问题导致的

1. 下载 NVIDIA 496.49 或者以上的版本的驱动程序：

下载链接：[496.49-desktop-win10-win11-64bit-international-dch-whql](https://www.nvidia.com/Download/driverResults.aspx/183464/1000/)

# 卸载 NVIDIA 显卡驱动

[下载 geekuninstaller](https://geekuninstaller.com/) 工具干净卸载掉原来的显卡驱动

# 安装驱动

1. 安装刚下载的驱动程序，安装时勾选纯净安装、抛弃设置恢复默认设置的选项。安装完不需要重启电脑。
   ![alt text](https://img.xpwin7.com/2023/0426/2023041114376599.png)
2. 安装完成后就可以使用了

# yuzu/eden 其他问题

## 一、画面或声音卡顿

1、将设置-图形中的 OpenGL 改为 v 模式

2、将设置-图形-高级的精度调低

3、使用 STSYPE 工具

## 二、有 UI 但没有背景

1、下载 V++库

2、使用更高版本的 yuzu

## 三、容易闪退或者卡死

1、将设置-图形中的 v 模式改为 OpenGL

2、将虚拟内存调高

3、使用 memreduct 工具

4、将设置-图形-高级的精度调低

5、取消开始快速 GPU 时钟

6、取消垂直同步模式

## 四、建模问题

1、置-图形中的 OpenGL 改为 v 模式

2、将设置-图形-高级的精度调高
