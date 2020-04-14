import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

const AppLayout: React.FC = ({ children }) => {
  return (
    <Layout className="layout">
      <Header />
      <Content>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
