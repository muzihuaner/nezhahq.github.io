import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.BmdFiWrL.js";const g=JSON.parse('{"title":"设置","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/settings.md","filePath":"guide/settings.md","lastUpdated":1733027137000}'),i={name:"guide/settings.md"},l=r('<h1 id="设置" tabindex="-1">设置 <a class="header-anchor" href="#设置" aria-label="Permalink to &quot;设置&quot;">​</a></h1><p><strong>登录管理页面后，点击头像 → 系统设置，即可进入设置页面。</strong></p><hr><h2 id="站点名称" tabindex="-1">站点名称 <a class="header-anchor" href="#站点名称" aria-label="Permalink to &quot;站点名称&quot;">​</a></h2><p>在此项中可以自定义站点标题，便于识别和管理。</p><hr><h2 id="语言设置" tabindex="-1">语言设置 <a class="header-anchor" href="#语言设置" aria-label="Permalink to &quot;语言设置&quot;">​</a></h2><p>哪吒监控目前支持以下语言：</p><ul><li>简体中文</li><li>繁體中文</li><li>English</li><li>Español</li></ul><p>我们欢迎您对翻译进行勘误，或贡献更多语言支持。</p><hr><h2 id="自定义代码" tabindex="-1">自定义代码 <a class="header-anchor" href="#自定义代码" aria-label="Permalink to &quot;自定义代码&quot;">​</a></h2><p>此项用于在游客页面中添加自定义样式或脚本代码，例如修改 LOGO、调整色调、添加美化代码或统计代码。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>自定义代码仅在游客首页生效，<strong>管理面板中不生效</strong>。<br> 若需要修改管理面板内容，请手动修改 Docker 容器中的主题文件。</p></div><hr><h2 id="仪表板服务器域名-ip-无-cdn" tabindex="-1">仪表板服务器域名/IP（无 CDN） <a class="header-anchor" href="#仪表板服务器域名-ip-无-cdn" aria-label="Permalink to &quot;仪表板服务器域名/IP（无 CDN）&quot;">​</a></h2><ul><li>此项为使用一键脚本安装 Agent 的必要设置。</li><li>设置内容需为无 CDN 的域名或 IP，例如：<code>data.example.com</code>。</li><li>详情请参考 <a href="/guide/agent.html#准备工作">Agent 安装准备工作</a>。</li></ul><hr><h2 id="前台查看密码" tabindex="-1">前台查看密码 <a class="header-anchor" href="#前台查看密码" aria-label="Permalink to &quot;前台查看密码&quot;">​</a></h2><p>若不希望游客直接访问 Dashboard，可以在此设置一个查看密码。<br> 设置完成后，访问主页需要输入密码。</p><hr><h2 id="真实-ip-请求头" tabindex="-1">真实 IP 请求头 <a class="header-anchor" href="#真实-ip-请求头" aria-label="Permalink to &quot;真实 IP 请求头&quot;">​</a></h2><ul><li><code>CF-Connecting-IP</code> 是用于获取访问者真实 IP 的请求头字段。</li><li>如果通过 Cloudflare CDN 代理访问 Dashboard，启用此功能可让源服务器正确识别访问者的真实 IP，便于安全审计、防火墙规则和日志记录。</li></ul><hr><h2 id="ip-变更提醒" tabindex="-1">IP 变更提醒 <a class="header-anchor" href="#ip-变更提醒" aria-label="Permalink to &quot;IP 变更提醒&quot;">​</a></h2><p>此功能允许在服务器 IP 地址变更时发送通知，设置步骤如下：</p><h3 id="配置选项" tabindex="-1">配置选项 <a class="header-anchor" href="#配置选项" aria-label="Permalink to &quot;配置选项&quot;">​</a></h3><ol><li><p><strong>覆盖范围</strong><br> 选择一条规则以确定需要监控哪些服务器。</p></li><li><p><strong>特定服务器</strong><br> 配合覆盖范围设置，可以为选定规则添加排除项。</p></li><li><p><strong>提醒发送至通知分组</strong><br> 选择通知方式（通知方式需提前在“通知”页中设置）。</p></li><li><p><strong>启用功能</strong><br> 设置完成后，勾选 <strong>启用</strong> 才会使通知生效。</p></li><li><p><strong>通知中显示完整 IP 地址</strong><br> 默认情况下，IP 变更通知会隐藏完整 IP 地址。<br> 如需显示完整 IP 地址，可勾选此选项。</p></li></ol><hr><h2 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to &quot;用户管理&quot;">​</a></h2><p>此标签页允许为 Dashboard 添加多个用户。</p><ul><li>可以添加多个用户，便于多人协作管理。</li></ul>',32),o=[l];function n(s,h,d,c,p,u){return t(),e("div",null,o)}const P=a(i,[["render",n]]);export{g as __pageData,P as default};
