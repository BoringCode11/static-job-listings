export const createTags = (languages, tools, role, level) => {
  let tags = [role, level]

  if (languages.length > 0) { tags = [...tags, ...languages] }
  if (tools.length > 0) { tags = [...tags, ...tools] }

  return tags
}