import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './Block.css';
import { getPowerbanks } from '../../redux/actions/block.actions';
import { Powerbank } from "./Powerbank";

export const Block = () => {
  const dispatch = useDispatch();
  const powerbanks = useSelector(state => state.blockReducer.powerbanks);

  useEffect(() => {
    dispatch(getPowerbanks());
  }, [dispatch]);

  return (
    <div id={'blocksContainer'}>
      {powerbanks?.map(powerbank => <Powerbank powerbank={powerbank} key={powerbank.id} />)}
    </div>
  );
};