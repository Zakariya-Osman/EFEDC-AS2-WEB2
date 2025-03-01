// jakob howard - footer
import React from 'react'; //client side react component

/** 
 * StudentForm Component
 * Author: Jakob Howard
 * Date: 3/1/2025
 * Description: This react componet displays infomation about the school in a footer massage at the bottom of the page. It does not take in any inputs and instead it is manually given by the programmer.
 * Inputs: This componet does not take any inputs.
 * Processing: This componet does not require and processing.
 * Output: This componet always displays the information it is manually given by the programmer.
**/

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6 mt-6">
      <div className="grid grid-cols-3 gap-8">
        <div> {/* div for first column, contains school infomation*/}
          <h3 className="font-semibold text-lg">New Generation High School</h3>
          <p>(403) 284-7248</p>
          <p>1301 16 Ave NW, Calgary, AB T2M 0L4</p>
        </div>

        <div> {/* div for second column, contains volunter and school concil info*/}
          <h3 className="font-semibold text-lg">Parents & Students</h3>
          <a>School Council</a>
          <a>Volunteer</a>
        </div>

        <div> {/* div for third column, contains resouces for parents*/}
          <h3 className="font-semibold text-lg">Support For Parents</h3>
          <a href="https://d2l.cbe.ab.ca/d2l/loginh/" className="text-white underline">Brightspace</a>
          <a>Google Workspace</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
