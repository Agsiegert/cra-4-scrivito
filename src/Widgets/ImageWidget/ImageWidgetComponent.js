import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('ImageWidget', ({ widget }) => {
  return <Scrivito.ImageTag
    content={ widget }
    attribute="image"
  />;

});
