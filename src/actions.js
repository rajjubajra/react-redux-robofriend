export cont setSearchField = text => {
  return{
    type: 'CHANGE_SEARCH_FIELD',
    preload: text
  }
}