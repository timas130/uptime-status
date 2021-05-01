import React, { useMemo } from 'react';
import { formatDuration, fixed } from '../utils/helper';

const UptimeBlock = (props) => {

  const { data } = props;
  const { status, text } = useMemo(() => {
    let status = '';
    let text = data.date.format('DD-MM-YYYY');
    if (data.uptime >= 100) {
      status = 'ok';
      text += ` uptime: ${fixed(data.uptime)}%`;
    }
    else if (data.uptime <= 0 && data.down.times === 0) {
      status = 'none';
      text += ' no data';
    }
    else {
      status = 'down';
      text += ` outages: ${data.down.times}，down since ${formatDuration(data.down.duration)}，uptime: ${fixed(data.uptime)}%`;
    }
    return { status, text };
  }, [data]);

  return (
    <i className={status} data-tip={text}></i>
  );
}

export default UptimeBlock;
