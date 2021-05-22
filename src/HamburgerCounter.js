import { useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';

export default function HamburgerCount() {
  const count = useSelector((state) => state.countHamburger);
  const dispatch = useDispatch();
  const inc = () => dispatch({ type: 'INC' });
  const dec = () => dispatch({ type: 'DEC' });

  return <Counter count={count} inc={inc} dec={dec} />;
}
