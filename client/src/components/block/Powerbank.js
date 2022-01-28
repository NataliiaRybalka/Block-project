import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Block.css';
import { saveToMyPowerbank, changePowerbankInStock } from '../../redux/actions/block.actions';
import { socket } from '../../constants/socket';

export const Powerbank = ({ powerbank }) => {
  const [powerbankSocket, setPowerbankSocket] = useState(null);

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
    } else {
      throw new Error('You can not take more');
    }
  };

  useEffect(() => {
    socket.on('update_powerbank_position', (powerbankSocket) => {
      console.log(powerbankSocket);
      setPowerbankSocket(powerbankSocket);
    });
  }, [powerbankSocket]);

  return (
    <button onClick={() => takePowerbank(powerbank)} className={'powerbankBtn'}>
      {powerbank?.in_stock ? `in stock ${powerbank.id}` : 'empty'}
    </button>
  );
};
