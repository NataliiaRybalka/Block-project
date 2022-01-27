import './Block.css';

export const Powerbank = ({ powerbank }) => {

  return (
    <div className="block">
      {powerbank.block_id}
      <button className="powerbankBtn">
        {powerbank.in_stock ? 'in stock' : 'empty'}
      </button>
    </div>
  );
};
