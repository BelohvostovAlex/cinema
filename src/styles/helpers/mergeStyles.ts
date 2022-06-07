export const mergeStyles = (...styles: {}[] ) => { //как в аргументах ...rest типизировать более граммотно?
  return styles.reduce((acc,curr) => ({...acc, ...curr}),{})
}