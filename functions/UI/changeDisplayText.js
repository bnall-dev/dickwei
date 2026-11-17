export function changeDisplayText(newText) {
window.setGame(prev => (
{
...prev,
displayText: typeof newText === "function"
? newText()
: newText
}))
}