import React from 'react';
import { useRouter } from '../routing/useRouter';

const BackButton: React.FC = () => {
  const { goBack } = useRouter();

  return (
    <button onClick={goBack} className="back-button">
      &larr; Back
    </button>
  );
};

export default BackButton;
