import Link from 'next/link';
import { Menu, Layout } from 'antd';
import { HeatMapOutlined } from '@ant-design/icons';

const Header = () => (
  <Layout.Header>
    <Link href="/">
      <a className="logo">
        <HeatMapOutlined className="icon" />
        Real Places
      </a>
    </Link>
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="about">
        <Link href="/about">
          <a>About</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default Header;
