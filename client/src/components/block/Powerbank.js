import { useDispatch, useSelector } from 'react-redux';

import './Block.css';
import { saveToMyPowerbank, changePowerbankInStock, returnMyPowerbank } from '../../redux/actions/block.actions';

export const Powerbank = ({ powerbank }) => {
  const dispatch = useDispatch();
  const myPowerBank = useSelector(state => state.blockReducer.myPowerBank);
  const doReturn = useSelector(state => state.blockReducer.return);

  const takePowerbank = (powerbank) => {
    if (!myPowerBank) {
      dispatch(saveToMyPowerbank(powerbank.id));
      powerbank.in_stock = false;
      powerbank.block_id = null;
      dispatch(changePowerbankInStock(powerbank));
    } else {
      throw new Error('You can not take more');
    }
  };

  const onSelectEmptyBlock = blockId => {
    dispatch(returnMyPowerbank(myPowerBank));

    powerbank.in_stock = true;
    powerbank.block_id = blockId;

    dispatch(changePowerbankInStock(powerbank));
  };

  return (
    // <div className={doReturn && !powerbank.in_stock ? 'block select' : 'block'}>
    //   <span onClick={() => onSelectEmptyBlock(powerbank.block_id)} className={'blockName'}>{powerbank.block_id} Block</span>
      <button onClick={() => takePowerbank(powerbank)} className={'powerbankBtn'}>
        {powerbank.in_stock ? `in stock ${powerbank.id}` : 'empty'}
      </button>
    // </div>
  );
};
