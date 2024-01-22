import React from 'react';
 import { render, screen, act } from '@testing-library/react';
 import { MemoryRouter } from 'react-router-dom';
 import { HomePage } from './../pages/HomePage/HomePage';
 import * as allApi from '../api/allApi';

 jest.mock('../api/allApi', () => ({
   getAll: jest.fn(),
   create: jest.fn(),
 }));

 describe('HomePage', () => {
   it('renders HomePage component', async () => {
     const mockData = [
       { _id: '1', title: 'Services 1', home: { title: 'Home 1' }, objects: { title: 'Objects 1' } },
       { _id: '2', title: 'Services 2', home: { title: 'Home 2' }, objects: { title: 'Objects 2' } },
     ];

     allApi.getAll.mockResolvedValueOnce(mockData);

     await act(async () => {
       render(
         <MemoryRouter>
           <HomePage />
         </MemoryRouter>
       );
     });

     const servicesBlocks = screen.getAllByText(/Services/);

     expect(servicesBlocks).toHaveLength(mockData.length);
   });

   it('renders HomePage component', async () => {
     const mockData = [
       { _id: '1', title: 'Services 1', home: { title: 'Home 1' }, objects: { title: 'Objects 1' } },
       { _id: '2', title: 'Services 2', home: { title: 'Home 2' }, objects: { title: 'Objects 2' } },
       { _id: '3', title: 'Services 3', hoem: { title: 'Home 3' }, objects: { title: 'Objects 3' } },
     ];

     allApi.getAll.mockResolvedValueOnce(mockData);

     await act(async () => {
       render(
         <MemoryRouter>
           <HomePage />
         </MemoryRouter>
       );
     });

     const servicesBlocks = screen.getAllByText(/Services/);

     expect(servicesBlocks).toHaveLength(mockData.length);
   });

   it('renders HomePage component', async () => {
     const mockData = [
       { _id: '1', title: 'Services 1', home: { title: 'Home 1' }, objects: { title: 'Objects 1' } },
       { _id: '2', title: 'Services 2', home: { title: 'Home 2' }, objects: { title: 'Objects 2' } },
       { _id: '3', title: 'Services 3', home: { title: 'Home 3' }, objects: { title: 'Objects 3' } },
       { _id: '4', title: 'Services 4', home: { title: 'Home 4' }, objects: { title: 'Objects 4' } },
       { _id: '5', title: 'Services 5', home: { title: 'Home 5' }, objects: { title: 'Objects 5' } },
     ];

     allApi.getAll.mockResolvedValueOnce(mockData);

     await act(async () => {
       render(
         <MemoryRouter>
           <HomePage />
         </MemoryRouter>
       );
     });

     const servicesBlocks = screen.getAllByText(/Services/);

     expect(servicesBlocks).toHaveLength(mockData.length);
   });

   it('renders HomePage component', async () => {
     const mockData = [
       { _id: '1', title: 'Services 1', home: { title: 'Home 1' }, objects: { title: 'Objects 1' } },
       { _id: '2', title: 'Services 2', home: { title: 'Home 2' }, objects: { title: 'Objects 2' } },
       { _id: '3', title: 'Services 3', home: { title: 'Home 3' }, objects: { title: 'Objects 3' } },
       { _id: '4', title: 'Services 4', home: { title: 'Home 4' }, objects: { title: 'Objects 4' } },
       { _id: '5', title: 'Services 5', home: { title: 'Home 5' }, objects: { title: 'Objects 5' } },
       { _id: '6', title: 'Services 6', home: { title: 'Home 6' }, objects: { title: 'Objects 6' } },
       { _id: '7', title: 'Services 7', home: { title: 'Home 7' }, objects: { title: 'Objects 7' } },
       { _id: '8', title: 'Services 8', home: { title: 'Home 8' }, objects: { title: 'Objects 8' } },
       { _id: '9', title: 'Services 9', home: { title: 'Home 9' }, objects: { title: 'Objects 9' } },
     ];

     allApi.getAll.mockResolvedValueOnce(mockData);

     await act(async () => {
       render(
         <MemoryRouter>
           <HomePage />
         </MemoryRouter>
       );
     });

     const servicesBlocks = screen.getAllByText(/Services/);

     expect(servicesBlocks).toHaveLength(mockData.length);
   });
 });