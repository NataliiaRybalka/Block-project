import { useDispatch, useSelector } from "react-redux";

import { returnMyPowerbank, changePowerbankInStock } from '../../redux/actions/block.actions';

export const User = () => {
  const dispatch = useDispatch();
  const myPowerBank = useSelector(state => state.blockReducer.myPowerBank);
  const powerbanks = useSelector(state => state.blockReducer.powerbanks);

  const returnPowerbank = () => {
    dispatch(returnMyPowerbank(myPowerBank));

    const powerbank = powerbanks.find(powerbank => powerbank.id === myPowerBank);
    powerbank.in_stock = true;

    dispatch(changePowerbankInStock(powerbank));
  };

  return (
    <div>
      <span>My Powerbank</span>
      {myPowerBank && <button onClick={returnPowerbank} className="powerbankBtn">{myPowerBank}</button>}
    </div>
  );
};