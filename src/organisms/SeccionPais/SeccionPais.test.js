/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SeccionPais from './index';

describe(' Pruebas para el compoenete <SeccionPais /> ', () => {
  test('Prueba en el SeccionPais para encontrar el Texto. ', async () => {
    const wrapper = await render(<SeccionPais />);
    const Text1 = await wrapper.getByText('Construido para equipos globales.');
    expect(await Text1).toBeInTheDocument();
    const Text2 = await wrapper.getByText(
      'Ayuda a las personas a comunicarse fácilmente en diferentes idiomas.'
    );
    expect(await Text2).toBeInTheDocument();
  });
});
