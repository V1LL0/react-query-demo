import PropTypes from 'prop-types';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Sidebar from 'components/Sidebar';
import { COLORS } from 'consts';

function App({ page }) {
  return (
    <Layout className="app-container" style={{ height: '100vh' }}>
      <Sidebar />
      <Layout style={{ backgroundColor: COLORS.white }}>
        <Layout.Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '3rem',
          }}
        >
          {page && page.component}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

App.propTypes = {
  page: PropTypes.object,
};

export default App;
