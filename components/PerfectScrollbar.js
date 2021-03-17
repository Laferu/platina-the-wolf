import { Component, createElement } from 'react'
import { default as Scrollbar } from 'react-perfect-scrollbar'

const PerfectScrollbar = props => {
  if (navigator) {
    // const teste = navigator
    // console.log(Object.keys(teste))
    if (
      navigator?.userAgent?.match(/Android/i)
      || navigator?.userAgent?.match(/webOS/i)
      || navigator?.userAgent?.match(/iPhone/i)
      || navigator?.userAgent?.match(/iPad/i)
      || navigator?.userAgent?.match(/iPod/i)
      || navigator?.userAgent?.match(/BlackBerry/i)
      || navigator?.userAgent?.match(/Windows Phone/i)
    ) {
      class Comp extends Component {
        render() {
          return createElement(props.component, {...props}, props.children)
        }
      }

      return (
        <Comp />
      )
    } else {
      return (
        <Scrollbar component={props.component} {...props}>
          {props.children}
        </Scrollbar>
      )
    }
  } else {
    return (
      <Scrollbar component={props.component} {...props}>
        {props.children}
      </Scrollbar>
    )
  }

}

export default PerfectScrollbar
