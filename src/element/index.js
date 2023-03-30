import { Container, Header, Aside, Main, Footer, Menu, Button, submenu, MenuItem, MenuItemGroup, Row, Col, Table,  TableColumn, Pagination, Input, Dialog, Form, FormItem} from 'element-ui'

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
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Pagination)
        Vue.use(Input)
        Vue.use(Dialog)
        Vue.use(Form)
        Vue.use(FormItem)
    }
  } 
export default element