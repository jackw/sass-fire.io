export const codeWrapper = (code, parameter, name, type) => {
  const parameterz =
    parameter !== null
      ? parameter.reduce((acc, val) => [...acc, `$${val.name}`], []).join(", ")
      : ""

  return `
  @${type} ${name}(${parameterz}) {
    ${code}
  }`.trim()
}

export const groupData = data => {
  const grouped = Object.entries(
    data.reduce(
      (acc, val) => ((acc[val.group] = [...(acc[val.group] || []), val]), acc),
      {}
    )
  )

  return grouped.reduce((acc, val) => {
    const menuItems = val[1].map(obj => ({
      href: `#${obj.context.name.toLowerCase()}`,
      name: obj.context.name,
    }))

    return [
      ...acc,
      {
        groupTitle: val[0],
        menuItems,
      },
    ]
  }, [])
}
