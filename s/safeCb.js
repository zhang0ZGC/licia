/* function
 * safeCb: Create callback based on input value.
 */

_('isFn isObj optimizeCb matcher');

exports = function (val, ctx, argCount)
{
    if (val == null) return function (val) { return val };

    if (isFn(val)) return optimizeCb(val, ctx, argCount);

    if (isObj(val)) return matcher(val);

    return function (key)
    {
        return function (obj)
        {
            return obj == null ? undefined : obj[key];
        }
    };
};