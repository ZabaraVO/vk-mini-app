import React from 'react';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import styles from './style.module.css';

const ButtonTemplate = ({ text, onClick }) => (
	<Button size="l" level="secondary" className={styles.button} {...(onClick && { onClick: onClick })}>{text}</Button>
);

export default ButtonTemplate;