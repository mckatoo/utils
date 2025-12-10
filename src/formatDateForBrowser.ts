export const formatDateForBrowser = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString().padStart(4, '0')
    const formatedDate = `${year}-${month}-${day}`
    return formatedDate
  }
