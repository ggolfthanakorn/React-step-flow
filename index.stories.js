import React from 'react';

import { storiesOf } from '@storybook/react';

import PltStepFlow from './PltStepFlow';

storiesOf('PltStepFlow', module)
   .add('steps', () => <PltStepFlow steps="steps"  />  )
;

