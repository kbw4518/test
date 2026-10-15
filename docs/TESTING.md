# 测试任务说明

## 初始版本

- `createTodo(title)` 已实现，初始测试应全部通过。
- `completeTodo`、`filterTodos` 尚未实现，供后续开发任务使用。
- 没有 `FAIL_CI` 文件，初始 Actions 应成功。

## 建议在 Multica 创建的任务

| 任务 | 开发目标 | 验收重点 |
|---|---|---|
| 关联冒烟 | 修改 README 的一行 | PR 关联、合并与 Done |
| 完成待办 | 增加 `completeTodo(todo)`，返回 completed=true 的新对象 | Agent 开发、测试、commit、push、PR |
| 筛选待办 | 增加 `filterTodos(todos, completed)` | 第二个任务的独立分支与并行工作 |
| 批量创建 | 增加 `createTodos(titles)` | 多 PR/issue 的关联测试材料 |
| 整理文档 | 补充函数示例 | 仅提及编号，不声明自动完成 |
| CI 展示 | 在测试分支添加/删除 FAIL_CI | CI 失败、修复、head SHA 更新 |

记录每个任务实际显示的编号，再填进分支或 PR；不要直接把此表行号当成编号。

## 发给 Agent 的首个开发任务

把仓库 URL 和 issue 编号替换后使用：

```text
仓库：<你的测试仓库 HTTPS URL>
本 issue 编号：<实际编号>
从远端默认分支创建独立开发分支。
在 src/todo.js 中增加 completeTodo(todo)，返回 completed=true 的新对象，不能修改原对象。
为新行为补充测试，运行 node --test。
提交并 push，创建指向仓库默认分支的 PR。
PR 正文单独一行写 Closes <实际编号>。
不要合并，返回分支名、commit SHA、PR URL 和真实测试结果。
```

## 可控 CI 失败

在新的测试分支根目录新增一个名为 `FAIL_CI` 的文件，内容可以是：

```text
Intentional CI failure for the integration test.
```

创建 PR 后，工作流的 Controlled failure 步骤应失败。删除该文件并提交到同一分支，下一轮应成功。它不是故障修复文件，也不要把它留在初始主分支。

检查 Multica CI 展示还需要 App 的 Checks Read-only 权限、Check suite 事件，以及已建立的 issue/PR 关联。手动在主分支运行 Actions，不保证该 suite 包含某个 PR。

## skill 导入

将 owner/repo 替换为自己的仓库：

```sh
multica skill import --url github.com/owner/repo/tree/main/skills/lab-review --output json
```

如果默认分支为 master，则把 URL 中的 main 替换为 master。导入后检查主文件、references/checklist.md 和来源信息，再单独绑定到 Agent。

修改 GitHub 中的 `LAB-REVIEW-V1` 为 V2，可用于测试再次导入与同名冲突策略；GitHub 中的修改不会自行持续同步到 Multica。

## PR 识别测试提醒

- “只通过标题”测试时，正文和分支名不要包含编号。
- 只有普通编号提及会关联，不代表合并后自动 Done。
- 自动完成请在标题或正文写 `Closes GHL-12` 等真实编号。
- 一个 PR 完成两个 issue，推荐逐行写 `Closes GHL-12`、`Closes GHL-13`。
- 每组用例使用新的 issue/PR，避免历史链接干扰。
