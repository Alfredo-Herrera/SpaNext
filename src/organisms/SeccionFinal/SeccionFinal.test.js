/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SeccionFinal from './index';

describe(' Pruebas para el compoenete <SeccionFinal /> ', () => {
  test('Prueba en el SeccionFinal para encontrar el Texto. ', async () => {
    const wrapper = await render(<SeccionFinal />);
    const DivSeccion = await wrapper.getByText(
      'Viva Translate para profesionales.'
    );
    expect(await DivSeccion).toBeInTheDocument();
  });
});
