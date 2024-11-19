import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday.js';
import weekOfYear from 'dayjs/plugin/weekOfYear.js';
import 'dayjs/locale/zh-cn.js';
import path from 'path';
import fs from 'fs';
import template from 'art-template';
const __dirname = path.resolve();
dayjs.extend(weekday); // 加载插件
dayjs.extend(weekOfYear); // 加载插件
dayjs.locale('zh-cn'); // 设置周一为第一天

const dayObj = dayjs(); // 设定日期为今天
const localPath = path.join(__dirname, 'diary'); // 设定目录

// 获取当前星期列表
const weekStr = ['周一', '周二', '周三', '周四', '周五', '周六', '周天'];
const weekList = [];
for (let i = 0; i < weekStr.length; i++) {
  const el = weekStr[i];
  const weekDate = dayObj.weekday(i).format('YYYY-MM-DD');
  weekList.push({
    date: weekDate,
    week: el,
  });
}

// 获取当前是该年的第几周
const weekNumForYear = dayObj.week();

// 当前的日期
const date = dayObj.format('YYYY-MM-DD');

// 当前是周几
const nowWeekNum = dayObj.day();
let nowWeekNumIdx = nowWeekNum - 1;
if (nowWeekNumIdx < 0) {
  nowWeekNumIdx = 6;
}
const nowWeekStr = weekStr[nowWeekNumIdx];

// 文件目录
const Year = dayObj.format('YYYY');
const fileName = `${Year}_${weekNumForYear}`;
const filePath = path.join(localPath, `${fileName}.md`);

// 输出结果：
const bannerStr = `
今天是 ${date} ${nowWeekStr}, 是今年的第 ${weekNumForYear} 周, 
本周的日期结构如下:
`;

console.info(bannerStr);

console.info(weekList);

console.info(`文件目录为: ${filePath}`);

const isExist = fs.existsSync(filePath);
if (isExist) {
  console.info('当前文件已存在，无需重复写入。');
  process.exit(1);
}

console.log('正在生成模板');
const tempPath = path.join(__dirname, '_shell', 'weekly.md');
const fileContent = template(tempPath, {
  year: Year,
  weekly: weekNumForYear,
  weekList: weekList,
});

console.info('正在写入文件.......');
fs.writeFileSync(filePath, fileContent);
console.info('文件写入完成');
