import { useSelector } from "react-redux";
import Bagitem from "../components/Bagitem";
import Bagsummmary from "../components/Bagsummary";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Bag = () => {
  const bagitems = useSelector((store) => store.bag);
  const itemss = useSelector((store) => store.items);
  const finalitems = itemss.filter((item) => {
    const foundelement = bagitems.indexOf(item.id);
    return foundelement >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        {finalitems.map((item) => (
          <Bagitem item={item}></Bagitem>
        ))}

        <Bagsummmary></Bagsummmary>
      </div>
    </main>
  );
};
export default Bag;
