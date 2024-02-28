import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Homeitem = ({ item }) => {
  const dispatch = useDispatch();
  const BagItems = useSelector((store) => store.bag);
  const elementfound = BagItems.indexOf(item.id) >= 0;

  const handleadd = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleremoves = () => {
    dispatch(bagActions.removeitem(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="iitem-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="orginal-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementfound ? (
        <button
          type="button"
          className=" btn btn-danger btn-add-bag"
          onClick={() => {
            handleremoves();
          }}
        >
          <MdDelete />
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={() => {
            handleadd();
          }}
        >
          <MdAdd /> Add to bag
        </button>
      )}
    </div>
  );
};
export default Homeitem;
