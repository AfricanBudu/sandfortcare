import PropTypes from 'prop-types';

const PlanCard = ({ type, category, prices, paymentOption, deliverables, }) => {

    const getPrice = () => {
        switch (paymentOption) {
          case 'halfYearly': 
            return prices.halfYearly;
          case 'annual': 
            return prices.yearly;
          default:
            return prices.monthly; 
        }
      };
    
    const getPriceLabel = () => {
        switch (paymentOption) {
            case 'halfYearly':
                return '6months';
            case 'annual': 
                return 'year';
            default: 
                return 'month';    
        }
    };    

  return (
    <div className="plan-card">
        <div className="">
            <div className="title text-center">
            <h4 className="plan-type">{`${type} Plan`}</h4>
            <p className="category">{`**For ${category}**`}</p>
            </div>
            <div className="pl-[32px] pr-[10px]">
            <div className="mt-3 lg:mt-7">
                <span className="amount">#{getPrice()}</span>
                <span className="currency"> Naira/{getPriceLabel()}</span>
            </div>
            <div className="deliverables mt-2 lg:mt-[30px] list-outside">
                <header className="text-[#494949] text-[14px] lg:text-[20px]">Deliverables</header>
                <ol className="grid gap-2 lg:gap-y-4 mt-2 lg:mt-4">
                    {deliverables.map((deliverable) => (
                        <li 
                            key={deliverable} 
                            className="deliverables-list"
                        >
                            <div className="deliverables-list-style" />
                            {deliverable}
                        </li>
                    ))}
                </ol>
            </div>
            </div>
        </div>
        <div className="flex justify-center items-center pb-5">
            <button className="plan-card-button">Get Started</button>
        </div>
    </div>
  )
};

PlanCard.propTypes = {
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    prices: PropTypes.object.isRequired,
    paymentOption: PropTypes.string.isRequired,
    deliverables: PropTypes.array.isRequired,
}

export default PlanCard;
