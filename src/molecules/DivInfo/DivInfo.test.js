/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DivInfo from './index';

describe(' Pruebas para el compoenete <DivInfo /> ', () => {
  test('Prueba en el DivInfo para encontrar el Texto. ', async () => {
    const wrapper = await render(<DivInfo>hola soy un Div</DivInfo>);
    const TEXT = await wrapper.getByText('hola soy un Div');
    expect(await TEXT).toBeInTheDocument();
  });
});
