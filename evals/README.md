# bos-design Eval 集

用于验证 `bos-design` skill 输出稳定性的测试用例。每次修改 skill 内容后，用这些 prompt 跑一遍，检查输出是否命中关键点。

## 使用方式

1. 在 Kiro / Claude Code 中激活 `bos-design` skill
2. 逐条输入下方 prompt
3. 对照每条的「评判标准」检查输出
4. 记录通过/未通过，定位 skill 回归点

## 评判等级

- ✅ 命中：输出明确体现了该检查项
- ⚠️ 部分命中：提到了但不完整或不准确
- ❌ 未命中：完全没有体现

建议合格线：每条 eval 的 MUST 项全部 ✅，SHOULD 项 ≥ 70% 命中。
