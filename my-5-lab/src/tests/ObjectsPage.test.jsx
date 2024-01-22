import React from 'react';
 import { render, screen, waitFor } from '@testing-library/react';
 import { MemoryRouter } from 'react-router-dom';
 import { ObjectsPage } from './../pages/ObjectsPage/ObjectsPage';
 import * as allApi from '../api/allApi';

 jest.mock('../api/allApi', () => ({
   getAll: jest.fn(),
   create: jest.fn(),
 }));

 describe('ObjectsPage', () => {
   it('renders ObjectsPage component', async () => {
     const apiData = [
       { _id: '1', title: 'Services 1', objects: { title: 'Objects 1' } },
       { _id: '2', title: 'Services 2', objects: { title: 'Objects 2' } },
     ];

     allApi.getAll.mockResolvedValueOnce(apiData);

     render(
       <MemoryRouter>
         <ObjectsPage />
       </MemoryRouter>
     );

     const servicesBlocks = await screen.findAllByText(/Services/);

     expect(serviceslocks).toHaveLength(2);
   });

   it('renders ObjectsPage component', async () => {
     const apiData = [
       { _id: '1', title: 'Services 1', objects: { title: 'Objects 1' } },
       { _id: '2', title: 'Services 2', objects: { title: 'Objects 2' } },
       { _id: '3', title: 'Services 3', objects: { title: 'Objects 3' } },
     ];

     allApi.getAll.mockResolvedValueOnce(apiData);

     render(
       <MemoryRouter>
         <ObjectsPage />
       </MemoryRouter>
     );

     const servicesBlocks = await screen.findAllByText(/Services/);

     expect(servicesBlocks).toHaveLength(3);
   });

   it('renders ObjectsPage component', async () => {
     const apiData = [
       { _id: '1', title: 'Services 1', objects: { title: 'Objects 1' } },
       { _id: '2', title: 'Services 2', objects: { title: 'Objects 2' } },
       { _id: '3', title: 'Services 3', objects: { title: 'Objects 3' } },
       { _id: '4', title: 'Services 4', objects: { title: 'Objects 4' } },
       { _id: '5', title: 'Services 5', objects: { title: 'Objects 5' } },
     ];

     allApi.getAll.mockResolvedValueOnce(apiData);

     render(
       <MemoryRouter>
         <ObjectsPage />
       </MemoryRouter>
     );

     const servicesBlocks = await screen.findAllByText(/Services/);

     expect(servicesBlocks).toHaveLength(5);
   });
 });