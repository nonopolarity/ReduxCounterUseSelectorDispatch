import { useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';

export default function SoftdrinkCount() {
  const count = useSelector((state) => state.countSoftdrink);
  const dispatch = useDispatch();
  const inc = () => dispatch({ type: 'INC_DRINK' });
  const dec = () => dispatch({ type: 'DEC_DRINK' });

  return <Counter count={count} inc={inc} dec={dec} />;
}
