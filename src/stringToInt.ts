export function stringToInt(value: string) {
  if (!!isNaN(parseInt(value)) || !isFinite(parseInt(value)))
    return
  return parseInt(value)
}
