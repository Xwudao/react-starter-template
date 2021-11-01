import { Button } from '@douyinfe/semi-ui';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import renderRoutes from '@/router/renderRoutes';
import { RouteConfigComponentProps } from '@/router/types';

type IAdmin = {} & RouteConfigComponentProps;
const Admin: FC<IAdmin> = (props) => {
  const history = useHistory();
  console.log('admin rendered...');
  return (
    <div className="wrapper h-screen w-screen text-center p-10">
      <div className="front w-96 mx-auto p-5 rounded border border-gray-300">
        <div className="font-bold text-lg text-gray-700">Admin Page</div>
      </div>

      <div className="router mt-4 flex flex-col space-y-4 w-96 mx-auto p-5 rounded border border-gray-300">
        <Button theme={`solid`} onClick={() => history.push('/')}>
          To Admin Page
        </Button>
        <Button theme={`solid`} onClick={() => history.push('/admin/sub_page')}>
          To Sub Page
        </Button>
      </div>

      {/*  render sub pages*/}
      {props.route?.routes && renderRoutes(props.route.routes, props.route?.auth)}
    </div>
  );
};

export default Admin;
