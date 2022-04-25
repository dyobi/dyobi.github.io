import Wrapper from 'react-div-100vh';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MouseMove from '../mousemove';
import Header from '../header';
import About from '../../views/about';
import Skills from '../../views/skills';

import './index.css';

const Component = () => {

  return (
    <Wrapper>
      <style>
        {`
					:root {
						--color-bgc: #1D1D1D;
            --color-gray: #909096;
					}
				`}
      </style>
      <BrowserRouter>
        <Header />
        <MouseMove />
        <div className='core'>
          <Routes>
            <Route path='/' element={<Navigate replace to='/about' />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            {/* <Route path='/portfolio' element={<Core page='0' />} /> */}
            {/* <Route path='/contact' element={<Core page='0' />} /> */}
            <Route path='*' element={<Navigate replace to='/about' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Wrapper>
  );
};

export default Component;