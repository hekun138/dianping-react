const initialState = {
  inputText: "",
  popularKeywords: {
    isFetching: false,
    ids: []
  },
  /*
   * relatedKeywords对象结构
   * {
   *   '火锅': {
   *     isFetching: false,
   *     ids: []
   *   }
   * }
   */
  relatedKeywords: {},
  //保存关键词id
  historyKeywords: []
};
