import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.BmdFiWrL.js";const y=JSON.parse('{"title":"自定义 IP 地理位置数据库","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/q11.md","filePath":"guide/q11.md","lastUpdated":1733027137000}'),t={name:"guide/q11.md"},h=n(`<h1 id="自定义-ip-地理位置数据库" tabindex="-1">自定义 IP 地理位置数据库 <a class="header-anchor" href="#自定义-ip-地理位置数据库" aria-label="Permalink to &quot;自定义 IP 地理位置数据库&quot;">​</a></h1><p><em>V0版本，不适用于V1版本</em></p><p>Dashboard v0.18.3+ 采用离线数据库获取 GeoIP 信息，如需编译正确显示地理位置信息的 Dashboard，必须在 <code>pkg/geoip/geoip.db</code> 路径下放置符合 IPinfo 格式的 mmdb 数据库。</p><p>IPinfo 格式包含以下字段：</p><ul><li>作为条目的 IP 子网</li><li><code>continent</code>：大洲代码</li><li><code>continent_name</code>：大洲名称</li><li><code>country</code>：国家/地区代码</li><li><code>country_name</code>：国家/地区名称</li></ul><p>其中 Dashboard 只需要用到 <code>country</code> 信息，其它字段可留空。</p><h2 id="编辑数据库" tabindex="-1">编辑数据库 <a class="header-anchor" href="#编辑数据库" aria-label="Permalink to &quot;编辑数据库&quot;">​</a></h2><p>目前推荐使用 MaxMind 官方使用的 <code>mmdbwriter</code> 和 <code>maxminddb-golang</code> 这两个库进行 mmdb 的编辑操作。</p><p>如果你的主要目的是为了校正地理信息，建议直接在 IPinfo 原版数据库的基础上修改。类似的操作可以参考 <a href="https://github.com/SagerNet/sing-geoip" target="_blank" rel="noreferrer">sing-geoip</a> 项目。</p><p>这里以校正 IPinfo 数据为例，你需要使用 <code>ReplaceWith</code> inserter（此为默认值）并写入 <code>mmdbtype.Map</code> 信息：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subnet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IPNet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    IP:   net.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ParseIP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;114.5.1.4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Mask: net.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CIDRMask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">countryMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mmdbtype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mmdbtype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">countryMap[mmdbtype.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;country&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mmdbtype.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JP&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> writer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Insert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(subnet, mmdbtype.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(countryMap)); err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>其中 <code>writer</code> 为一个 <code>*mmdbwriter.Tree</code> 的实例，需要通过 <code>mmdbwriter.New</code> 方法创建。具体操作和插入其它字段的过程不再赘述。</p><p>编辑完成并将数据库信息写入到文件后，可以使用 <code>mmdbinspect</code> 命令行工具测试数据库信息。例如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mmdbinspect</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./country.mmdb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 114.5.1.4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;Database&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./country.mmdb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;Records&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;Network&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;114.5.1.4/32&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;Record&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;continent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;continent_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Asia&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;country&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JP&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;country_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Japan&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;Lookup&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;114.5.1.4&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>确定格式、信息无误后便可用于 Dashboard 编译。之后可通过 <code>grpcurl</code> 或类似工具测试查询 API 是否工作正常：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grpcurl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -proto</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./nezha/proto/nezha.proto</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -plaintext</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;client_secret: test&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;ip&quot;: &quot;114.5.1.4&quot;}&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:5555</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proto.NezhaService/LookupGeoIP</span></span></code></pre></div>`,16),p=[h];function k(l,e,E,d,r,o){return a(),i("div",null,p)}const F=s(t,[["render",k]]);export{y as __pageData,F as default};
