const moment = require('moment')

const getTime = (format = 'h:mm A') => {
  return moment().format(format)
}
const getDate = (format = 'dddd, MMMM Do') => {
  return getTime(format)
}

const update = (element, interval = 1000, format) => {
  return setInterval(() => {
    element.innerHTML = getTime(format)
  }, interval)
}

module.exports = {
  moment,
  
  update, 

  getTime,
  getDate
}