import { Layout } from 'antd';
import { COLORS } from 'consts';
import useNotes from 'hooks/notes';

const Sidebar = () => {
  const { data: notes = [] } = useNotes();

  return (
    <Layout.Sider
      style={{
        backgroundColor: COLORS.blueReactQuery,
        color: 'white',
        display: 'flex',
        paddingTop: '2rem',
        justifyContent: 'center',
      }}
    >
      <strong>{`you have ${notes.length} notes`}</strong>
    </Layout.Sider>
  );
};

export default Sidebar;
