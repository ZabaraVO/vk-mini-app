import React from 'react';
import ButtonTemplate from './ButtonTemplate';
import { createButton } from './utils';

const MenuButton = ({ text, onClick }) => (
	createButton('div', <ButtonTemplate text={text} onClick={onClick} />)
);

export default MenuButton;