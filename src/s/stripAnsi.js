/* Strip ansi codes from a string.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |str   |String to strip|
 * |return|Result string  |
 */

/* example
 * stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function stripAnsi(str: string): string;
 */

/* eslint-disable no-control-regex */
const regAnsi = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;

exports = function(str) {
    return str.replace(regAnsi, '');
};
