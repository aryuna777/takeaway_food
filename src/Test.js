import React from 'react';
import { useState, useEffect } from 'react';


    function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(isVisible);  // ⭐ ОСНОВНОЙ МЕТОД - инвертирование текущего значения
  };

  return (
    <div>
      <button>{isVisible ? 'Скрыть' : 'Показать'}</button>
      {isVisible && <p>Секретное сообщение!</p>}
    </div>
  );
}



export default ToggleMessage;