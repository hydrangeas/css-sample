const getHistoryFilter = (array, query) => {
  return (array || []).filter(function(item) {
    const startDate = new Date(item.date)
    const queryDate = new Date(query)
    return (
      startDate.getFullYear() === queryDate.getFullYear() &&
      startDate.getMonth() === queryDate.getMonth()
    )
  })
}

export default (context, inject) => {
  inject('getHistoryFilter', getHistoryFilter)
}
