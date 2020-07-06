import React from 'react';
import steady from '../../assets/naruto-spmst.png';
import { CardContainer, Container } from './styles';
import Overall from '../Overall';

interface CardProps {
  ninjaName: string;
  ninjaOverall: string;
  ninjaVersion?: string;
  ninjaImg?: string;
}

const Card: React.FC<CardProps> = ({
  ninjaName,
  ninjaOverall,
  ninjaVersion,
  ninjaImg,
}) => {
  return (
    <Container>
      <CardContainer>
        <div className="box">
          <div className="content">
            <div className="overallDiv">
              <h4>{ninjaName}</h4>
              <Overall>{ninjaOverall}</Overall>
            </div>

            {!!ninjaVersion && (
              <span>
                {' '}
                <i> {ninjaVersion}</i>
              </span>
            )}
            <img src={steady} alt="sasuke" />
          </div>
        </div>
      </CardContainer>
      <svg>
        <filter id="wavy">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.08"
            numOctaves="5"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.05;0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
      </svg>
    </Container>
  );
};

export default Card;
