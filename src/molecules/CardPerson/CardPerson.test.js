/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardTest from './index';

describe(' Pruebas para el compoenete <CardTest /> ', () => {
  test('Prueba en el CardTest para encontrar los textos ', async () => {
    const PropsCard = {
      title: 'Hola soy una card',
      description: 'soy la descripción',
      url: '/card',
      isMobile: false,
    };
    const wrapper = await render(<CardTest {...PropsCard} />);
    const Title = await wrapper.getByText('Hola soy una card');
    expect(await Title).toBeInTheDocument();
    const Description = await wrapper.getByText('soy la descripción');
    expect(await Description).toBeInTheDocument();
  });
});
