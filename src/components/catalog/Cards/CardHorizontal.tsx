import { Button, Card } from 'antd';
import { FC, useState } from 'react';
import styles from '../catalog.module.css';
import ImageCatalog from '../UI/ImageCatalog';
import CardModal from './CardModal';
import DescriptionCard from '../UI/DescriptionCard';
import { FormattedMessage } from 'react-intl';
import { Item } from '../../../types/types';
import { useAppDispatch } from '../../../redux/hooks';
import { addItem } from '../../../redux/cartSlice';
type CardHorizontalProps = {
  loading: boolean;
  item: Item;
  score: number;
  alert: () => void;
};

const CardHorizontal: FC<CardHorizontalProps> = ({ loading, item, score, alert }) => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const showDescription = () => {
    setOpen(true);
  };
  const onCloseDescription = () => {
    setOpen(false);
  };
  const dispatch = useAppDispatch();
  const buyHandler = () => {
    dispatch(addItem(item));
    alert();
  };
  return (
    <Card
      loading={loading}
      className={styles.card_horizontal}
      bodyStyle={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <ImageCatalog setVisible={setVisible} visible={visible} images={item.images} />
      <div className={styles.horizontal_description}>
        <h5>
          <FormattedMessage id="catalog.card.description" />
        </h5>
        <p>{item.description}</p>
      </div>
      <div className={styles.horizontal_options}>
        <DescriptionCard
          price={item.price}
          title={item.title}
          th={item.optional?.hashrate}
          score={score}
        />
        <div className={styles.btn_groups_horizontal}>
          <Button onClick={showDescription} type="primary">
            <FormattedMessage id="catalog.card.btn_more" />
          </Button>
          <Button onClick={buyHandler}>
            <FormattedMessage id="catalog.card.btn_buy" />
          </Button>
        </div>
      </div>
      <CardModal onClose={onCloseDescription} open={open} item={item} buyHandler={buyHandler} />
    </Card>
  );
};

export default CardHorizontal;
