# TypeScript スクリプト ボイラープレート

モダンな開発ツールを統合したTypeScriptスクリプト実行環境です。

## 特徴

- ⚡️ [tsx](https://github.com/esbuild-kit/tsx) による高速な実行環境
- 📝 TypeScript v5.7
- 🔍 ESLint による静的コード解析
- 💅 Prettier によるコード整形
- 📦 Node.js v20 サポート

## 必要要件

- Node.js v20以上

## セットアップ

```bash
# パッケージのインストール
npm install
```

## 利用可能なスクリプト

- `npm run dev` - 開発モードで実行（ファイル監視付き）
- `npm run start` - プロジェクトを実行
- `npm run build` - TypeScriptのビルド
- `npm run format` - Prettierによるコード整形
- `npm run lint` - ESLintによるコード検証
- `npm run lint:fix` - ESLintによるコード自動修正

## プロジェクト構成

```
.
├── src/          # ソースコード
├── dist/         # ビルド出力（自動生成）
├── .vscode/      # VSCode設定
├── tsconfig.json # TypeScript設定
└── package.json  # プロジェクト設定
```

## ライセンス

MIT
