import React from 'react';
import preloader from '../../../assets/images/preLoader.gif';

type PropType = {};

const Preloader: React.FC<PropType> = () => {
  return (
    <div>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
