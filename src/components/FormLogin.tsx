import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input,  } from 'antd';
import { useLogin } from '../hooks/useLogin';

const FormLogin = () => {
    const { loading, handleLogin, contextHolder } = useLogin();
    
    return (
      <>
        {contextHolder}
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          size='large'
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button loading={loading} disabled={loading} block type="primary" htmlType="submit">
              {loading ? 'Logging in...' : 'Log in'}
            </Button>
          </Form.Item>
        </Form>
      </>
    )
}

export default FormLogin;