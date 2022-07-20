import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.Loader}>
      <TailSpin color="#00BFFF" height={140} width={140} />
    </div>
  );
};

export default Loader;
