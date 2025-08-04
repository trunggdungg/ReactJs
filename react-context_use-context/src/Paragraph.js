import{ useContext } from 'react';// có sẵn consummer để sử dụng
import { ThemeContext } from './ThemeContext'; // import ThemeContext
function Paragraph() {
   const context = useContext(ThemeContext);
   
  return (
    <p className={context.theme}>
      This is a paragraph.
    </p>
  );
}

export default Paragraph;
