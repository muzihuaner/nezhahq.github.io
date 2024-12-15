import{_ as e,c as t,o,a4 as s}from"./chunks/framework.BmdFiWrL.js";const h=JSON.parse('{"title":"WebSocket Connection Issues","description":"","frontmatter":{},"headers":[],"relativePath":"en_US/guide/q4.md","filePath":"en_US/guide/q4.md","lastUpdated":1734258434000}'),r={name:"en_US/guide/q4.md"},i=s('<h1 id="websocket-connection-issues" tabindex="-1">WebSocket Connection Issues <a class="header-anchor" href="#websocket-connection-issues" aria-label="Permalink to &quot;WebSocket Connection Issues&quot;">​</a></h1><ul><li><p><strong>Verify CDN Settings</strong>:<br> If a CDN is being used, ensure that your CDN provider supports WebSocket services and that WebSocket functionality has been correctly enabled.</p></li><li><p><strong>Check Reverse Proxy Configuration</strong>:<br> Ensure that the following paths are correctly configured for WebSocket support in your reverse proxy rules:</p><ul><li><code>/api/v1/ws/server</code></li><li><code>/api/v1/ws/terminal/:id</code></li><li><code>/api/v1/ws/file/:id</code></li></ul></li></ul><p>For detailed configuration instructions, refer to: <a href="/en_US/guide/q3.html">Configure Reverse Proxy</a>.</p>',3),n=[i];function a(c,l,d,u,_,p){return o(),t("div",null,n)}const g=e(r,[["render",a]]);export{h as __pageData,g as default};