# {{year}} 年 第 {{weekly}} 周

## 上周遗留任务

## 本周计划和目标

<% for(let i = 0; i < weekList.length; i++){ %>

## {{weekList[i].date}} {{weekList[i].week}}

- ✅ {{weekList[i].week}}工作任务一
- {{weekList[i].week}}工作任务二 ❌

| Time     | ToDo     | Done |
| -------- | -------- | ---- |
| 7-8      | 起床事项 | None |
| 8-9      | 上班途中 | None |
| 9-10     | None     | None |
| 10-11:30 | None     | None |
| 11:30-12 | 午饭时间 | None |
| 12-14    | None     | None |
| 14-15    | None     | None |
| 15-16    | None     | None |
| 16-17    | None     | None |
| 17-18    | None     | None |
| 18-19    | 下班途中 | None |
| 19-20    | None     | None |
| 20-21    | None     | None |
| 21 以后  | None     | None |

<% } %>

---

# 周总结【{{weekList[0].date}} 至 {{weekList[weekList.length-1].date}}】

## 本周已完成：

1. xxx

## 下周计划：

1. xxx
