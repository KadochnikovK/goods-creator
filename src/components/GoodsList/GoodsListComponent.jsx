import GoodsItemComponent from "../GoodsItem/GoodsItemComponent";

export default function GoodsListComponent({ goods, increment, decrement, deleteGood }) {
    return (
        <div className="container list">
            {goods.map(good => <GoodsItemComponent key={good.id} good={good} increment={() => increment(good.id)} decrement={() => decrement(good.id)} deleteGood={() => deleteGood(good.id)} />)}
        </div>
    )
}