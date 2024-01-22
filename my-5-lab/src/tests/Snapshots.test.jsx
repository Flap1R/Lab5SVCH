import React from 'react';
 import { render } from '@testing-library/react';
 import '@testing-library/react';

 import { Footer } from '../components/Footer/Footer';
 import { HomeBlock } from '../components/HomeBlock/HomeBlock';
 import { ServicesBlock } from '../components/ServicesBlock/ServicesBlock';
 import { ObjectsBlock } from '../components/ObjectsBlock/ObjectsBlock';
 import { CheckboxCheck } from '../components/CheckBoxCheck/CheckboxCheck';
 import { Input } from '../components/Input/Input';
 import { ButtonsGroup } from '../components/ButtonsGroup/ButtonsGroup';
 import { Content } from '../components/Content/Content';
 import { PopupWindow } from '../components/PopupWindow/PopupWindow';
 import { CustomAvatar } from '../components/CustomAvatar/CustomAvatar';

 test('renders Footer component correctly', () => {
   const { container } = render(<Footer />);
   expect(container).toMatchSnapshot();
 });

 test('renders HomeBlock component correctly', () => {
   const { container } = render(<HomeBlock />);
   expect(container).toMatchSnapshot();
 });

 test('renders ServicesBlock component correctly', () => {
   const { container } = render(<ServicesBlock />);
   expect(container).toMatchSnapshot();
 });

 test('renders ObjectsBlock component correctly', () => {
   const { container } = render(<ObjectsBlock />);
   expect(container).toMatchSnapshot();
 });

 test('renders CheckboxCheck component correctly', () => {
   const { container } = render(<CheckboxCheck />);
   expect(container).toMatchSnapshot();
 });

 test('renders Input component correctly', () => {
   const { container } = render(<Input />);
   expect(container).toMatchSnapshot();
 });

 test('renders ButtonsGroup component correctly', () => {
   const { container } = render(<ButtonsGroup />);
   expect(container).toMatchSnapshot();
 });

 test('renders Content component correctly', () => {
   const { container } = render(<Content />);
   expect(container).toMatchSnapshot();
 });

 test('renders PopupWindow component correctly', () => {
   const { container } = render(<PopupWindow />);
   expect(container).toMatchSnapshot();
 });

 test('renders CustomAvatar component correctly', () => {
   const { container } = render(<CustomAvatar />);
   expect(container).toMatchSnapshot();
 });