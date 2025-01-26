---
sidebar_position: 2
---

# 命令

## `/firework-test`
权限：`powerfulfireworks.cmd.test`

测试手持的烟花，在玩家上方 10 格播放效果

## `/fireworks`
主命令
权限：`powerfulfireworks.cmd.fireworks`

### `/fireworks execute [scheduler] [x] [y] [z] (world)`
权限：`powerfulfireworks.cmd.fireworks.execute`

播放指定的烟花流程
- **scheduler** 烟花流程ID
- **X** 起始坐标 X
- **Y** 起始坐标 Y
- **Z** 起始坐标 Z
- **world** （可选）目标世界，玩家执行且未填写此参数时使用玩家当前世界，控制台执行时必须填写

### `/fireworks font (font) (character)`
权限：`powerfulfireworks.cmd.fireworks.font`

列出字体列表或预览指定字体中的指定字符
- **font** （可选）预览时使用的字体
- **character** （字符）预览时使用的字符

### `/fireworks reload`
权限：`powerfulfireworks.cmd.fireworks.reload`

重载配置文件和烟花流程

### `/fireworks toggle`
权限：`powerfulfireworks.cmd.fireworks.toggle`

切换随机烟花模块 开/关 状态

推荐授予玩家本权限