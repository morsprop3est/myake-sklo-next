'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

const Button = ({ link, text, type, onClick }) => {
    return (
        <motion.a
            href={link}
            className={`${styles.button} ${styles[type]}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {text}
        </motion.a>
    );
};

Button.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'white', 'red']).isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: null,
};

export default Button;