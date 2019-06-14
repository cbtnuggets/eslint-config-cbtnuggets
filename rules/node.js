// The first parameter in each rule specifies whether that rule is off, on as a warning, or on as an error
// 0 - turn the rule off
// 1 - turn the rule on as a warning (doesn't affect exit code)
// 2 - turn the rule on as an error (exit code is 1 when triggered)
// Additional parameters are rule-specific
// If you add a rule, add a short description of it as well.
// For more info just google "eslint" and the name of the rule
//    or view the ESLint rules documentation: http://eslint.org/docs/rules/
module.exports = {
    env: {
        node: true
    },
    rules: {
        //
        // Disabled rules
        //
        // Disallow unused variables
        'no-unused-vars': 0,

        //
        // Errors
        //
        // Disallow use of variables before they are defined, except for functions
        'no-use-before-define': [2, 'nofunc'],
        // Disallow spacing inside array brackets
        'array-bracket-spacing': [2, 'never'],
        // Disallow variable usage outside the scope they were defined in. Emulates c-style scoping
        'block-scoped-var': 2,
        // Enforce One true brace style. Also allow all braces on a single line.
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        // Allow a return before a callback is called
        'callback-return': 0,
        // Disallow underscores in variables. Property names are not checked. All uppercase variables are not checked.
        camelcase: [2, { properties: 'never' }],
        // Enforce spacing around commas. No space before commas, require space after commas.
        'comma-spacing': [2, { before: false, after: true }],
        // Enforce that a comma appears after a variable, array element, or property definition on the same line and not the next line
        'comma-style': [2, 'last'],
        // Disallow spaces inside computed properties, obj[foo] instead of obj[ foo ]
        'computed-property-spacing': [2, 'never'],
        // Enforce curly braces with if, while, and for loops
        curly: 2,
        // Enforce a dot on the same line as a property, not the line with the object on it
        'dot-location': [2, 'property'],
        // Enforce that the file ends with a single newline, no trailing newlines
        'eol-last': 2,
        // Enforce the use of === and !== except for comparing literal values, typeof, and comparing to null
        eqeqeq: [2, 'smart'],
        // Enforce 4 space indention, including switch cases
        indent: [2, 4, { SwitchCase: 1 }],
        // Enforce no space before a colon, require exactly one space after a colon in an object property definition
        'key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'strict' }],
        // Disallow array construction with 'new'
        'no-array-constructor': 2,
        // Warning if a console is left in code
        'no-console': 1,
        // Disallow extending native objects
        'no-extend-native': 2,
        // Disallow spacing and tabs for indention
        'no-mixed-spaces-and-tabs': 2,
        // Disallow more than two consecutive empty lines in a source file
        'no-multiple-empty-lines': [2, { max: 2 }],
        // Disallow object construction with new
        'no-new-object': 2,
        // Disallow spaces between the function name and the open parenthesis
        'no-spaced-func': 2,
        // Disallow spaces at the end of lines
        'no-trailing-spaces': 2,
        // Disallow spaces before or after curly braces inside object literals
        'object-curly-spacing': [2, 'never'],
        // Disallow empty lines at the start or end of blocks
        'padded-blocks': [2, 'never'],
        // Enforce the use of single quotes for strings, unless the string contains single quotes
        quotes: [2, 'single', 'avoid-escape'],
        // Enforce semi-colons at the end of all statements
        semi: [2, 'always'],
        // This rule enforces consistent spacing around keywords and keyword-like tokens if, else, for, while, do, switch, try, catch, finally, and with.
        'keyword-spacing': [2, { before: true, after: true }],
        // Enforce a space before the opening brace of a block
        'space-before-blocks': [2, 'always'],
        // Enforce a space before anonymous functions opening paren, disallow a space before a named function opening paren
        'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
        // Disallowing spaces to the right of ( and to the left of )
        'space-in-parens': [2, 'never'],
        // Require space on either side of an operator
        'space-infix-ops': 2,
        // Enforce spaces after unary word operators such as: new, delete, typeof, void, yield
        // Disallow spaces before or after no-word unary ops like  -, +, --, ++, !, !!
        'space-unary-ops': [2, { words: true, nonwords: false }],
        // Enforce whitespace after a comment character except when starting with -,+ or a marker at the beginning of a comment
        'spaced-comment': [2, 'always', { exceptions: ['-', '+'], markers: ['=', '!'] }],
        // Enforce strict at the global level. It cannot be used inside functions
        strict: [2, 'global'],

        //
        // Warnings
        //
        // Warn if new keywords are not followed by an uppercase, or uppercase functions are not preceded by a new. Do not check properties
        'new-cap': [1, { newIsCap: true, capIsNew: false, properties: false }],
        // Warn if blocks are nested more than 3 levels deep
        'max-depth': [1, 3],
        // Warn if there are more than 30 statements in a function
        'max-statements': [1, 30],
        // Warn if lines are longer than 160 characters
        'max-len': [1, 160]
    },
    extends: [
      'eslint:recommended'
    ]
};
