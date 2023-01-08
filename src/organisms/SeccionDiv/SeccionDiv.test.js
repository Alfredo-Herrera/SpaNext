/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SeccionCards from './index';

describe(' Pruebas para el compoenete <SeccionDiv /> ', () => {
  test('Prueba en el SeccionCards para encontrar el Texto. ', async () => {
    const wrapper = await render(<SeccionCards />);
    const DivSeccion = await wrapper.getByText(
      'Observa cómo Viva puede trabajar para ti.'
    );
    expect(await DivSeccion).toBeInTheDocument();
  });
});
