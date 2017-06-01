import React from 'react';
import axios from 'axios';
import { Row, Col, Card, Table, Form, Icon, Input, Button, Alert, message } from 'antd';

import styles from './style.css';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lists: [],
      loading: false,
      columns: [{
        title: '发布时间',
        key: 'posttime',
        dataIndex:'posttime'
      },{
        title: '作者',
        key: 'author',
        dataIndex:'author'
      },{
        title: '封面',
        key: 'picurl',
        dataIndex:'picurl',
        render: (v, r) => {
          return (
            <img src={v} width='128' height='80' />
          );
        }
      },{
        title: '阅读',
        key: 'readnum_newest',
        dataIndex:'readnum_newest'
      },{
        title: '点赞',
        key: 'likenum_newest',
        dataIndex:'likenum_newest'
      },{
        title: '标题',
        key: 'title',
        dataIndex:'title',
        render: (v, r) => {
          return (<a href={r.url} target='_blank'>{v}</a>)
        }
      },{
        title: '名称',
        key: 'name',
        dataIndex:'name'
      }]
    }
    this.getLast = this.getLast.bind(this);
  }

  // componentWillMount() {
    
  // }
  getLast() {
    var val = document.getElementById("wxName").value;
    if(val == '') {
      message.warning('微信号不可为空');
      return 0;
    }
    this.setState({
      loading: true
    })
    axios({method: 'POST', url: '/api/wx', data:{wxname: val}}).then(data => {
      let lists = this.state.lists;
      if(parseInt(data.data.error) == 0 && parseInt(data.status) == 200) {
        lists = data.data.data;
        message.success(`获取数据成功，共获取 ${lists.length} 条数据`);
      }else {
        message.error(`获取数据失败,error=${data.data.error} status=${data.status}`);
      }
      this.setState({
        lists,
        loading: false
      })
    });
  }

  render () {
    return (
      <Row type='flex' justify='center' align='middle'>

        <Col span={12}>
          <Card style={{ height: 'auto', marginTop: '40px' }}>
            <Form.Item>
              <Input id="wxName" type="textarea" placeholder="输入微信公众号查询该公众号最新的10篇文章, 例如输入 itdalao " autosize={{ minRows: 2, maxRows: 6 }}/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" icon={this.state.loading ? 'loading' : 'sync'} className="btn-width" onClick={this.getLast}>获取最新</Button>
            </Form.Item>
          </Card>
        </Col>

        <Col span={20} style={{display: this.state.lists.length > 0 ? 'block' : 'none'}}>
          <Table style={{ height: 'auto', margin: '40px 0 40px 0', background: '#fff' }} bordered={true} columns={this.state.columns} dataSource={this.state.lists} pagination={false} />
        </Col>
        
      </Row>
    );
  }
  
};

export default About