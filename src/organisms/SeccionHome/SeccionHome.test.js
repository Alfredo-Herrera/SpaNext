/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SeccionHome from './index';

describe(' Pruebas para el compoenete <SeccionHome /> ', () => {
  test('Prueba en el SeccionHome para encontrar el Texto. ', async () => {
    const wrapper = await render(<SeccionHome />);
    const title1 = await wrapper.getByText(
      'Traducción de videollamadas en tiempo real.'
    );
    expect(await title1).toBeInTheDocument();
    const title2 = await wrapper.getByText(
      'Prueba Viva en Google Meets - es gratis'
    );
    expect(await title2).toBeInTheDocument();
    const title3 = await wrapper.getByText('Comunícate con ventas');
    expect(await title3).toBeInTheDocument();
  });
});
