import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './Block.css';
import { getPowerbanks, getUserPowerbank } from '../../redux/actions/block.actions';
import { Powerbank } from "./Powerbank";

export const Block = () => {
  const dispatch = useDispatch();
  const powerbanks = useSelector(state => state.blockReducer.powerbanks);
  const blocks = useSelector(state => state.blockReducer.blocks);

  useEffect(() => {
    dispatch(getPowerbanks());

    if (!!localStorage.getItem('refresh_token')) {
      dispatch(getUserPowerbank());
    }
  }, [dispatch]);

  return (
    <div id={'blocksContainer'}>
      {blocks?.map(block => (
        <div className={'block'} key={block.id}>
          <span className={'blockName'}>{block.id} Block</span>
          {/* <Powerbank powerbank={powerbank} key={powerbank.id} /> */}
        </div>
      ))}
    </div>
  );
};