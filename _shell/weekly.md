# {{year}} 年 第 {{weekly}} 周

## 上周遗留任务

## 本周任务

<% for(let i = 0; i < weekList.length; i++){ %>

## {{weekList[i].date}} {{weekList[i].week}}

- ✅ {{weekList[i].week}}工作任务一
- {{weekList[i].week}}工作任务二 ❌
- ✅ {{weekList[i].week}}个人任务一
- {{weekList[i].week}}个人任务二 ❌

<% } %>

---

# 周总结【{{weekList[0].date}} 至 {{weekList[weekList.length-1].date}}】

## 本周已完成：

1. xxx

## 下周计划：

1. xxx
