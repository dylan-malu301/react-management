import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Form, Input} from 'antd'
import {queryTaskCont} from '../../apis'
class Home extends Component {
  test = async () => {
    await queryTaskCont()
    this.props.history.push({pathname: '/General/Button'})
  }
  render() {
    return (
      <div>
        <div onClick={this.test}>测试跳转</div>
        <Form ref={c => {this.formRef = c}}>
          <Form.Item name="note" label="Note" rules={[{required: true}]}>
            <Input />
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default withRouter(Home)