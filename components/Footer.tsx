import { Layout } from 'antd';

const Footer = () => (
  <Layout.Footer style={{ textAlign: 'center' }}>Real Places ©{new Date().getFullYear()}</Layout.Footer>
);

export default Footer;
