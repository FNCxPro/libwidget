const moment = require('moment')

const getTime = (format = 'h:mm A') => {
  return moment().format(format)
}
const getDate = (format = 'dddd, MMMM Do') => {
  return getTime(format)
}

module.exports = {
  moment,

  getTime,
  getDate
}