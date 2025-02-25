(() => {
    const onReady = function(fn) {
      document.addEventListener("DOMContentLoaded", fn)
      document.addEventListener("DOMContentSwitch", fn)
    }

    onReady(() => {
      if (typeof sorttable !== 'undefined') {
        const tables = document.querySelectorAll('article table')

        for (let i = 0; i < tables.length; i++) {
          sorttable.makeSortable(tables[i])
        }
      }
    })
  })()
