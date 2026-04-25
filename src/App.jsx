import { useState } from 'react'
import './App.css'

function App() {
  const [userName, setUserName] = useState('');
  const [userLang, setUserLang] = useState('');
  const [userJob, setUserJob] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [cardData, setCardData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault(); // evita que la página se recargue
    if (!userName.trim() || !userLang.trim() || !userJob.trim()) return; // no agregar si el input está vacío
    setCardData({userName, userLang, userJob});
    setUserName(''); // limpiar el input después de agregar
    setUserLang('');
    setUserJob('');
    setShowCard(true);
  }

  function handleClear(e) {
    e.preventDefault();
    setUserName('');
    setUserLang('');
    setUserJob('');
    setCardData({userName, userLang, userJob});
    setShowCard(false);
  }

  return (
    <div className="rootDiv">
      <big><b>Generador de tarjeta</b></big>
      <form onSubmit={handleSubmit} className="inputForm">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Tu nombre"
        />
        <input
          type="text"
          value={userLang}
          onChange={(e) => setUserLang(e.target.value)}
          placeholder="Tu lenguaje favorito"
        />
        <input
          type="text"
          value={userJob}
          onChange={(e) => setUserJob(e.target.value)}
          placeholder="Tu rol profesional"
        />
        <button type="submit">Generar tarjeta</button>
      </form>
      <br/>
      {showCard && cardData && (
        <div className="introductionCard">
          <big><b>{cardData.userName}</b></big>
          <p>Lenguaje favorito: <b>{cardData.userLang}</b></p>
          <hr/>
          <div className="badge">
            <p>{cardData.userJob}</p>
          </div>
        </div>
      )}
      <div className="clearButton">
        <button type="button" onClick={handleClear}>Limpiar</button>
      </div>
    </div>
  )
}

export default App
