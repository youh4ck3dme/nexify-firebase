import React from 'react';
import FutureShopVisual from './FutureShopVisual';
import ArtExhibitVisual from './ArtExhibitVisual';
import InnovateCorpVisual from './InnovateCorpVisual';
import SEOptimaVisual from './SEOptimaVisual';

// Objek na mapovanie ID projektov na komponenty vizuálov
export const projectVisuals: { [key: number]: React.FC } = {
  1: FutureShopVisual,
  2: ArtExhibitVisual,
  3: InnovateCorpVisual,
  4: SEOptimaVisual,
};
