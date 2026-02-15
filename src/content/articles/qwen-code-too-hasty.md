---
title: 阿里的qwen code太草率了
description: 阿里的qwen-code CLI是基於谷歌Gemini CLI的分叉。法律上完全沒問題，但從產品管理角度，這是個很草率的決定。用戶發現初始化命令生成的還是GEMINI.md而不是QWEN.md，這是fork時檢查不徹底的遺留。
author: magong
date: 2025-08-09
tags: [ai-coding, industry-analysis]
original_url: https://mp.weixin.qq.com/s/6WJei6N398JAY2C6nZ3mUQ
---

阿里的qwen-code CLI是基於谷歌的Gemini CLI 分叉的。後者的開源協議是非常寬鬆的 Apache 2.0，所以阿里這樣做，法律上完全沒問題。

但是合規之外，還是有不少問題的。

用戶體驗上，就有用戶反應工具的初始化命令生成的是谷歌Gemini模型需要的GEMINI.md，而不是qwen需要的QWEN.md。顯然，這是fork的時候，檢查不徹底導致的遺留。

> What happened?
> While exploring the CLI, I noticed that the /init command generates a GEMINI.md file.
> What did you expect to happen?
> The /init command should ideally generate a QWEN.md,
>
> https://github.com/QwenLM/qwen-code/issues/231

在這之外，產品管理也會有比較大的挑戰。谷歌的這個項目雖然開源，但並不採用社區協作開發模式，基本不接受外部貢獻。項目貢獻榜前幾名全都是谷歌員工。這就意味著，Gemini CLI必然不會照顧非谷歌大模型的需求。

在此前提下，qwen要麼投入同等的資源維護一個完全不相容的分叉，要麼就忍聲吞氣跟著谷歌走。後者顯然是不可接受的，而前者，就沒達到節省成本的目的。

用戶們也敏銳的發現阿里團隊對qwen code不太積極維護了，他們甚至語帶嘲諷的催促中國第一CLI別停止更新。

![image-1](/images/articles/qwen-code-too-hasty/1.jpg)

這就涉及到第三個問題，品牌形象問題。用戶很自然的產生疑問，一個大公司把客戶端軟體建立於一個自己不可控的源頭上，是不是意味著他們資源有限無法投入，或者不重視不願意投入？

推特上這位老哥，就刻意翻出qwen code裡提到Gemini的地方，用來懟qwen的宣傳。可以看出，這位老哥並非qwen的競爭對手，他就是純粹在較真抬杠。但是他有一點說得很到位

"如果你把Gemini CLI複製成qwen code，卻連Gemini都沒清理乾淨，我不會把你的雄心當作一回事。"

![image-2](/images/articles/qwen-code-too-hasty/2.jpg)

其實，Gemini CLI做的很爛，issue裡全是bug report，都淹沒了feature request。谷歌的大模型在編碼領域也沒有競爭力，沒辦法把這個很挫的CLI帶成事實標準。qwen code 分叉它，相當於投胎鳳姐然後再去整容，刻意走了一道彎路。

總而言之，從產品管理的角度，qwen code基於Gemini CLI分叉是一個很草率的決定。導致客戶端的品質和qwen大模型的強勁競爭力不匹配。

如果阿里確實不想自己開發客戶端（其實用上AI的話，也花不了多大的成本），幹脆贊助一個社區主導的CLI，Open Code或者 Crush 都可以，選誰都比選Gemini CLI強。
