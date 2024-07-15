import{_ as e,c as a,o,a4 as t}from"./chunks/framework.BmdFiWrL.js";const u=JSON.parse('{"title":"内网穿透功能配置","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/nat.md","filePath":"guide/nat.md","lastUpdated":1721002941000}'),l={name:"guide/nat.md"},i=t('<h1 id="内网穿透功能配置" tabindex="-1">内网穿透功能配置 <a class="header-anchor" href="#内网穿透功能配置" aria-label="Permalink to &quot;内网穿透功能配置&quot;">​</a></h1><p>哪吒服务器监控提供内置的内网穿透功能，允许用户通过设定 Dashboard 作为服务端，将运行在 Agent 上的内网服务（如家庭 OpenWrt 路由器、NAS 设备等）映射到公网上，便于外部访问。目前仅支持 HTTP 协议的穿透。</p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>在配置内网穿透前，请确保完成以下准备工作：</p><ul><li>确认已在您的设备上安装并运行哪吒监控的 Agent，并保持其与 Dashboard 的连接状态。</li><li>准备一个公网域名，推荐使用子域名进行操作，如<code>service-1.example.com</code>。将此域名解析指向 Dashboard 服务器的公网 IP 地址。</li><li>请注意，一个域名只能映射到一个 Agent 的内网服务。若需映射多个服务，请分别使用不同的域名，例如 <code>service-2.example.com</code>。</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果您的 Dashboard 服务器使用宝塔面板或其他管理工具，请确保所用域名，如 <code>service-1.example.com</code> 已在该面板中正确绑定至 Dashboard 站点，否则可能导致无法访问。</p></div><h2 id="内网穿透配置步骤" tabindex="-1">内网穿透配置步骤 <a class="header-anchor" href="#内网穿透配置步骤" aria-label="Permalink to &quot;内网穿透配置步骤&quot;">​</a></h2><ol><li>登录至 Dashboard 管理页面，选择菜单栏中的“内网穿透”选项。</li><li>点击“添加”按钮，并填写以下所需信息： <ul><li><strong>穿透名称</strong>：为此穿透配置自定义一个名称，如<code>OpenWrt 登录页</code>。</li><li><strong>Agent ID</strong>：填写需要进行穿透的 Agent 的 ID。</li><li><strong>内网服务地址</strong>：填写需穿透的内网服务地址，格式为 <code>IP:端口</code>，例如 <code>127.0.0.1:80</code>。</li><li><strong>绑定域名</strong>：填写已准备的公网域名，如 <code>service-1.example.com</code>。</li></ul></li><li>完成填写后，点击“新增”按钮，等待穿透生效。</li><li>尝试访问 <code>http://service-1.example.com</code>，以验证是否成功映射至 Agent 上的内网服务。</li></ol><h2 id="使用须知" tabindex="-1">使用须知 <a class="header-anchor" href="#使用须知" aria-label="Permalink to &quot;使用须知&quot;">​</a></h2><ul><li>保持 Agent 与 Dashboard 之间的连接是内网穿透功能正常运作的前提。若 Agent 连接中断，已配置的穿透将暂时失效。</li><li>考虑到内网穿透隧道本身不加密数据，建议在 Agent 与 Dashboard 之间以及 Dashboard 与客户端浏览器之间<strong>使用 HTTPS 协议</strong>，以确保数据传输过程的安全性。</li></ul>',10),r=[i];function s(c,d,n,h,p,_){return o(),a("div",null,r)}const g=e(l,[["render",s]]);export{u as __pageData,g as default};
