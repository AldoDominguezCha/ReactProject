import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = () => {
  
  const counter = useCounter(false, 1000);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
