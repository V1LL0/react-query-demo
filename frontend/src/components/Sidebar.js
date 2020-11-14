import { Layout } from 'antd';
import useNotes from 'hooks/notes';

const Sidebar = () => {
  const { data: notes = [] } = useNotes();

  return (
    <Layout.Sider style={{ backgroundColor: 'wheat' }}>
      <strong> {`you have ${notes.length} notes`}</strong>
    </Layout.Sider>
  );
};

export default Sidebar;
