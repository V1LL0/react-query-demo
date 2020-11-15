import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Sidebar from 'components/Sidebar';
import NotesList from 'components/NotesList';
import { COLORS } from 'consts';
import { NotesStore } from 'hooks/notes';

function App() {
  return (
    <NotesStore>
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
            <NotesList />
          </Layout.Content>
        </Layout>
      </Layout>
    </NotesStore>
  );
}

export default App;
