import PropTypes from 'prop-types';
import { Card, Skeleton, Popconfirm } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import Link from 'components/Link';

const Note = ({
  children,
  loading,
  note,
  onEditClick,
  onDeleteClick,
  ...props
}) => (
  <Card
    style={{
      width: '25%',
      height: '12rem',
      margin: '2rem',
    }}
    {...props}
    loading={loading}
    extra={
      <div style={{ fontSize: '1.1rem' }}>
        <EditFilled
          style={{ margin: '0.2rem', cursor: 'pointer' }}
          onClick={onEditClick}
        />
        <Popconfirm
          title="Are you sure you want to delete this note?"
          onConfirm={onDeleteClick}
          okText="Yes"
          cancelText="No"
        >
          <DeleteFilled style={{ margin: '0.2rem', cursor: 'pointer' }} />
        </Popconfirm>
      </div>
    }
    title={
      loading ? (
        <Skeleton active title={{ width: '80%' }} paragraph={{ rows: 0 }} />
      ) : (
        <Link title={note.title} link={`/${note.id}`} />
      )
    }
  >
    {note.text}
  </Card>
);

Note.propTypes = {
  children: PropTypes.any,
  note: PropTypes.object,
  loading: PropTypes.bool,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default Note;
