import { Container, Header, Aside, Main, Footer, Menu, Button, submenu, MenuItem, MenuItemGroup, Row, Col} from 'element-ui'

const element = {
    install: function (Vue) {
        Vue.use(Container)
        Vue.use(Header)
        Vue.use(Aside)
        Vue.use(Main)
        Vue.use(Footer)
        Vue.use(Menu)
        Vue.use(Button)
        Vue.use(submenu)
        Vue.use(MenuItem)
        Vue.use(MenuItemGroup)
        Vue.use(Row)
        Vue.use(Col)
    }
  } 
export default element