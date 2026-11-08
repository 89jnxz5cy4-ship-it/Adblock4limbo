[![Fork](https://img.shields.io/github/forks/limbopro/Adblock4limbo)](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/network/members)
[![Stars](https://img.shields.io/github/stars/limbopro/Adblock4limbo)](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/stargazers)
[![Commit](https://img.shields.io/github/commit-activity/m/limbopro/Adblock4limbo?label=Commits)](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/commits/main)
[![Issues](https://img.shields.io/github/issues/limbopro/Adblock4limbo)](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/issues)
[![License](https://img.shields.io/github/license/limbopro/Adblock4limbo)](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/blob/main/LICENSE)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Flimboprossr)](https://twitter.com/limboprossr)

---

![Quantumult X 去网页广告效果][2]

![毒奶去网页广告计划-导航-工具箱-元素屏蔽/追踪器](https://limbopro.com/usr/uploads/2025/12/3091316524.jpg)

### 如何为任意网页引入导航

> 除毒奶去网页广告计划的特定网站，**如何在任意网页引入导航页及其1.8万+通用去广告选择器**？以及使用导航自带**工具箱**参阅 https://t.me/limboprossr/3445 

举例如下，具体操作参阅示例：https://t.me/limboprossr/3445 
```
# 配置主机名
## 以BBC News 及 TED 举例，想在它们的网站上调用导航及沉浸式翻译功能（学英语）
## 需配置 hostname 即主机名才可以对其域名进行解密 MITM
hostname = www.bbc.com, www.ted.com

#重写类型选择
script-response-body

#匹配的URL填写
##你可以按需编写，比如要匹配哪些网页？不匹配哪些
## 匹配网页链接中包含bbc或ted 的网络请求
(bbc|ted)
## 匹配网页链接中包含 bbc 或 ted 但 不包含 .css、.js、.mp4 或 .font 这四个扩展名中任意一个的网络请求
^(?=.*(bbc|ted))(?!.*\.(css|js|mp4|font)).*$
## 网页域名必须在 hostname 里

#脚本路径填写
## 这个脚本实现了如下几个功能
## 在网页插入去毒奶去特定广告计划的去广告脚本及1.8万+通用去广告CSS选择器
## 根据网站的域名加载对应的 独立去广告CSS选择器
## 加载导航按钮及导航页及其附带的小工具
https://raw.githubusercontent.com/89jnxz5cy4-ship-it/Adblock4limbo/main/Adguard/Adblock4limbo.js
```

# Adblock4limbo

## 毒奶去广告计划介绍

**毒奶去广告计划始于 11.01.2020**，原文：https://limbopro.com/archives/12904.html ；

> ✅ **效用**：毒奶去广告计划（稳定版）For QuantumultX/Surge/Shadowrocket/loon/Stash..），仅针对iOS浏览器（Chrome/Safari等），**移除特定网站网页广告**（Javascript 弹窗/Ads横幅等），如谷歌搜索结果中的内容农场内容/百度与谷歌搜索结果页面的广告/禁漫天堂/Pornhub/~~哔滴影视~~/剧迷网/~~奈菲影视~~/~~低端影视~~/~~真不卡~~/~~91美剧网~~/Jable/MissAV等，**提升iPhone或iPad端浏览器观影或网页浏览体验**；本计划会长期更新，以适应未来更多需要；

### 其他注意事项

> 🈲️ 另外，按教程配置好后，如若仍发现广告，请按以下方式进行重试：1.**清理浏览器缓存** 2.在**无痕模式下打开该页面**，如若仍有广告请优先 [提交issue](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/issues)  反馈（附上该页面截图和链接/18🈲图片注意打码处理）；3.请确保你的浏览器没有自带广告屏蔽功能（如Alook浏览器），其内置的过滤器将导致一些冲突；4.建议使用谷歌浏览器，~~Safari~~；

### 目前在维护的网站目录（示例）

| 网站  | 网站类型 | 支持软件 | 广告类型 |
| --- | --- | --- | --- |
| ~~[低端影视](https://ddys.pro/)~~ | 在线影视 | Surge/QuantumultX/小火箭/油猴 | 图片/跳过视频广告倒计时 |
| [小宝影视](https://xiaoheimi.net/index.php) | 在线影视 | 同上  | 图片  |
| ~~[泥巴影视](https://www.nivod8.tv/)~~| 在线影视 | 同上  | 播放页片头20秒广告加速移除 |
| [CN影视](https://cnys.tv/) | 在线影视 | 同上  | 图片广告/片头广告 |
| [剧迷网](https://gimy.ai/) | 在线影视 | 同上  | 图片  |
| ~~[哔嘀影视](https://www.bdys10.com/)~~ | 在线影视 | 同上  | 图片/跳过片头视频广告倒计时 |
| [独播库](https://www.duboku.tv/) | 在线影视 | 同上  | 图片  |
| [欧乐影院](https://www.olevod.tv/index.html) | 在线影视 | 同上  | XHR |
| ~~555影院~~ | 在线影视 | 同上  | 图片  |
| [libvio](https://www.libvio.one/) | 在线影视 | 同上  | 图片  |
| [韩剧TV](https://www.tvn.cc/) | 在线影视 | 同上  | 图片（需配合去广告分流） |
| [天天视频](https://ttsp.tv/) | 在线影视 | 同上  | 动图/弹窗 |
| [NT动漫](https://www.ntdm.com/) | 在线影视 | 同上  | 图片  |
| [Google](https://www.google.com.hk/)/[Bing](https://www.bing.com/) | 搜索引擎 | 同上  | 屏蔽搜索结果页的内容农场结果/文字及图片 |
| [百度搜索](https://www.baidu.com/)/[知道](https://zhidao.baidu.com/) | 搜索引擎 | 同上  | 图片  |
| [Jable](https://jable.tv/) | Porn | 同上  | 图片/弹窗/M3U8文件提取 |
| [MissAV](https://missav.com/) | Porn | 同上  | 图片/弹窗/离开页面后正常播放视频 |
| [Supjav](https://supjav.com/) | Porn | Surge/QuantumultX/小火箭/ | 播放页弹窗/图片 |
| [Javday](https://javday.tv/) | Porn | Surge/QuantumultX/小火箭/ | 图片/弹窗 |
| [njav](https://njav.tv/zh/) | Porn | Surge/QuantumultX/小火箭/ | 图片  |
| [Netflav](https://netflav.com/) | Porn | Surge/QuantumultX/小火箭/ | 图片/播放页弹窗 |
| [Pornhub](https://cn.pornhub.com/) | Porn | Surge/QuantumultX/小火箭/ | 图片/视频广告（需配合去广告分流） |
| [Javlibrary](https://www.javlibrary.com/cn/) | Jav图书馆 | 同上  | 图片  |
| [Javbus](https://www.javbus.com/) | Jav图书馆 | 同上  | 图片  |
| [Xvideos](https://www.xvideos.com/) | Porn | Surge/QuantumultX/小火箭/ | 片头广告/图片 |
| [91Porn](https://91porn.com/) | Porn | 同上  | 图片/视频广告（需配合去广告分流） |
| [4hu](https://4hu.tv/) | Porn | 同上  | 图片/弹窗 |
| [Hitomi](https://hitomi.la/index-chinese.html) | 工口漫画及下载 | 同上  | 图片  |
| [肉漫](https://rouman5.com/home) | 工口漫画 | 同上  | 图片  |
| [绅士漫画](https://www.wnacg.com/) | 工口漫画 | 同上  | 图片  |
| [禁漫天堂](https://18comic.org/) | 工口漫画 | 同上  | 图片  |
| [anime1](https://anime1.me/) | 漫画在线 | 同上  | 图片  |
| [hanime1](https://hanime1.me/) | 工口动漫 | 同上  | 图片  |
| [知乎](https://www.zhihu.com/knowledge-plan/hot-question/hot/0/hour) | 问答  | 油猴  | PC端未登录状态浏览知乎体验优化 |

#### 目前在维护的网站目录（即时更新）


> 目前去网页广告计划支持约30+网站：涵盖**在线影视**/**电子漫画**/XXXX；  
参阅**完整**的：[**在维护的网站列表**](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/blob/main/Adblock4limbo.weblist)（**该列表即时更新，如有出入请以此为准**）；如果其中没有你 **希望支持去广告的网站**或在维护的网站换了域名，或又出现了广告，可以在本文 **反馈问题/提交新网站** 部分，按要求 **反馈问题/提交新网站**；

> 如无特别说明，【毒奶去网页广告计划】在对以上网站网页广告去除过程中，代理软件（如Surge、**QuantumultX（最优先适配）**、Shadowrocket等）将优先支持，油猴用户次之或不完美支持，PC、Mac等桌面浏览器用户优先推荐安装 [ublock origin](https://limbopro.com/archives/1098.html) 等浏览器扩展，Android 用户推荐安装 [Firefox 浏览器 + ublock origin 组合](https://limbopro.com/archives/26805.html) 以屏蔽网页广告。

> FAQ(可能出现的问题及解决办法): https://limbopro.com/archives/12904.html （譬如 www.google.com:80/443 N/A MitM failed ）；  
> iOS 用户常见FAQ：https://t.me/Adblock4limbo/21 ；  
> 油猴用户常见FAQ：https://greasyfork.org/zh-CN/scripts/443290-adblock4limbo；  

## 如何反馈问题/提交新网站（重要）

![New issue](https://limbopro.com/usr/uploads/2023/09/407956982.png)

> **电报机器人**🤖： [http://t.me/limboprobot](http://t.me/limboprobot)（简单建议/问题反馈/有趣文章或讯息投稿/...） ；    
**讨论群组**：[https://t.me/Adblock4limbo/21](https://t.me/Adblock4limbo/21) 反馈与去网页广告相关问题，非相关话题可能会被移出群组；  

> 1.如果 [在维护的网站列表](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/blob/main/Adblock4limbo.weblist) 里没有你 **希望支持去广告的网站**，你可以 [提交issue](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/issues)；2.然后按照后文的 **配置教程** 部分安装去广告分流/模块/重写/或油猴脚本；（如无意外，你提交的网站较有价值的话，一般24h内会完成去广告支持，届时请更新相应模块/重写/分流）；3.在日常使用过程中**你的反馈很重要**，如果 [在维护的网站列表](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/blob/main/Adblock4limbo.weblist) 里的网站**换了域名**，或**又出现了广告**，请[提交issue](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/issues) 为我们提供相关信息；  

> **反馈问题/提交新网站** 需包含信息：网站域名/广告出现页面网址/广告类型如(GIF|弹窗|底部横幅|...)，你使用的代理软件(如QuantumultX/Shadowrocket/Surge)或 浏览器扩展 油猴-Tampermonkey...；## 如何反馈问题/提交新网站（重要）  

>> 不局限如上，越多细节越好。  
快来提交 [issue](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/issues) 吧！

### 去网页广告计划涉及脚本名称及其源码

1.**Adblock4limbo.js** —— 重写JS源码  https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/blob/main/Adguard/Adblock4limbo.js  
2.**Adblock4limbo.user.js** —— 去网页广告JS源码  https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/blob/main/Adguard/Adblock4limbo.user.js  
3.**Adblock4limbo.function.js** —— 右下角导航页JS源码  
https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/blob/main/Adguard/Adblock4limbo.function.js  
## 毒奶去广告使用方法（配置步骤）

完整配置教程：https://limbopro.com/archives/12904.html

### 毒奶去广告计划分流与重写；（由毒奶博主维护 for QuantumultX）

**1.分流引用** （为最新发布，请放置于**分流引用列表**的顶部）

```
https://limbopro.com/Adblock4limbo.list 
```

**2.重写引用** 

```
https://limbopro.com/Adblock4limbo.conf
```

**3.然后配置好证书📄（如已配置可忽略）**

**4.如仍有广告请清除浏览器缓存后重试**

### 毒奶去广告计划分流与重写；（由毒奶博主维护 for Surge）

**第一步：安装模块**：Surge - 首页 - 模块 - 安装新模块 - 粘贴下面的链接 - 好的；（如何 **更新模块**？：左滑 模块的名称 - 点击 更新；）；

```
https://limbopro.com/Adblock4limbo.sgmodule
```

**第二步：** 更新 **外部资源**：Surge - 首页 - 点击左上角 - 进入你的 **配置列表** - **编辑** - **外部资源** - 点击 **全部更新**（这一部很重要，很多时候大家在第一次更新模块后，就再也不手动去更新 **外部资源** 了，而是等待它自动更新；）；

**第三步：配置分流**：Surge - 首页 - 出站模式 - 规则分流 - 代理规则 - 新增 - 增加新规则集 - 外部规则集 - 策略（选） - Reject - 粘贴 如下 URL

```
https://raw.githubusercontent.com/89jnxz5cy4-ship-it/Adblock4limbo/main/Adblock4limbo_surge.list
```

> 模块引用后记得更新外部资源，并开启 **Rewrite、MitM，脚本**的 开关，配置并信任证书；

> **额外的配置**：MitM - 配置根证书 - 选项 - 开启 “跳过服务端证书验证” 以及 “用于TCP连接”，正常情况下无需开启；

> **如何更新模块与外部资源（脚本/分流/重写等）**：模块安装好后，可点击 - **模块** - 找到 **安装的模块** ，左滑 想要更新的模块 - 点击 **更新** ；返回 Surge - **首页** - 点击左上角的 **配置文件名称** - 找到 **编辑** - **外部资源** - **全部更新**； 

### 毒奶去广告计划（for Shadowrocket）

参阅原文：https://limbopro.com/archives/12904.html 在此不再列出；

### 毒奶去广告计划（for Loon）

参阅原文：https://limbopro.com/archives/12904.html 在此不再列出；

### 毒奶去广告计划（for Stash）

参阅原文：https://limbopro.com/archives/12904.html 在此不再列出；


## 去Youtube App 播放广告；

参阅原文：https://limbopro.com/archives/12727.html

## 分流规则及重写相关

在此毒奶对大家的付出表示感谢

1. [blackmatrix7](https://github.com/blackmatrix7/ios_rule_script/tree/master) blackmatrix7分流及重写（更新中）
2. [去广告分流增强](https://github.com/89jnxz5cy4-ship-it/Adblock4limbo/tree/main/rule) (更新中)
3. [limbopro](https://github.com/limbopro/Profiles/tree/master/limbopro) 机场专线（更新中）；
4. [NobyDa](https://github.com/NobyDa/Script/tree/master) 脚本仓库（*如删库可替换 NobyDa 为 limbopro，其他同理）
5. [NobyDa-AD](https://github.com/NobyDa/ND-AD) 野比去广告分流；（10w+）
6. [ConnersHua](https://github.com/ConnersHua/Profiles/tree/master) 神机规则（停止更新）
7. [DivineEngine](https://github.com/DivineEngine/Profiles/tree/master) 神机规则（停止更新）
8. [Qure](https://github.com/Koolson/Qure/tree/master/IconSet) 开源图标（停止更新）
9. [chavyleung](https://github.com/chavyleung/scripts) 签到脚本

## 其他系列教程（或参考）
0. [iOS Safari 内容拦截器 - 全方位去网页广告（免费，开源，社区维护）](https://limbopro.com/archives/safari-content-blocker.html)
1. [自己动手利用QuantumultX 屏蔽任意网站广告](https://limbopro.com/archives/12782.html)
2. [正则表达式30分钟入门教程](https://deerchao.cn/tutorials/regex/regex.htm)
3. [在线正则表达式测试](https://tool.oschina.net/regex/)
4. [毒奶预配置文件 For Quantumult X (懒人一键配置)](https://github.com/limbopro/Profiles4limbo)
5. [Mac/Windows 都适用的Adguard - 世界上最高级的广告拦截程序！（屏蔽广告、跟踪器以及安装油猴脚本)](https://limbopro.com/archives/adguard.html)
6. [订阅转换 - API - 让你的 Surge/ClashX 重新焕发生机](https://limbopro.com/archives/subconverter.html)
7. [Tiktok 免拔卡解锁](https://limbopro.com/archives/3629.html)
8. [Jable/Pornhub 视频下载（M3U8）](https://limbopro.com/archives/M3U8-Downloader.html)


## 进阶资料
 EasyList China
 [已知的 Adblock Plus 過濾條件集](https://adblockplus.org/zh_TW/subscriptions)
 [AdGuard 过滤器](https://adguard.com/zh_cn/blog/adguard-filters.html)

## 一些建议

 **Safari爱好者/Windows/Mac用户去广告建议：**
> 1. Safari（iOS） 用户，建议安装 [Safari-内容拦截器](https://limbopro.com/archives/safari-content-blocker.html)；
> 2. Windows/Mac 用户，建议安装 [AdGuard/Adblock 浏览器扩展](https://limbopro.com/archives/adguard.html)；
> 3. 喜欢用 Chrome（iOS），且拥有 QuantumultX/Surge，那么毒奶去计划（本计划）会非常适合你；
> 4. 你也可以根据 [自己动手利用QuantumultX 屏蔽任意网页广告](https://limbopro.com/archives/12782.html) 教程学习进行去网页广告作业；
> 5. 跟AdGuard浏览器扩展等去广告原理大抵相通的，重在理解；


## 去广告原理悉知

> 通过 QuantumultX / Surge 提供的 Rewrite 重写类型，如 reject / 302(重定向） / 307(重定向） / request-header（请求头） / response-body（请求头） / http-response / 实现对网页（HTML）各元素、资源的匹配，禁止加载，替换，插入，删除各类元素；本仓库提供大量的实例参考；

 **你可能需要了解到的知识：**
> 1. [**正则表达式**：](https://limbopro.com/archives/Regular_Expressions.html)
> 2. [重写类型response-body的用法丨利用 Quantumult X 替换网页元素实现去广告（正则表达式以及开发者工具、调试）](https://limbopro.com/archives/12782.html)
> 3. [前端三剑客学习手记 - HTML/CSS/JavaScript](https://limbopro.com/archives/15067.html)


[1]: https://raw.githubusercontent.com/89jnxz5cy4-ship-it/Adblock4limbo/main/NobyDa.jpg
[2]: https://limbopro.com/usr/uploads/2021/08/3373964069.jpg
