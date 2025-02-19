import React from 'react'
import './Certificates.css';
import HomeContent from './HomeContent'
import About from './About'
import Header from './Header'
import {Routes,Route} from 'react-router-dom'

const Certificates = () => {
  return (
    <div className='container-items'>
      <Routes>
            <Route path='/' element={<Header/>}></Route>
            <Route path='/HomeContent' element={<HomeContent/>}></Route>
           <Route path='/About' element={<About/>}></Route>
          </Routes>

          <h2>Certificates-</h2>
          <table>

            <tr>
                <th>Name</th>
                <th>Certificates Links</th>
                </tr>

                <tr>
                    <td>Python Programming Training (Allsoft Solutions and Services)</td>
                    <td><a href={require("./Python_Internship_Certificate.pdf")}>Certificate</a></td>
                </tr>

                <tr>
                  <td>Android App Development using Java (Udemy)</td>
                  <td><a href={require("./Android_App_Development.pdf")}>Certificate</a></td>
                </tr>

                <tr>
                  <td>SQL Basics (HackerRank)</td>
                  <td><a href={require("./sql_certificate_HackerRank.pdf")}>Certificate</a></td>
                </tr>
            
          </table>
    </div>
  );
}

export default Certificates;
