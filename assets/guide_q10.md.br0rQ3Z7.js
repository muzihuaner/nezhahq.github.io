import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.BmdFiWrL.js";const g=JSON.parse('{"title":"配置OIDC认证","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/q10.md","filePath":"guide/q10.md","lastUpdated":1733027137000}'),l={name:"guide/q10.md"},t=n(`<h1 id="配置oidc认证" tabindex="-1">配置OIDC认证 <a class="header-anchor" href="#配置oidc认证" aria-label="Permalink to &quot;配置OIDC认证&quot;">​</a></h1><p><em>V0版本，不适用于V1版本</em></p><p>修改 <code>config.yaml</code> 文件的内容来配置 OIDC（OpenID Connect）认证。OIDC 是建立在 OAuth 2.0 协议之上的认证层，允许应用程序通过授权服务器执行的认证来验证用户的身份。这种方法广泛用于实现现代应用程序的单点登录。</p><h2 id="配置详细信息" tabindex="-1">配置详细信息 <a class="header-anchor" href="#配置详细信息" aria-label="Permalink to &quot;配置详细信息&quot;">​</a></h2><p>以下是在 <code>config.yaml</code> 中配置 OIDC 设置的逐步指南：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oauth2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">oidc</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # （必填）指定认证类型为 OIDC</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  oidcDisplayName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">OIDC</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # （可选，默认值为 OIDC）登录页面显示的名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  admin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # （至少填写 admin 或 adminGroups 中的一个；默认为空）管理员用户名，用逗号分隔。列在此处的用户被视为管理员</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  adminGroups</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # （至少填写 admin 或 adminGroups 中的一个；默认为空）管理员组，用逗号分隔。属于这些组的用户被视为管理员。如果不使用组管理，可以省略此项</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  clientid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># （必填）OIDC 客户端 ID</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  clientsecret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># （必填）OIDC 客户端密钥</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  oidcIssuer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://auth.example.com/realms/master</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # （必填）OIDC 提供商的 issuer URL，可以从您的OIDC 提供商处获取</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # oidcLogoutUrl: https://auth.example.com/realms/master/protocol/openid-connect/logout  # （因 bug 目前不能使用）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # oidcRegisterUrl: # （可选）OIDC 提供商的注册链接</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  oidcScopes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">openid,profile,email</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # （可选，默认值为 openid,profile,email ）OIDC 请求的 scope，用逗号分隔</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  oidcLoginClaim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sub</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # （可选，默认值为 sub）OIDC 返回的用户名字段，可以是 preferred_username、sub 或email</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  oidcGroupsClaim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">groups</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # （如果使用 adminGroups，则必填，默认值为 groups ）OIDC 返回的用户组信息字段，可以是 groups 或 roles</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  oidcAutoCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # （可选，默认值为 false）如果用户不存在，是否自动创建用户</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  oidcAutoLogin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # （可选，默认值为 false）当地址是 /login 时，是否自动跳转到OIDC登录页面</span></span></code></pre></div>`,6),p=[t];function h(e,k,d,r,o,c){return a(),i("div",null,p)}const D=s(l,[["render",h]]);export{g as __pageData,D as default};
