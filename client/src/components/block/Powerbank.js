import { useDispatch, useSelector } from 'react-redux';

import './Block.css';
import { saveToMyPowerbank, changePowerbankInStock } from '../../redux/actions/block.actions';

export const Powerbank = ({ powerbank }) => {
  const dispatch = useDispatch();
  const myPowerBank = useSelector(state => state.blockReducer.myPowerBank);
  const blocks = useSelector(state => state.blockReducer.blocks);

  const takePowerbank = (powerbank) => {
    if (!myPowerBank) {
      dispatch(saveToMyPowerbank(powerbank.id));
      powerbank.in_stock = false;
      powerbank.block_id = null;
      dispatch(changePowerbankInStock(powerbank));

      blocks.map(block => {
        if (block.powerbank.id === powerbank.id) {
          delete block.powerbank;
        }
        return block;
      })
      console.log('take', blocks);
    } else {
      throw new Error('You can not take more');
    }
  };

  return (
    <button onClick={() => takePowerbank(powerbank)} className={'powerbankBtn'}>
      {powerbank?.in_stock ? `in stock ${powerbank.id}` : 'empty'}
    </button>
  );
};
