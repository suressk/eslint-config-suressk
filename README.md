# eslint-config-suressk

Custom Eslint config (`suressk`)

# Usage

- Install

```bash
npm i eslint-config-suressk -D
```

- Config in `.eslintrc`

```json
{
  "extends": "suressk"
}
```

- In VSCode, install `Eslint` plugin
- use Eslint to format code when file on save
- and add `.vscode/settings.json` file

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "markdown",
    "typescript",
    "yaml"
  ],
  "prettier.enable": false
}
```
