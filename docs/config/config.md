---
title: 配置文件
sidebar_position: 100
---

# 配置文件

## config.yml

```yaml

#不需要更改此值
config-version: 0.0.1

#是否启用调试模式
debug: false

#随机烟花配置, 即:对于每个玩家, 在他的四周随机燃放烟花的配置
random-firework:
  #是否启用这一项功能
  enabled: true
  #两次烟花的随机间隔, 这一项会决定烟花的密度 单位:tick
  delay:
    minimum: 10
    maximum: 20
  #是否自动调节烟花的随机燃放位置?
  #自动调节:即根据当前服务器视觉距离设置烟花燃放半径
  automatic-distance: true
  #自定义燃放半径 单位:格
  distance: 20
  #烟花飞行的时间, 单位:tick
  fly-time:
    maximum: 30
    minimum: 70

#加载的字体列表
fonts:
  example: example.bdf
```

## 烟花流程配置

### 示例

```yaml
id: "test"

presets:
  a:
    effects:
      - colors:
          - "#FFFFFF"
        flicker: true
  b:
    effects:
      - colors:
          - "#000000"
        fades:
          - "#FFFFFF"

nodes:
  - type: "single"
    xOff: 0.0
    yOff: 1.0
    zOff: 1.0
    preset: a

  - type: "wait"
    ticks: 20

  - type: "random"
    full: true
    count: 5
    maxX: 5.0
    maxY: 5.0
    maxZ: 5.0
    minX: -5.0
    minY: -5.0
    minZ: -5.0
    presets: [ a, b ]

  - type: "text"
    text: "Minecraft"
    flyTime: 20
    rotate: false
    preset: a
    gap: 1
    font: example
    size: 1.5
    face: NORTH_WEST

```

- **id** 此烟花流程的 ID，不能与其他流程重复
- **presets** 单个烟花预设
  - **[id]** 预设 ID
    - **effects** 效果（列表）
      - **colors** 字符串列表，主要颜色，使用 RGB 16 进制颜色代码如 `#FFFFFF`
      - **fades** 字符串列表，次要颜色，使用 RGB 16 进制颜色代码如 `#FFFFFF`
      - **flicker** 是否启用闪烁
      - **trail** 是否启用尾迹
      - **type** 效果类型，可选值为 `BALL` `BALL_LARGE` `BURST` `CREEPER` `STAR`
- **nodes** 烟花流程主体（列表），专用配置见 [流程节点](nodes.md)
  - **type** 流程节点类型
  - **preset** 使用的预设 ID，定义于上方presets
