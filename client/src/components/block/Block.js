import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './Block.css';
import { getPowerbanks, getUserPowerbank, returnMyPowerbank, changePowerbankInStock } from '../../redux/actions/block.actions';
import { Powerbank } from "./Powerbank";
import { socket } from "../../constants/socket";

export const Block = () => {
  const dispatch = useDispatch();
  const powerbanks = useSelector(state => state.blockReducer.powerbanks);
  const blocks = useSelector(state => state.blockReducer.blocks);
  const myPowerBank = useSelector(state => state.blockReducer.myPowerBank);
  const doReturn = useSelector(state => state.blockReducer.return);

  const [powerblanksArray, setPowerblanksArray] = useState([]);
  const [blocksArray, setBlocksArray] = useState([]);

  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < powerbanks.length; j++) {
      if (blocks[i].id === powerbanks[j].block_id) {
        blocks[i].powerbank = powerbanks[j];
      }
    }
  }

  for (let i = 0; i < blocksArray.length; i++) {
    for (let j = 0; j < powerblanksArray.length; j++) {
      if (blocksArray[i].id === powerblanksArray[j].block_id) {
        blocksArray[i].powerbank = powerblanksArray[j];
      }
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

    blocks.map(block => {
      if (block.id === blockId) {
        block.powerbank = powerbank;
      }
      return block;
    })
  };

  useEffect(() => {
    socket.on('update_powerbank_position', (data) => {
      setPowerblanksArray(data.powerbanks);
      setBlocksArray(data.blocks);
    });
  }, []);

  return (
    <div id={'blocksContainer'}>
      {!!blocksArray.length ? blocksArray.map(block => (
        <div className={doReturn && !block.powerbank?.in_stock ? 'block select' : 'block'} key={block.id}>
          <span onClick={() => onSelectEmptyBlock(block.id)} className={'blockName'}>{block.id} Block</span>
          <Powerbank powerbank={block.powerbank} key={!!block.powerbank && block.powerbank.id} />
        </div>
      ))
      : blocks.map(block => (
        <div className={doReturn && !block.powerbank?.in_stock ? 'block select' : 'block'} key={block.id}>
          <span onClick={() => onSelectEmptyBlock(block.id)} className={'blockName'}>{block.id} Block</span>
          <Powerbank powerbank={block.powerbank} key={!!block.powerbank && block.powerbank.id} />
        </div>
      ))
      }
    </div>
  );
};