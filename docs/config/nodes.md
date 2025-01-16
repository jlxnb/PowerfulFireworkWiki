---
title: 流程节点
sidebar_position: 11
---

# 流程节点

## 通用内容
在大部分节点中的通用部分
```yaml
type: "single"
preset: "a"
```
- **type** 节点类型，使用下方的值覆盖
- **preset** 使用的预设，部分节点不使用此值

## 单个烟花
简单播放单个预设
```yaml
type: "single"
xOff: 0.0
yOff: 0.0
zOff: 0.0
```

- **xOff** 坐标偏移量 X，默认为 `0.0`
- **yOff** 坐标偏移量 Y，默认为 `0.0`
- **zOff** 坐标偏移量 Z，默认为 `0.0`

## 随机烟花
基于开始坐标选取随机偏移，并播放选取内的随机预设，此节点不使用 `preset` 值
```yaml
type: "random"
full: false
presets: ["a", "b"]
count: 1
maxX: 1.0
maxY: 1.0
maxZ: 1.0
minX: -1.0
minY: -1.0
minZ: -1.0
```

- **full** 启用完全随机，覆盖 `presets` 的值，默认为 `false`
- **presets** 预设选取表，填写先前在流程配置中定义的预设 ID
- **maxX** 坐标偏移量 X 的最大值，默认为 `0.0`
- **maxY** 坐标偏移量 Z 的最大值，默认为 `0.0`
- **maxZ** 坐标偏移量 Y 的最大值，默认为 `0.0`
- **maxX** 坐标偏移量 X 的最小值，默认为 `0.0`
- **minY** 坐标偏移量 Z 的最小值，默认为 `0.0`
- **minZ** 坐标偏移量 Y 的最小值，默认为 `0.0`

## 等待
从上个节点开始等待一段时间后再继续流程，此节点不使用 `preset` 值
```yaml
type: "wait"
ticks: 20
```

- **ticks** 等待的 tick 数，`20 tick = 1 秒`

## 文字
展示指定文字，需已加载字体
```yaml
type: "text"
rotate: false
size: 1.0
font: "example"
text: "Minecraft"
gap: 1
face: "EAST"
```
- **rotate** 是否自动转向玩家（仅水平转向），覆盖 `face` 的值
- **size** 文本缩放
- **font** 在 [config.yml](config.md) 中定义的字体
- **text** 显示文本内容，不建议在一个文本节点内显示过多文字，可能导致顶部缺失
- **gap** 每个字间的空格数，受 `size` 缩放影响
- **face** 静态方向，被 `rotate` 覆盖，通常可选值如下所示，更多见 [此处](https://jd.papermc.io/paper/1.21.4/org/bukkit/block/BlockFace.html)，`SELF` `UP` `DOWN` 除外
  - `NORTH` Z 负方向
  - `EAST` X 正方向
  - `SOUTH` Z 正方向
  - `WEST` X 负方向
  - `NORTH_EAST`
  - `NORTH_WEST`
  - `SOUTH_EAST`
  - `SOUTH_WEST`

## 引用
引用其他烟花流程，不使用 `preset` 值
```yaml
type: "reference"
target: "example"
```
- **target** 引用目标 ID，不可为当前流程
