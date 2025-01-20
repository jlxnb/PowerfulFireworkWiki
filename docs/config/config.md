---
title: 配置文件
sidebar_position: 100
---

# 配置文件

## config.yml

```yaml
config-version: 0.0.1

debug: false

random-firework:
  min-delay: 10
  max-delay: 20
  automatic-distance: true
  distance: 20
  min-fly-time: 70
  max-fly-time: 120

fonts:
  example: example.bdf
```
- **config-version** 不需要更改此值
- **debug** 启用调试模式
- **fonts** 字体加载列表，从 `fonts` 文件夹搜索，支持格式和已测试字体见 [字体](fonts.md)

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
