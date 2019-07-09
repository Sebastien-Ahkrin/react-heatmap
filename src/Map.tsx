import React, { memo, Fragment } from 'react';

import { MapNumToNum, MapNumToStr } from './types';

interface IMapProps {
  data: number[][];
  colorAccessor: MapNumToStr;
  xAccessor: MapNumToNum;
  yAccessor: MapNumToNum;
  widthAccessor: MapNumToNum;
  heightAccessor: MapNumToNum;
}

function Map(props: IMapProps) {
  const { data } = props;
  const squares = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      squares.push(
        <rect
          key={`${i}-${j}`}
          x={props.xAccessor(i)}
          y={props.yAccessor(j)}
          width={props.widthAccessor(i)}
          height={props.heightAccessor(j)}
          fill={props.colorAccessor(data[i][j])}
        />,
      );
    }
  }
  return <Fragment>{squares}</Fragment>;
}

export default memo(Map);
