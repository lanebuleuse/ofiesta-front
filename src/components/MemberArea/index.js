import React from 'react';

import Card from 'src/components/Card';

import './memberArea.scss';

const MemberArea = () => (
  <div className="memberArea">
    <div className="memberArea-favori">
      <h2 className="memberArea-subTitle">Mes favoris</h2>
      <ul>
        <li><a>Mes locations de salles</a></li>
        <li><a>Mes traiteurs</a></li>
        <li><a>Mes traiteurs</a></li>
        <li><a>Tous mes favoris</a></li>
      </ul>
    </div>
    <div className="memberArea-mesinfos">
      <h2 className="memberArea-subTitle">Mes infos</h2>
      <a className="memberArea-modifier">Modifier</a>
      <p className="">Lemoine Grégory</p>
    </div>
  </div>
);

export default MemberArea;
