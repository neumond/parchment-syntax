# parchment-syntax theme

Theme is still WIP.

### Languages

- Python `apm install MagicPython`
- Lua `apm install language-lua`
- Javascript (bundled)
- Markdown `apm install language-markdown`
- HTML (bundled)
- XML (bundled)
- CSS/Less (bundled)
- Json (bundled)
- Yaml (bundled)
- .gitignore `apm install language-gitignore`
- React JSX
    `apm install language-babel`

    These packages are obtrusive and break bundled javascript highlighter,
    which is better in my opinion. To keep `.js` files untouched add to config:

    ```coffee
    "*":
        core:
            customFileTypes:
                "source.js": [
                    "js"
                ]
    ```

    For JSX code just use `.jsx` extension.


### Screenshots

![Screenshot here](https://user-images.githubusercontent.com/3260024/42405563-03472808-81a1-11e8-86fa-cf1d31949788.png)

## TODO

- Thin red must be darker than bold
- .less :not operator
