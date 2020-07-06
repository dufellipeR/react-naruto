import React, { useEffect } from 'react';
import { Badge } from './styles';

const Overall: React.FC = ({ children }) => {
  return (
    <>
      {children && (
        <>
          {children >= 70 && children < 80 && (
            <Badge className="badge bg-70">{children}</Badge>
          )}
          {children >= 80 && children < 90 && (
            <Badge className="badge bg-80">{children}</Badge>
          )}
          {children >= 90 && children < 100 && (
            <Badge className="badge bg-90 ">{children}</Badge>
          )}
          {children >= 100 && (
            <Badge className="badge bg-100 loading">{children}</Badge>
          )}
        </>
      )}
    </>
  );
};

export default Overall;
