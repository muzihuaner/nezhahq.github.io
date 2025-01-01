---
outline: deep
---

# 内网穿透功能配置

哪吒服务器监控提供内置的内网穿透功能，允许用户通过设定 Dashboard 作为服务端，将运行在 Agent 上的内网服务（如家庭 OpenWrt 路由器、NAS 设备等）映射到公网，便于外部访问。目前仅支持明文 HTTP 的穿透。

## 准备工作

在配置内网穿透前，请确保完成以下准备工作：

1. **安装并运行 Agent**：确保目标设备已正确安装并运行哪吒监控的 Agent，且保持与 Dashboard 的连接状态。
2. **准备公网域名**：建议使用子域名操作，例如 `service-1.example.com`，并解析至 Dashboard 服务器的公网 IP。
3. **一对一映射**：每个域名只能映射一个 Agent 的内网服务。需要映射多个服务时，请分别使用不同域名，例如 `service-2.example.com`。

::: warning  
如果使用宝塔面板或其他管理工具，请确保绑定的域名（如 `service-1.example.com`）已正确配置为指向 Dashboard 服务站点，否则可能导致无法访问。  
:::

---

## 配置步骤

1. **登录 Dashboard 管理页面**  
   在菜单栏中选择“内网穿透”选项，进入配置页面。

2. **添加穿透配置**  
   点击“添加”按钮，填写以下信息：
   - **名称**：自定义配置名称，如 `OpenWrt 登录页`。
   - **服务器 ID**：填写目标 Agent 的 ID。
   - **本地服务**：填写需穿透的内网服务地址，格式为 `IP:端口`（如 `127.0.0.1:80`）。
   - **绑定域名**：填写公网域名（如 `service-1.example.com`）。如果 Dashboard 使用非标准端口（如 `8008`），需手动添加端口。

3. **保存配置**  
   点击“新增”按钮，完成配置并等待穿透生效。

4. **验证穿透**  
   在浏览器中访问 `http://service-1.example.com`，确认是否成功映射到目标内网服务。

---

## 使用须知

1. **保持连接状态**  
   Agent 与 Dashboard 的持续连接是内网穿透功能正常运行的前提。如果连接中断，配置的穿透功能将暂时失效。

2. **安全注意事项**  
   - 内网穿透隧道仅支持明文 HTTP 数据传输，无内置加密功能。  
   - 强烈建议在以下两处启用 TLS/SSL 以确保数据传输安全：
     - **Agent 与 Dashboard 之间的通信**。
     - **Dashboard 与外部访问客户端之间的通信**。

---