import{_ as a,c as n,o as r,j as e,a as t}from"./chunks/framework.BmdFiWrL.js";const m=JSON.parse('{"title":"Agent 启动/上线 问题自检流程","description":"","frontmatter":{},"headers":[],"relativePath":"guide/q2.md","filePath":"guide/q2.md","lastUpdated":1733027137000}'),o={name:"guide/q2.md"},l=e("h1",{id:"agent-启动-上线-问题自检流程",tabindex:"-1"},[t("Agent 启动/上线 问题自检流程 "),e("a",{class:"header-anchor",href:"#agent-启动-上线-问题自检流程","aria-label":'Permalink to "Agent 启动/上线 问题自检流程"'},"​")],-1),s=e("ol",null,[e("li",null,[e("code",null,"nc -v 域名/IP 通讯端口"),t(" 或者 "),e("code",null,"telnet 域名/IP 通讯端口"),t(" 来检验是否是网络问题，检查本机与面板服务器的出入站防火墙，如果无法判断问题可借助 "),e("a",{href:"https://port.ping.pe/",target:"_blank",rel:"noreferrer"},"https://port.ping.pe/"),t(" 提供的端口检查工具进行检测。")]),e("li",null,[t("如果上面步骤检测正常，Agent 依然没有正常上线，请尝试关闭 SELinux，"),e("a",{href:"https://www.google.com/search?q=%E5%85%B3%E9%97%ADSELINUX",target:"_blank",rel:"noreferrer"},"如何关闭 SELinux？")])],-1),c=[l,s];function i(d,p,_,h,g,u){return r(),n("div",null,c)}const x=a(o,[["render",i]]);export{m as __pageData,x as default};
