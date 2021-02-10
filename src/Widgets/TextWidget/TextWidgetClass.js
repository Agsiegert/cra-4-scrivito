import * as Scrivito from 'scrivito';

const TextWidget = Scrivito.provideWidgetClass('TextWidget', {
  attributes: {
    text: 'html',
  },
});

export default TextWidget;
