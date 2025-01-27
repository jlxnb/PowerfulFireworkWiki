---
title: 配置文件
sidebar_position: 100
---

# 配置文件
配置系统可能后续会有较大更改, 更新插件时请注意及时查看wiki和更新日志
## config.yml

```yaml
# 是否启用调试模式
# 如果你是普通用户，不要修改此项
debug: false
# 随机烟花配置
random-firework:
  # 是否启用随机烟花
  enabled: true
  # 在玩家未操作开关的情况下，是否默认开启随机烟花
  # 游戏内，玩家可使用 /fireworks toggle 决定是否开启
  # 具体可以参见 permission.md 章节
  turn-on-by-default: true
  # 是否自动配置烟花燃放距离
  # 自动配置:即自动设置为服务器视距
  automatic-distance: true
  # 烟花燃放距离
  # 启用automatic-distance后，该距离自动失效
  distance: 20
  # 禁用的世界
  # 在下界中，random-firework会声称在在顶层基岩上
  # 因此默认配置文件中加入了world_nether
  blacklist-worlds:
    - world_nether
  # 是否在随机烟花加入随机文字 (实验性功能)
  text:
    # 是否启用
    enabled: true
    # 文字大小, 详见config/nodes.md中的对应内容
    size: 1.0
    # 字体, 详见config/nodes.md中的对应内容
    font: example
    # 文字, 字符串形式
    texts:
      - Hello World!
      - AWA
    # 文字间隔, 详见config/nodes.md中的对应内容
    gap: 1
    # 出现文字的概率, 单位: 1
    chance: 0.5
# 字体列表
# 键为text类型节点中font选项填写的内容
# 值为fonts下的文件名
fonts:
  example: example.bdf
```
- 没啥好说的，不详解了
## 烟花流程配置
本部分内容不会自动生成配置文件，请在插件生成的``fireworks``文件夹中自行新建``yaml``文件，并按 _下方示例_ 和 [流程节点](nodes.md) 中进行配置。
### 示例

```yaml
# 当前流程配置的ID，用于在游戏中燃放，不能与其他流程重复
id: "test"

# 预设烟花，具体见下方的详解
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

# 主体部分，定义烟花的全过程
# 具体见 config/nodes.md 章节
nodes:
  - type: "original"
    xOff:
      minimum: 0.0
      maximum: 0.0
    yOff:
      minimum: 1.0
      maximum: 1.0
    zOff:
      minimum: 1.0
      maximum: 1.0
    presets: [a]

  - type: "wait"
    ticks: 20

  - type: "original"
    count: 5
    xOff:
      minimum: -5.0
      maximum: 5.0
    yOff: 0.0
    zOff: [-5.0, 5.0]

  - type: "text"
    text: "Minecraft"
    flyTime: 20
    rotate: false
    presets: [a]
    gap: 1
    font: example
    size: 1.5
    face: NORTH_WEST
```

- **id** 此烟花流程的 ID，不能与其他流程重复
- **presets** 预设烟花配置
  - **[id]** 预设 ID
    - **effects** 效果（列表）
      - **colors** 字符串列表，主要颜色，使用 RGB 16 进制颜色代码如 `#FFFFFF`
      - **fades** 字符串列表，次要颜色，使用 RGB 16 进制颜色代码如 `#FFFFFF`
      - **flicker** 是否启用闪烁
      - **trail** 是否启用尾迹
      - **type** 效果类型，可选值为 `BALL` `BALL_LARGE` `BURST` `CREEPER` `STAR`
- **nodes** 烟花流程主体（列表），专用配置见 [流程节点](nodes.md)
