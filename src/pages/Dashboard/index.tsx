import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import kunai from '../../assets/kunai.png';

import { Title } from './styles';

const Dashboard: React.FC = () => {
  // CODE

  return (
    <>
      <Title>
        <FiChevronLeft size={20} />
        Minimalist Template Typescript React
        <FiChevronRight size={20} />
        <img src={kunai} alt="kunai" />
      </Title>
    </>
  );
};

export default Dashboard;
