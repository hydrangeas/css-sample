const getMonthName = (value) => {
  if (value < 0 || value > 11) {
    return 'unknown'
  }
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return monthNames[value]
}

export default (context, inject) => {
  inject('getMonthName', getMonthName)
}
