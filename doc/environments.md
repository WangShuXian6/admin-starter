>包含特定目标环境的构建配置选项

# Vite 使用 dotenv 从你的 环境目录 中的下列文件加载额外的环境变量：

.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略

>加载的环境变量也会通过 import.meta.env 暴露给客户端源码。

>为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。例如下面这个文件中：

DB_PASSWORD=foobar
VITE_SOME_KEY=123

只有 VITE_SOME_KEY 会被暴露为 import.meta.env.VITE_SOME_KEY 提供给客户端源码，而 DB_PASSWORD 则不会。

## 智能提示
>环境变量类型 在`src/env.d.ts` 目录的 `ImportMetaEnv` 中定义

## 模式
>默认情况下，开发服务器 (dev 命令) 运行在 development (开发) 模式，
>而 build 以及 serve 命令则运行在 production (生产) 模式。
>这意味着当执行 vite build 时，它会自动加载 .env.production 中可能存在的环境变量  `VITE_APP_TITLE=My App`
>在你的应用中，你可以使用 import.meta.env.VITE_APP_TITLE 渲染标题。

### `--mode`
>可以通过传递 --mode 选项标志来覆盖命令使用的默认模式。例如，如果你想为我们假设的 staging 模式构建应用：

`vite build --mode staging`