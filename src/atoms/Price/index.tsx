// import { numberNotation } from '@/services/helpers/numberNotation';
// import { getCurrency } from '@/services/storage/currency';

type props = {
  value: string | number;
  currency?: string;
};

const Price = ({ value, currency }: props) => {
  return (
    <>
      {/* {numberNotation({
        value,
        currency: currency || getCurrency(),
      })} */}
    </>
  );
};

export default Price;
