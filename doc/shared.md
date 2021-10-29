
>与core相反,不应该包含服务，因为shared会在不同业务模块中导入，
>一旦包含了服务，就会产生不同的实例,有可能会对应用产生负面的影响，所以尽量保证服务的单一性

>应该包含所有组件（自己写的非业务相关的通用组件）、指令、管道以及其他模块所需要的资产（例如 Common 、 Forms、Router和第三方通用依赖模块）