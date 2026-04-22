import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {products.map(prod => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;