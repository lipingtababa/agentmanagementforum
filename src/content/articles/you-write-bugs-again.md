---
title: "你又写Bug了"
description: "6996行PR中，AI自己写的代码没被挑出大毛病，唯二的两个问题是人类亲自指挥、亲自部署的结果。管住手。"
author: benyu
date: 2026-01-28
tags: [ai-coding, agent-management, code-quality]
original_url: https://mp.weixin.qq.com/s/kmE8q9_IrOjcQqJ-Sd2fUQ
---

我司有个Marcus大师。

他对代码质量有极高的标准。每次我在Slack群里发一个很难的PR，只要看到有人标了一个👀 emoji，我就知道一定是他。

这周我提了个PR：6996行新增，487行删除，67个文件，跨3个模块。Marcus照例review了。

他找到了两个问题：
1. Log了敏感信息
2. DB migration放在一个文件里，而不是拆成一系列文件

我看完他的comments，笑了。

这两个问题，都是Claude Code在我的明确要求下做的。
第一个是我troubleshoot的时候加的，后面忘了改回来。
第二个纯粹是因为我厌恶多个DB migration文件，但是我让Claude Code合并的时候，做得又不优雅。

换句话说，6996行代码里，AI自己写的部分，Marcus没挑出大毛病。唯二的两个问题，是我亲自指挥、亲自部署的结果。

我的AI agents写出来的代码，已经超越了我的水准。而我的直接干涉，实实在在地拉低了代码质量。

就像我的朋友Dylan说的那样，"AI：马工，你怎么又来写BUG了？"

---

我的AI Agent团队有13个agents和7个skills：PM负责需求，architect负责设计，scrum-master拆票，tester写测试，coder写实现，quality-checker做质量检查，deployer负责部署……

工作流是这样的：一个orchestrator调用planner去读银行API、选auth flow、定计划，然后调用tester和coder去实现。整套流程跑下来，质量已经能经受 Marcus 的review。除了我自己插手的地方。

鸭哥说过：

> 一个老练的经理会更看重团队长期的扩展性（Scalability），而不是短期的产出。他会想办法把自己的时间花在对整个团队都有高价值的、杠杆性质的工作上去，比如制定技术路线、做高质量的技术决策。一个好的决策和设计会让团队里的每个人都受益，这样他对团队做的就是乘法而不是加法，进而让团队成为他个人能力的放大器，实现远远更高的能力上限。

我的AI团队能做乘法，但我一插手就变成了减法。

管住手。
