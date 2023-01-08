/* eslint-disable no-undef */

import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import FormCreateUser from './index';

describe(' Pruebas para el compoenete <FormCreateUser /> ', () => {
  test('Prueba en el FormCreateUser para encontrar el placeholder de una input ', async () => {
    const wrapper = await render(<FormCreateUser />);
    const { queryByPlaceholderText } = wrapper;
    const setSearch = jest.fn((value) => {});
    const searchInput = queryByPlaceholderText('*****@****');
    fireEvent.change(searchInput, { target: { value: 'ing@gmail.com' } });
    expect(searchInput.value).toBe('ing@gmail.com');
  });
});
