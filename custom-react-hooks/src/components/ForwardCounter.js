import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {

  const counter = useCounter(true, 100);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
