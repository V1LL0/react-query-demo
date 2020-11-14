import './App.css';
import 'antd/dist/antd.css';

import { Layout, Card, Spin } from 'antd';
import Sidebar from 'components/Sidebar';
import useNotes from 'hooks/notes';

function App() {
  const { data: notes = [], isLoading } = useNotes();

  return (
    <Layout className="app-container" style={{ height: '100vh' }}>
      <Sidebar />
      <Layout style={{ backgroundColor: 'white' }}>
        <Layout.Content
          style={{ display: 'flex', flexWrap: 'wrap', overflowY: 'hidden' }}
        >
          {isLoading ? (
            <div
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Spin />
            </div>
          ) : (
            notes.map((n) => (
              <Card
                key={n.id}
                title={n.title}
                style={{
                  flex: 4,
                  maxWidth: 250,
                  maxHeight: 250,
                  margin: '2rem',
                }}
              >
                {n.text}
              </Card>
            ))
          )}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
