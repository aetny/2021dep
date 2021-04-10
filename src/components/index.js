import {Button, Form, Field} from 'vant';

export default {
  [Button.name]:Button,
  [Form.name]:Form,
  [Field.name]:Field
}

//第一种
// Vue.use(Button);
// Vue.use(Form);
// Vue.use(Field);
// Vue.use(TabbarItem);
//第二种
// Vue.component(Button.name, Button);