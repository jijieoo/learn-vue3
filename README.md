# vue-app-dev-template

Vue3 SPA 开发模板

## 开发规范

### 代码约束

- [eslint-plugin-vue/strongly-recommended](https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability)
- [Prettier](https://prettier.io/)
  
### CSS检测

- [StyleLint](https://stylelint.io/)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-selector-bem-pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern) class 命名规范采用[BEM](http://getbem.com/naming/)规则
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)

### Commit提交规范

- [CommitLint](https://commitlint.js.org)
- [@commitlint/cli](https://github.com/conventional-changelog/commitlint)
- [@commitlint/config-angular](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-angular) commit 规范采用[Angular团队commit提交规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)

### [Restful](http://www.ruanyifeng.com/blog/2011/09/restful.html)接口规范(具体需要和后端对接规范)

## 集成类库

### [Axios](https://github.com/axios/axios)

使用axios库管理http请求，并用拦截器对`request`和`response`进行统一处理。
http请求返回数据根据需求改写 axios 。
