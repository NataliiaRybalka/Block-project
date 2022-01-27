import { useDispatch, useSelector } from 'react-redux';

import './Block.css';
import { saveToMyPowerbank, changePowerbankInStock } from '../../redux/actions/block.actions';

export const Powerbank = ({ powerbank }) => {
  const dispatch = useDispatch();
  const myPowerBank = useSelector(state => state.blockReducer.myPowerBank);

  const takePowerbank = (powerbank) => {
    if (!myPowerBank) {
      dispatch(saveToMyPowerbank(powerbank.id));
      powerbank.in_stock = false;
      dispatch(changePowerbankInStock(powerbank));
    } else {
      throw new Error('You can not take more');
    }
  };

  return (
    <div className="block">
      {powerbank.block_id}
      <button onClick={() => takePowerbank(powerbank)} className="powerbankBtn">
        {powerbank.in_stock ? 'in stock' : 'empty'} {powerbank.id}
      </button>
    </div>
  );
};
