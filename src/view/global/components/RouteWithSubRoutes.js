import React, { Component } from 'react';
import { Route } from 'react-router';

export default function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => {
        return <route.component {...props} routes={route.routes} loadData={route.loadData} />
      }}
    />
  );
}
