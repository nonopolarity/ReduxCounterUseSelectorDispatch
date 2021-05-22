import { useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';

export default function SoftdrinkCount() {
  const count = useSelector((state) => state.countFries);
  const dispatch = useDispatch();
  const inc = () => dispatch({ type: 'INC_FRIES' });
  const dec = () => dispatch({ type: 'DEC_FRIES' });

  return <Counter count={count} inc={inc} dec={dec} />;
}
