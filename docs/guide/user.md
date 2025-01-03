---
outline: deep
---

# 多用户

一个简易的多用户功能，适用于多人分享同一面板的情况。

---

## 新建用户

可在 设置 - 用户 界面创建新的用户（需要当前用户为管理员）。

---

## 用户权限

### 管理员

拥有面板最高权限，可以访问一切已有的资源，并可以修改设置。

### 用户

普通用户权限，只能访问 / 修改自己所有的资源，并且不能修改设置，只能更改自己的用户信息。

---

## 连接密钥

每一个用户拥有不同的 Agent 连接密钥，用于创建服务器时标识所有者。

可以复制安装命令以查看当前用户的连接密钥。

当用户被删除时，其连接密钥会立即失效，所有关联服务器也会随之删除。
