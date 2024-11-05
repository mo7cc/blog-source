# {{year}} 年 第 {{weekly}} 周

<% for(let i = 0; i < weekList.length; i++){ %>

## {{weekList[i].date}} {{weekList[i].week}}

- **番茄任务一**
  - 任务类型: xx ; 任务描述: xx ;
  - 番茄数: V
    - 估测: 0 ; 实际: 0 ; 差值: 0
  - 备注: xxx
- **番茄任务二**
  - 任务类型: xx ; 任务描述: xx ;
  - 番茄数: V
    - 估测: 0 ; 实际: 0 ; 差值: 0
  - 备注: xxx

---

- **额外任务一**
  - 任务类型: xx ; 任务描述: xx ;
  - 番茄数: V
    - 估测: 0 ; 实际: 0 ; 差值: 0
  - 备注: xxx

<% } %>

---

# 周总结【{{weekList[0].date}} 至 {{weekList[weekList.length-1].date}}】

## 本周已完成：

1. xxx

## 下周计划：

1. xxx

## 总结

    xxxx
