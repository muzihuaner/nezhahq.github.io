import{_ as t,c as e,o as d,a as r}from"./app.d87a5962.js";const u='{"title":"\u81EA\u5EFA\u4F7F\u7528 API \u6765\u8FDB\u884C\u67E5\u8BE2,\u4E14\u652F\u6301\u591A\u8BED\u8A00\u7684 Telegram \u67E5\u8BE2\u673A\u5668\u4EBA","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9879\u76EE\u7279\u8272","slug":"\u9879\u76EE\u7279\u8272"},{"level":2,"title":"\u547D\u4EE4\u5217\u8868","slug":"\u547D\u4EE4\u5217\u8868"},{"level":2,"title":"\u6548\u679C\u5C55\u793A","slug":"\u6548\u679C\u5C55\u793A"}],"relativePath":"case/case3.md","lastUpdated":1663257347000}',a={},l=r('<h1 id="\u81EA\u5EFA\u4F7F\u7528-api-\u6765\u8FDB\u884C\u67E5\u8BE2-\u4E14\u652F\u6301\u591A\u8BED\u8A00\u7684-telegram-\u67E5\u8BE2\u673A\u5668\u4EBA" tabindex="-1">\u81EA\u5EFA\u4F7F\u7528 API \u6765\u8FDB\u884C\u67E5\u8BE2,\u4E14\u652F\u6301\u591A\u8BED\u8A00\u7684 Telegram \u67E5\u8BE2\u673A\u5668\u4EBA <a class="header-anchor" href="#\u81EA\u5EFA\u4F7F\u7528-api-\u6765\u8FDB\u884C\u67E5\u8BE2-\u4E14\u652F\u6301\u591A\u8BED\u8A00\u7684-telegram-\u67E5\u8BE2\u673A\u5668\u4EBA" aria-hidden="true">#</a></h1><p>\u8D21\u732E\u8005:</p><ul><li><a href="https://github.com/tech-fever" target="_blank" rel="noopener noreferrer">tech-fever</a></li></ul><p>\u9879\u76EE\u5730\u5740\uFF1A<a href="https://github.com/tech-fever/nezha_telegram_bot" target="_blank" rel="noopener noreferrer">nezha_telegram_bot</a></p><h2 id="\u9879\u76EE\u7279\u8272" tabindex="-1">\u9879\u76EE\u7279\u8272 <a class="header-anchor" href="#\u9879\u76EE\u7279\u8272" aria-hidden="true">#</a></h2><p>\u5F00\u6E90Telegram\u673A\u5668\u4EBA\u9879\u76EE\uFF0C\u53EF\u4EE5\u57FA\u4E8EAPI\u5B9E\u65F6\u67E5\u8BE2\u54EA\u5412\u9762\u677F\u7684\u670D\u52A1\u5668\u4FE1\u606F\u3002</p><ul><li>[x] \u652F\u6301\u4E2D/\u82F1\u591A\u8BED\u8A00\u5207\u6362</li><li>[x] \u652F\u6301\u5206\u7EC4\u7EDF\u8BA1(CPU\u3001\u78C1\u76D8\u3001\u5185\u5B58\u3001\u4E0A\u4E0B\u884C\u901F\u5EA6\u3001\u6D41\u91CF\u7EDF\u8BA1\u7B49)</li><li>[x] \u652F\u6301\u5B9E\u65F6\u5237\u65B0\u5355\u4E2A\u670D\u52A1\u5668\u6570\u636E</li><li>[x] \u652F\u6301\u952E\u76D8\u4E92\u52A8\u67E5\u8BE2</li><li>[x] \u652F\u6301\u547D\u4EE4\u76F4\u63A5\u67E5\u8BE2</li><li>[x] \u589E\u52A0\u7FA4\u804A\u5224\u65AD\uFF0C\u9650\u5236\u7FA4\u804A\u53EF\u53D1\u9001\u547D\u4EE4</li><li>[x] \u589E\u52A0\u7FA4\u804A\u51855\u79D2\u81EA\u52A8\u5220\u9664\u4FE1\u606F</li><li>[x] \u652F\u6301docker\u90E8\u7F72</li></ul><h2 id="\u547D\u4EE4\u5217\u8868" tabindex="-1">\u547D\u4EE4\u5217\u8868 <a class="header-anchor" href="#\u547D\u4EE4\u5217\u8868" aria-hidden="true">#</a></h2><table><thead><tr><th>\u547D\u4EE4</th><th>\u529F\u80FD</th><th>\u4EC5\u79C1\u804A</th></tr></thead><tbody><tr><td>start</td><td>\u5F00\u59CB\u4F7F\u7528\u952E\u76D8\u4E3B\u83DC\u5355</td><td>\u2714\uFE0F</td></tr><tr><td>help</td><td>\u5E2E\u52A9\u5217\u8868</td><td>\u274C</td></tr><tr><td>add</td><td>\u6DFB\u52A0\u9762\u677F\u94FE\u63A5\u548Ctoken</td><td>\u2714\uFE0F</td></tr><tr><td>url</td><td>\u6DFB\u52A0\u9762\u677F\u94FE\u63A5</td><td>\u2714\uFE0F</td></tr><tr><td>token</td><td>\u6DFB\u52A0\u9762\u677Ftoken</td><td>\u2714\uFE0F</td></tr><tr><td>info</td><td>\u83B7\u53D6\u4FDD\u5B58\u7684\u9762\u677F\u94FE\u63A5\u548Ctoken</td><td>\u2714\uFE0F</td></tr><tr><td>delete</td><td>\u5220\u9664\u4FDD\u5B58\u7684\u9762\u677F\u94FE\u63A5\u548Ctoken</td><td>\u2714\uFE0F</td></tr><tr><td>id</td><td>\u547D\u4EE4\u540E\u9762\u6DFB\u52A0\u6574\u6570id\uFF0C\u6765\u8FDB\u884C\u5355\u4E2A\u670D\u52A1\u5668\u4FE1\u606F\u67E5\u8BE2\uFF08\u79C1\u804A\u5E26\u5237\u65B0\u6309\u94AE\uFF0C\u7FA4\u804A\u4E0D\u5E26\uFF09</td><td>\u274C</td></tr><tr><td>all</td><td>\u67E5\u8BE2\u6240\u6709\u670D\u52A1\u5668\u7684\u7EDF\u8BA1\u4FE1\u606F</td><td>\u274C</td></tr><tr><td>search</td><td>\u5728\u670D\u52A1\u5668\u540D\u5B57\u4E2D\u641C\u7D22\u5173\u952E\u5B57\uFF08\u652F\u6301\u591A\u4E2A\uFF0C\u7528\u7A7A\u683C\u5206\u5F00\uFF09</td><td>\u274C</td></tr></tbody></table><h2 id="\u6548\u679C\u5C55\u793A" tabindex="-1">\u6548\u679C\u5C55\u793A <a class="header-anchor" href="#\u6548\u679C\u5C55\u793A" aria-hidden="true">#</a></h2><p><img src="https://user-images.githubusercontent.com/105153585/175813727-bef77a8e-ff46-4fd4-b41b-43902abf6159.png#pic_left" alt=""><img src="https://user-images.githubusercontent.com/105153585/175813645-4df4f4c7-2591-4133-9645-21c7db2f62ab.png#pic_right" alt=""></p>',11),i=[l];function h(n,o,s,c,_,p){return d(),e("div",null,i)}var g=t(a,[["render",h]]);export{u as __pageData,g as default};