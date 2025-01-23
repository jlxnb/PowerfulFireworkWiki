---
title: 流程节点
sidebar_position: 102
---

# 流程节点

## 通用内容
在大部分节点中的通用部分
```yaml
type: "original"
```
- **type** 节点类型，使用下方的值覆盖

## 对于烟花的通用内容
飞行时间
```yaml
presets: [a, b] #注意:此处presets不是区间!
flyTime: 20
```
- **flyTime** 烟花飞行时间，默认为 `0` ，即瞬爆
- **presets** 预设选取表，填写先前在流程配置中定义的预设 ID，**留空则为随机烟花**

## 正常烟花
普普通通的烟花
```yaml
type: "original"
count: 1
xOff:
  minimum: 0.0
  maximum: 1.0
yOff: [0.0, 1.0]
zOff: 1.0
```
- **xOff, yOff, zOff** 烟花偏移量，默认为0.0，用区间表示，详见[区间](interval.md)
- **count** 烟花数量，默认为1

## 等待
从上个节点开始，等待一段时间后，再继续流程
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
引用其他流程节点
```yaml
type: "reference"
target: "example"
```
- **target** 引用目标 ID，不可为当前流程
