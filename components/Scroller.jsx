'use client'
import '@styles/Scroller.css'; // Предполагается, что в этом CSS-файле содержатся необходимые стили
import React, { useRef, useEffect } from 'react';

const Scroller = ({ speed = 'fast' }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    scroller.setAttribute('data-animated', true);

    const scrollerInner = scroller.querySelector('.scroller__inner');
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', 'true');
      scrollerInner.appendChild(duplicatedItem);
    });

    // Очищаем эффект, если компонент будет размонтирован
    return () => {
      scrollerContent.forEach((item) => {
        if (item.parentNode) {
          item.parentNode.removeChild(item);
        }
      });
    };
  }, []); // Пустой массив зависимостей, чтобы эффект выполнился один раз после монтирования

  // Список элементов теперь встроен в компонент
  return (
    <div className={`scroller ${speed}`} ref={scrollerRef}>
      <ul className="tag-list scroller__inner">
        <li className="font-face-my69" style={{ color: '#B1BDC9' }}>HTML Templates</li>
        <li className="font-face-my69" style={{ color: '#B1BDC9' }}>CSS Login Forms</li>
        <li className="font-face-my69" style={{ color: '#B1BDC9' }}>JavaScript</li>
        <li className="font-face-my69" style={{ color: '#B1BDC9' }}>Single Page Applications</li>
        <li className="font-face-my69" style={{ color: '#B1BDC9' }}>React Components</li>
        <li className="font-face-my69" style={{ color: '#B1BDC9' }}>HTML Templates</li>
        <li className="font-face-my69" style={{ color: '#B1BDC9' }}>CSS Login Forms</li>
        <li className="font-face-my69" style={{ color: '#B1BDC9' }}>JavaScript</li>
        <li className="font-face-my69" style={{ color: '#B1BDC9' }}>Single Page Applications</li>
        <li className="font-face-my69" style={{ color: '#B1BDC9' }}>React Components</li>
        {/* Добавьте сюда другие элементы списка, если необходимо */}
      </ul>
    </div>
  );
};

export default Scroller;
