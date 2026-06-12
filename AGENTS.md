# AGENTS.md

## 项目概览
天璇智能云 - AI服务中心，一个纯静态前端网站，展示 AI 云服务平台界面。

## 技术栈
- 原生 HTML5 + CSS3 + JavaScript（无框架）
- 字体：Google Fonts（Noto Sans SC + JetBrains Mono）
- 图标：Font Awesome 6.4.0（CDN）
- 静态文件服务器：serve

## 项目结构
```
/workspace/projects/
├── index.html          # 主页面
├── css/style.css       # 样式文件
├── js/app.js           # 交互逻辑
├── package.json        # 项目配置
├── .coze               # Coze 部署配置
└── README.md           # 项目说明
```

## 构建与运行命令
- 安装依赖：`pnpm install`
- 开发服务器：`npx serve -s -l ${DEPLOY_RUN_PORT}`
- 无构建步骤（纯静态项目）

## 代码风格
- HTML: 语义化标签，中文注释
- CSS: BEM 风格类名，CSS 自定义属性管理主题色
- JS: 原生 DOM 操作，模块化函数组织

## 设计风格
- 浅色专业B端管理后台风格
- 主色：低饱和度深蓝 #2B579A
- 背景：浅灰 #F5F7FA，卡片白色 #FFFFFF
- 圆角：4-6px 小圆角
- 扁平化设计，无发光/渐变效果
- 详细设计规范见 DESIGN.md

## 注意事项
- 这是一个纯静态项目，无后端 API
- 外部 CDN 依赖：Google Fonts（.cn 域名）、Font Awesome
- CSS 变量系统统一管理主题色，修改配色优先调整 `:root` 变量
