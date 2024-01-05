module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 打包相关
        'chore', // 构建过程或者负责构建，第三方库
        'upd', // 更新
        'docs', // 文档相关
        'feat', // 新功能
        'fix', // 修复 bug
        'perf', //性能优化
        'refactor', // 重构
        'revert', // 撤销 commit， 回到上个版本
        'style', // 格式
        'test', // 测试
        'improvement', // 改善
      ],
    ],
  },
}
