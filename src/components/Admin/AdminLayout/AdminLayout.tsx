// @flow
import * as React from 'react';
import {Outlet} from 'react-router-dom';

type Props = {};

export function AdminLayout(props: Props) {
  return (
    <div className={'admin'}>
      <Outlet/>
    </div>
  );
};