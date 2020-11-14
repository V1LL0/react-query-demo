import './App.css';
import 'antd/dist/antd.css';

import { Button, Layout } from 'antd';
import Sidebar from 'components/Sidebar';
import Spinner from 'components/Spinner';
import Note from 'components/Note';
import useNotes from 'hooks/notes';
import { COLORS } from 'consts';

function App() {
  const { data: notes = [], isLoading } = useNotes();

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
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%',
              overflowY: 'hidden',
            }}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              notes.map((n) => (
                <Note key={n.id} title={n.title}>
                  {n.text}
                </Note>
              ))
            )}
          </div>

          <Button
            size="large"
            style={{
              color: COLORS.white,
              backgroundColor: COLORS.redReactQuery,
              maxWidth: '15vw',
            }}
          >
            Add new note
          </Button>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
