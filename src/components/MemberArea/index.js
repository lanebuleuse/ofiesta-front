import React from 'react';

import Card from 'src/components/Cards/Card';

import './memberArea.scss';

const MemberArea = () => (
  <div className="memberArea">
    <h1 className="memberArea-title">Mes prestataires favoris</h1>
    <div className="memberArea-favori">
      <h2>Mes traiteurs</h2>
      <div>
        <Card />
      </div>
    </div>

    <div className="memberArea-favori">
      <h2>Mes salles</h2>
      <div>
        <Card />
      </div>
    </div>

  </div>
);

export default MemberArea;
