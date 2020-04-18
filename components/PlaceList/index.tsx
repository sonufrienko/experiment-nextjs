import Link from 'next/link'
import { List, Avatar, Button, Skeleton, Tag } from 'antd';

interface PlaceListProps {
  list: any[];
  onLoadMore: () => void;
  loading: boolean;
  hasMore: boolean;
}

interface PlaceListItemProps {
  item: {
    placeId: number;
    name: string;
  };
}

const PlaceListItem = ({ item }: PlaceListItemProps) => (
  <List.Item>
    <Link href="/places/[placeId]" as={`/places/${item.placeId}`}>
    <a>
      <List.Item.Meta
        avatar={<Avatar src="/images/coffee-shop.jpg" shape="square" size={64} />}
        title={item.name}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."
      />
    </a>
    </Link>
    <Tag color="blue">open</Tag>
  </List.Item>
);

const PlaceList = ({ list, onLoadMore, loading, hasMore }: PlaceListProps) => {
  const loadMore =
    !loading && hasMore ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>Load more</Button>
      </div>
    ) : null;

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      style={{ padding: "0 24px" }}
      loading={loading}
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => <PlaceListItem item={item} />}
    />
  );
};

export default PlaceList;
