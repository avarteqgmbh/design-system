export const removeKeysFromProps = (
  props: Record<string, unknown>,
  removeKeys: string[]
): Record<string, unknown> => {
  const copyProps = { ...props }
  removeKeys.forEach((key) => {
    delete copyProps[key]
  })
  return copyProps
}
