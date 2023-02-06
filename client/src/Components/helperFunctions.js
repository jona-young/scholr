export const handleFieldUpdate = (e, updateState) => {
    const changeKey = e.target.getAttribute('data-key');
    const changeLineItemKey = e.target.getAttribute('data-lineinstance')
    const changeValue = e.target.value;

    if (changeLineItemKey)
    {
        updateState(changeKey, changeValue, changeLineItemKey);
    }
    else
    {
        updateState(changeKey, changeValue);
    }
}