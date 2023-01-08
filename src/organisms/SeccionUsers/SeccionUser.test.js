/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SeccionUser from './index';

describe(' Pruebas para el compoenete <SeccionUser /> ', () => {
  test('Prueba en el SeccionUser para encontrar el Texto. ', async () => {
    const wrapper = await render(<SeccionUser />);
    const title1 = await wrapper.getByText(
      'David Levesque, fundador de @Brite'
    );
    expect(await title1).toBeInTheDocument();
    const title2 = await wrapper.getByText(
      'Alexandra Rodríguez, freelance de marketing de rendimiento y crecimiento'
    );
    expect(await title2).toBeInTheDocument();
    const title3 = await wrapper.getByText('Gustavo Moreno, CTO @Kiwi');
    expect(await title3).toBeInTheDocument();
  });
});
