# noImplicitAny 与 suppressImplicitAnyIndexErrors
>https://angular.cn/guide/typescript-configuration


TypeScript 开发者们在 noImplicitAny 标志应该是 true 还是 false 上存在分歧。 这没有标准答案，你以后还可以修改这个标志。 但是你的选择会在大项目中产生显著差异，所以它值得讨论一番。

当 noImplicitAny 标志是 false(默认值)时， 如果编译器无法根据变量的用途推断出变量的类型，它就会悄悄的把变量类型默认为 any。这就是隐式 any的含义。

当 noImplicitAny 标志是 true 并且 TypeScript 编译器无法推断出类型时，它仍然会生成 JavaScript 文件。 但是它也会报告一个错误。 很多饱经沧桑的程序员更喜欢这种严格的设置，因为类型检查能在编译期间捕获更多意外错误。

即使 noImplicitAny 标志被设置成了 true，你也可以把变量的类型设置为 any。

如果把 noImplicitAny 标志设置为了 true，你可能会得到隐式索引错。 大多数程序员可能觉得这种错误是个烦恼而不是助力。 你可以使用另一个标志来禁止它们。

content_copy
"suppressImplicitAnyIndexErrors": true