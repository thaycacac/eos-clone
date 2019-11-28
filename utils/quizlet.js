export function getIdQuizlet(data) {
  const result = data.split("/")[3]
  return Number(result)
}

