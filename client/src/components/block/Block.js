import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './Block.css';
import { getBlocks } from '../../redux/actions/block.actions';

export const Block = () => {
  const dispatch = useDispatch();
  const blocks = useSelector(state => state.blockReducer.blocks);

  useEffect(() => {
    dispatch(getBlocks());
  }, [dispatch]);

  return (
    <div id={'blocksContainer'}>
      {blocks?.map(block => <div key={block.id} className={"block"}>{block.id}</div>)}
    </div>
  );
};