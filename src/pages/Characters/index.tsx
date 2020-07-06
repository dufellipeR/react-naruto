import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Card from '../../components/Card';
import Ninjas from '../../assets/ninja_list-ex.json';

import { Container, CharactersList } from './styles';

const Characters: React.FC = () => {
  // CODE

  return (
    <Container>
      <CharactersList>
        {Ninjas.map((ninja) => (
          <Card
            ninjaName={ninja.name}
            ninjaOverall={ninja.overall.toString()}
            ninjaVersion={ninja.version}
          />
        ))}
      </CharactersList>
    </Container>
  );
};

export default Characters;
