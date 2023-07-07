import React from 'react'

const languageContext = React.createContext({
  activeLanguage: 'TE',
  changeLanguage: () => {},
})

export default languageContext
