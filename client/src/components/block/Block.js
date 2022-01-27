import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './Block.css';
import { getPowerbanks, getUserPowerbank, returnMyPowerbank, changePowerbankInStock } from '../../redux/actions/block.actions';
import { Powerbank } from "./Powerbank";

export const Block = () => {
  const dispatch = useDispatch();
  const powerbanks = useSelector(state => state.blockReducer.powerbanks);
  const blocks = useSelector(state => state.blockReducer.blocks);
  const myPowerBank = useSelector(state => state.blockReducer.myPowerBank);
  const doReturn = useSelector(state => state.blockReducer.return);

  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < powerbanks.length; j++) {
      blocks[i].powerbank = powerbanks[i];
    }
  }

  useEffect(() => {
    dispatch(getPowerbanks());

    if (!!localStorage.getItem('refresh_token')) {
      dispatch(getUserPowerbank());
    }
  }, [dispatch]);

  const onSelectEmptyBlock = blockId => {
    dispatch(returnMyPowerbank(myPowerBank));

    powerbanks.map(powerbank => {
      if (powerbank.id === myPowerBank) {
        powerbank.in_stock = true;
        powerbank.block_id = blockId;
      }
      return powerbank;
    })

    const powerbank = powerbanks.find(powerbank => powerbank.id === myPowerBank);
    
    dispatch(changePowerbankInStock(powerbank));
  };

  return (
    <div id={'blocksContainer'}>
      {blocks?.map(block => (
        <div className={doReturn && !block.powerbank.in_stock ? 'block select' : 'block'} key={block.id}>
          <span onClick={() => onSelectEmptyBlock(block.id)} className={'blockName'}>{block.id} Block</span>
          <Powerbank powerbank={block.powerbank} key={block.powerbank.id} />
        </div>
      ))}
    </div>
  );
};