import ProductCard from '../ProductCard/ProductCard';
import './ProductListCard.css';

export default function ProductListCard (props){
    const { data } = props;

    return <section className="productlist-section">
        <div className="productlist-list">
            { data.length === 0 && <h3>No items on data...</h3> }
            {
                data.length > 0 && data.map((item) => {
                    return <ProductCard key={item.id} item={item} />
                })
            }
        </div>
    </section>
}