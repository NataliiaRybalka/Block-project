import { useDispatch, useSelector } from "react-redux";

import { doReturn } from '../../redux/actions/block.actions';

export const UserPowerbank = () => {

  const dispatch = useDispatch();
  const myPowerBank = useSelector(state => state.blockReducer.myPowerBank);
  
  const returnPowerbank = () => {
    dispatch(doReturn());
  };

  return (
    <div>
      <span>My Powerbank</span>
      {myPowerBank && <button onClick={returnPowerbank} className="powerbankBtn">{myPowerBank}</button>}
    </div>
  );
};