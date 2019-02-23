const React = require('react');
const PropTypes = require('prop-types');

const Footer = () => {
  const raidsBtnHandler = () => {
    console.log('RAIDS BUTTON');
  };

  const tasksBtnHandler = () => {
    console.log('Tasks BUTTON');
  };

  const pkmnBtnHandler = () => {
    console.log('Pokemon BUTTON');
  };

  return (
    <div className="footer">
      <button type="button" className="footerRaidsBtn" onClick={raidsBtnHandler}>Raids</button>
      <button type="button" className="footerTasksBtn" onClick={tasksBtnHandler}>Tasks</button>
      <button type="button" className="footerPkmnBtn" onClick={pkmnBtnHandler}>PKMN</button>
    </div>
  );
};

Footer.propTypes = {
};

module.exports = Footer;
