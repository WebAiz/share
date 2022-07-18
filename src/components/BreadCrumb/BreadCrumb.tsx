// @flow
import * as React from 'react';
import {Breadcrumbs, Link, Typography} from '@mui/material';

type Props = {};

const paths = [{path: 'dashboard', name: 'DashBoard'}, {path: 'dashboard', name: 'Tool'}];

export function BeadCrumb(props: Props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      {paths.map((el, i) => (
        <Link
          key={i}
          underline="hover"
          color="black"
          href={el.path}
        >
          {el.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
}