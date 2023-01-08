/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SeccionCards from './index';

describe(' Pruebas para el compoenete <SeccionCards /> ', () => {
  test('Prueba en el SeccionCards para encontrar el Texto. ', async () => {
    const wrapper = await render(<SeccionCards />);
    const CardTitle1 = await wrapper.getByText(
      'Añade Viva a Chrome de forma gratuita'
    );
    expect(await CardTitle1).toBeInTheDocument();
    const CardTitle2 = await wrapper.getByText(
      'Únete a una llamada de Google Meets'
    );
    expect(await CardTitle2).toBeInTheDocument();
    const CardTitle3 = await wrapper.getByText('Experimenta la magia');
    expect(await CardTitle3).toBeInTheDocument();
  });
});
