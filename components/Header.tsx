import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Layout } from 'antd';
import { HeatMapOutlined } from '@ant-design/icons';

const menuItems = [
  {
    url: '/places/new',
    title: 'Add place',
  },
  {
    url: '/about',
    title: 'About',
  },
  {
    url: '/contact',
    title: 'Contact Us',
  },
];

const Header = () => {
  const { route } = useRouter();

  return (
    <Layout.Header>
      <Link href="/">
        <a className="logo">
          <HeatMapOutlined className="icon" />
          Real Places
        </a>
      </Link>
      <Menu theme="dark" mode="horizontal" selectedKeys={[route]}>
        {menuItems.map((item) => (
          <Menu.Item key={item.url}>
            <Link href={item.url}>
              <a>{item.title}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
  );
};

export default Header;
