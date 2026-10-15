# Multica GitHub Integration Lab

用于测试 Multica 与 GitHub 联动的小型 Node.js 待办项目。

## 运行

需要 Node.js 22 或更新版本，无第三方依赖，可直接运行：

```sh
node demo.js
node --test
```

也可以使用 `npm start` 和 `npm test`，不需要先执行 `npm install`。

当前初始版本有 `createTodo(title)`：去掉标题两侧空白，拒绝空标题，返回未完成的待办。测试应全部通过。

## 文件用途

| 文件/目录 | 用途 |
|---|---|
| `src/todo.js` | Agent 后续开发的业务代码 |
| `test/todo.test.js` | 本地与 GitHub Actions 的真实行为测试 |
| `demo.js` | 在命令行显示几个待办示例 |
| `.github/workflows/integration-check.yml` | PR 自动测试、成功/失败与 CI 展示验收 |
| `skills/lab-review/` | GitHub skill 导入与 Agent 绑定验收 |
| `docs/TESTING.md` | 后续功能任务、PR 操作和故障注入说明 |

## 第一次联动验证

1. 先把本项目文件放到 GitHub 测试仓库的根目录，建立初始版本。
2. 确认仓库 Actions 的 `Multica Integration Check` 通过。
3. 在 Multica 创建一个 issue，记录真实编号。
4. 在 GitHub 为 README 的一行修改新建分支和 PR。
5. PR 正文单独一行写 `Closes 实际编号`，例如 `Closes GHL-12`。
6. 合并前确认该 PR 出现在 Multica 对应 issue 的 PR 区域。
7. 合并后，确认 PR 为 merged；没有其他关联 open/draft PR 时，issue 应为 Done。

示例中的编号应换成自己工作区实际存在的编号。

## 后续测试

阅读 [测试任务说明](docs/TESTING.md)。完成待办、筛选待办等功能特意留给后续 Agent 开发测试。

GitHub App 必须授权访问本仓库，并通过 Multica 连接流程绑定到目标工作区。Agent 拉取、push 和创建 PR 另需它所在运行环境的 Git/GitHub 凭据。
