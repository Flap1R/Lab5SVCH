import React from 'react';
 import { render, screen } from '@testing-library/react';
 import { MemoryRouter } from 'react-router-dom';
 import { ServicesPage } from './../pages/ServicesPage/ServicesPage';
 import * as allApi from '../api/allApi';

 jest.mock('../api/allApi', () => ({
   getAll: jest.fn(),
   create: jest.fn(),
 }));

 describe('ServicesPage', () => {
   it('renders ServicesPage component', async () => {
     allApi.getAll.mockResolvedValueOnce([
       { _id: '1', title: 'Services 1' },
       { _id: '2', title: 'Services 2' },
     ]);

     render(
       <MemoryRouter>
         <ServicesPage />
       </MemoryRouter>
     );

     const servicesBlocks = await screen.findAllByText(/Services/);

     expect(servicesBlocks).toHaveLength(2);
   });

   it('renders ServicesPage component', async () => {
     allApi.getAll.mockResolvedValueOnce([
       { _id: '1', title: 'Services 1' },
       { _id: '2', title: 'Services 2' },
       { _id: '3', title: 'Services 3' },
     ]);

     render(
       <MemoryRouter>
         <ServicesPage />
       </MemoryRouter>
     );

     const servicesBlocks = await screen.findAllByText(/Services/);

     expect(servicesBlocks).toHaveLength(3);
   });

   it('renders ServicesPage component', async () => {
     allApi.getAll.mockResolvedValueOnce([
       { _id: '1', title: 'Services 1' },
       { _id: '2', title: 'Services 2' },
       { _id: '3', title: 'Services 3' },
       { _id: '4', title: 'Services 4' },
       { _id: '5', title: 'Services 5' },
     ]);

     render(
       <MemoryRouter>
         <ServicesPage />
       </MemoryRouter>
     );

     const servicesBlocks = await screen.findAllByText(/Services/);

     expect(servicesBlocks).toHaveLength(5);
   });
 });