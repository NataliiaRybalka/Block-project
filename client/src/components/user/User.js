import { useSelector } from "react-redux";

export const User = () => {
  const myPowerBank = useSelector(state => state.blockReducer.myPowerBank);

  return (
    <div>
      <span>My Powerbank</span>
      {myPowerBank && <button className="powerbankBtn">{myPowerBank}</button>}
    </div>
  );
};