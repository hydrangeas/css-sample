export default ({ app }, inject) => {
  inject('getTargetMonths', () => {
    const today = new Date()
    const targetMonths = []
    for (let i = 0; i < 12; i++) {
      targetMonths.push(new Date(today.getFullYear(), today.getMonth() - i))
    }
    return targetMonths
  })
}
