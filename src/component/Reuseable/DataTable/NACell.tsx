import React from 'react';

export interface INACellProps {
  getValue: any
}


const NACell: React.FC<INACellProps> = (props) => {
  const { getValue } = props
  return (
    <>
      {getValue() ? getValue() : "N/A"}
    </>
  );
};

export default NACell;