import { Card } from 'antd';

const Note = ({ children, ...props }) => (
  <Card
    style={{
      flex: 4,
      maxWidth: 250,
      maxHeight: 250,
      margin: '2rem',
    }}
    {...props}
  >
    {children}
  </Card>
);

export default Note;
