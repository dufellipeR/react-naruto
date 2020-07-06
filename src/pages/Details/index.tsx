import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import sasuke from '../../assets/character-ex1.json';
import sasukeMangekyo from '../../assets/character-ex2.json';
import sasukeSPM from '../../assets/character-ex5.json';
import narutoSPM from '../../assets/character-ex6.json';
import itachi from '../../assets/character-ex3.json';
import itachiReani from '../../assets/character-ex4.json';
import sasukethumn from '../../assets/sasuke-rinne.png';
import { Container, Info, Skills, SkillTable, InfoTable } from './styles';
import Overall from '../../components/Overall';

const Details: React.FC = () => {
  // CODE

  return (
    <Container>
      <Info>
        <Overall>{sasukeSPM.overall}</Overall>

        <img src={sasukethumn} alt={sasukeSPM.name} />
        <InfoTable>
          <ul>
            <li>
              <strong> Nome:</strong> {sasukeSPM.name}{' '}
              {!!sasukeSPM.version && <>[{sasukeSPM.version}]</>}
            </li>
            <li>
              <strong> Descrição:</strong>{' '}
              {sasukeSPM.desc.length > 200 &&
                `${sasukeSPM.desc.substring(0, 200)}...`}
            </li>
          </ul>
          <div>
            <iframe
              src="https://giphy.com/embed/Mlx5hjAPRMlYQ"
              width="100%"
              height="100%"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
              aria-readonly
            />
          </div>
        </InfoTable>
      </Info>
      <Skills>
        <h4>Stats</h4>
        <SkillTable>
          <ul>
            <li>
              <span className="statLabel">Poder</span>{' '}
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: `${sasukeSPM.power}%` }}
                  aria-valuenow={sasukeSPM.power}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {sasukeSPM.power}
                </div>
              </div>
            </li>
            <li>
              <span className="statLabel">Inteligência</span>{' '}
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: `${sasukeSPM.intelligence}%` }}
                  aria-valuenow={sasukeSPM.intelligence}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {sasukeSPM.intelligence}
                </div>
              </div>
            </li>
            <li>
              <span className="statLabel">Velocidade</span>{' '}
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: `${sasukeSPM.speed}%` }}
                  aria-valuenow={sasukeSPM.speed}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {sasukeSPM.speed}
                </div>
              </div>
            </li>
            <li>
              <span className="statLabel">Taijutsu</span>{' '}
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  style={{ width: `${sasukeSPM.taijutsu}%` }}
                  aria-valuenow={sasukeSPM.taijutsu}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {sasukeSPM.taijutsu}
                </div>
              </div>
            </li>
            <li>
              <span className="statLabel">Ninjutsu</span>{' '}
              <div className="progress">
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: `${sasukeSPM.ninjutsu}%` }}
                  aria-valuenow={sasukeSPM.ninjutsu}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {sasukeSPM.ninjutsu}
                </div>
              </div>
            </li>
            <li>
              <span className="statLabel">Genjutsu</span>{' '}
              <div className="progress">
                <div
                  className="progress-bar bg-gen"
                  role="progressbar"
                  style={{ width: `${sasukeSPM.genjutsu}%` }}
                  aria-valuenow={sasukeSPM.genjutsu}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {sasukeSPM.genjutsu}
                </div>
              </div>
            </li>
            <li>
              <span className="statLabel">Resistência</span>{' '}
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `${sasukeSPM.endurance}%` }}
                  aria-valuenow={sasukeSPM.endurance}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {sasukeSPM.endurance}
                </div>
              </div>
            </li>
            <li>
              <span className="statLabel">Vontade</span>{' '}
              <div className="progress">
                <div
                  className="progress-bar bg-muted"
                  role="progressbar"
                  style={{ width: `${sasukeSPM.willpower}%` }}
                  aria-valuenow={sasukeSPM.willpower}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {sasukeSPM.willpower}
                </div>
              </div>
            </li>
          </ul>
        </SkillTable>
      </Skills>
    </Container>
  );
};

export default Details;
