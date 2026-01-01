Learnings

1. Create create-react-app (CRA)
2. Learned basic JSX, async fxn, useState, useEffect, creating components, & props.

# Install & Setup VS Code

# https://code.visualstudio.com/

Apply React support Extensions
Eslint - for debugging
Prettier - for nice code
Monokai - for theme
Material icon theme - for file structure

VS code settings - apply the ff:

- Material Icon Theme - set the file icon theme
- Settings - Search Auto Save -> Files: Auto Save -> Select onFocusChange
- Settings - Search Formatter -> Default formatter set Prettier
- Setting -> Search Format on save -> Format On Save -> Click the checkbox
- Settings -> Search ESList run -> Eslint: Run -> select onSave

Add code snippet for react

Add code snippet.
Settings -> Snippet -> Create new snippet by clicking new global -> create name for a snippet -> copy snippet below & paste to created snippet.

# Code Snippet

{
"Print to console": {
"prefix": "cl",
"scope": "javascript,typescript,javascriptreact",
"body": ["console.log($1)"],
"description": "console.log"
},
"reactComponent": {
"prefix": "rfc",
"scope": "javascript,typescript,javascriptreact",
"body": [
"function ${1:${TM_FILENAME_BASE}}() {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
],
"description": "React component"
},
"reactStyledComponent": {
"prefix": "rsc",
"scope": "javascript,typescript,javascriptreact",
"body": [
"import styled from 'styled-components'",
"",
"const Styled${TM_FILENAME_BASE} = styled.$0``",
"",
"function ${TM_FILENAME_BASE}() {",
"\treturn (",
"\t\t<Styled${TM_FILENAME_BASE}>",
"\t\t\t${TM_FILENAME_BASE}",
"\t\t</Styled${TM_FILENAME_BASE}>",
"\t)",
"}",
"",
"export default ${TM_FILENAME_BASE}",
""
],
"description": "React styled component"
}
}

command for running react app: `npm start`
