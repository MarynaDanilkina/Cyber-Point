import React from 'react';
import Header from 'components/header/header';
import './rules.sass';
import Footer from 'components/footer/footer';

const Rules = () => {
  return (
    <>
      <header className="header _container">
          <Header />
          <div className='privacy__1stBlock'>
          <h2>Регламент</h2>
        </div>
        </header>
      <main className="main__wrapper">
        <div className='privacy__2ndBlock'>
          <div className='privacy__info-container'>
            <div className='privacy__block-text'>
              <h3>Подзаголовок</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis blandit lorem, ac porta diam vulputate quis. In quam ligula, consectetur eu pellentesque a, fringilla vel ligula. Sed non tortor at sem euismod imperdiet quis at odio. Duis sed ultricies sem. Nam ac ex dictum magna gravida maximus. Proin cursus diam leo, sed convallis elit bibendum nec. Sed a ex sed lacus blandit dignissim. Aliquam congue arcu in posuere tincidunt. Integer pulvinar et risus aliquet consectetur. Duis convallis imperdiet dictum. Ut sollicitudin non diam id bibendum. Nam libero ante, lobortis ut ultricies sed, consequat ac velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
              <p>In pharetra nisl eget purus vestibulum posuere. Pellentesque ut diam eleifend, cursus dolor vel, rhoncus neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius velit vitae gravida semper. Etiam purus orci, blandit imperdiet orci eget, aliquet gravida dui. Phasellus bibendum imperdiet gravida. Aenean nec convallis tellus, condimentum elementum tellus. Ut ut sapien nibh. Curabitur sed augue in arcu suscipit luctus.</p>
            </div>
            <div className='privacy__block-text'>
              <h3>Подзаголовок</h3>
              <p>Curabitur tellus urna, aliquam id aliquet non, fermentum feugiat nibh. Aliquam sodales venenatis erat, id imperdiet turpis vestibulum a. Nunc sit amet felis dignissim lacus consectetur rhoncus. Aliquam erat volutpat. Cras id malesuada nibh. Nullam metus orci, tristique non dolor a, rhoncus bibendum orci. Maecenas eget lacus nec felis eleifend pretium vel vitae nisi.</p>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
      
  );
};
export default Rules;