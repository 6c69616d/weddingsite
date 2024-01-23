import { useRef, useEffect, useState } from 'react';
import Tick from '@pqina/flip';
import { Box } from '@mui/material';

import StyledTimeContainer from '../StyledTimeContainer';

const EventCountdown = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();

  const [tickValue, setTickValue] = useState(value);

  // Make the Tick instance and store it in the refs
  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit,
    });
    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  // Start the Tick.down process
  useEffect(() => {
    const counter = Tick.count.down(value, {
      format: ['M', 'd', 'h', 'm', 's'],
    });

    // When the counter updates, update React's state value
    counter.onupdate = function (value) {
      setTickValue(value);
    };

    return () => {
      counter?.timer?.stop();
    };
  }, [value]);

  // When the tickValue is updated, update the Tick.DOM element
  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = {
        months: tickValue[0],
        days: tickValue[1],
        hours: tickValue[2],
        mins: tickValue[3],
        secs: tickValue[4],
      };
    }
  }, [tickValue]);

  return (
    <div className='tick'>
      <div data-repeat='true' data-layout='horizontal fit'>
        <Box ref={divRef} style={{ display: 'flex', flexWrap: 'wrap' }}>
          <StyledTimeContainer timeUnit={'months'} />
          <StyledTimeContainer timeUnit={'days'} />
          <StyledTimeContainer timeUnit={'hours'} />
          <StyledTimeContainer timeUnit={'mins'} />
          <StyledTimeContainer timeUnit={'secs'} />
        </Box>
      </div>
    </div>
  );
};

export default EventCountdown;
