/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ButtonCustom from './index';

describe(' Pruebas para el compoenete <ButtonCustom /> ', () => {
  test('Prueba en el ButttonCustom para encontrar el Texto. ', async () => {
    const wrapper = await render(
      <ButtonCustom>hola soy un button</ButtonCustom>
    );
    const TEXT = await wrapper.getByText('hola soy un button');
    expect(await TEXT).toBeInTheDocument();
  });
});
