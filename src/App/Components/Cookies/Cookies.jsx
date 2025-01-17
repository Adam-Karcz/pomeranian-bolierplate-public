import React, { useEffect, useState } from 'react';
import './style.css';
import cookie from '../../Images/cookie.svg';

const Cookies = () => {
  const [isCookie, setIsCookie] = useState(false); //use state to handle re-render

  const getCookieState = () => {
    const cookieState = localStorage.getItem('cookieState');
    setIsCookie(cookieState === '1'); //returns boolean, no need for additional logic
  };

  const handleAgreement = () => {
    localStorage.setItem('cookieState', 1);
    setIsCookie(true);
  };
  const handleAgreementCustomization = () => {
    console.log('WTF he cliked? Who does that'); //to change if exercise will be continued(nope, it il not be continued, just leave it here to do sth)
  };
  //for initial render
  useEffect(() => {
    getCookieState();
  }, []);

  return (
    <div>
      {!isCookie && (
        <div className="cookies-agreement">
          <div className="text-wrapper">
            <img className="cookies-icon" src={cookie} alt="cookies icon" />
            <p>
              Pozwól na pliki cookies Nasza strona korzysta z ciasteczek, które
              umożliwiają poprawne działanie strony i pomagają nam świadczyć
              usługi na najwyższym poziomie. Możesz zaakceptować wykorzystanie
              przez nas wszystkich tych plików i przejść do strony lub
              dostosować użycie do swoich referencji. W tym celu kliknij
              przycisk po prawej stronie “dopasuj zgody”, aby następnie wybrać
              te które odpowiadają Twoim indywidualnym preferencjom.
            </p>
          </div>
          <div className="button-wrapper">
            <button className="agree" onClick={handleAgreement}>
              w porządku
            </button>
            <button
              className="customize"
              onClick={handleAgreementCustomization}
            >
              Dopasuj zgody
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookies;
