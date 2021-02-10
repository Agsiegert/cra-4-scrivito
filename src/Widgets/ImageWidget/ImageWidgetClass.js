import * as Scrivito from 'scrivito';

const ImageWidget = Scrivito.provideWidgetClass('ImageWidget', {
  attributes: {
    image: 'reference',
  },
});

export default ImageWidget;
