import Topic from './components/Topics/index';
import Title from './components/Title/index';
import ArticleList from './components/ArticleList/index';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <Layout>
      <Header>
        <Title></Title>
      </Header>
      <Layout>
        <Content>
          <ArticleList />
        </Content>
        <Sider>
          <Topic />
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
