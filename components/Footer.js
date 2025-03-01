// jakob howard - footer
// all links lead to random websites, because I felt I should make them do something
import React from 'react'; //client side react component

/** 
 * StudentForm Component
 * Author: Jakob Howard
 * Date: 3/1/2025
 * Description: This react componet displays infomation about the school in a footer message at the bottom of the page. It does not take in any inputs and instead it is manually given infomation by the programmer.
 * Inputs: This componet does not take any inputs.
 * Processing: This componet does not require any processing.
 * Output: This componet always displays the information it is manually given by the programmer in the footer.
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
          <div className="flex flex-col items-center">
            <a href="https://www.sait.ca" className="text-white underline">School Council</a>
            <a href="https://www.sait.ca" className="text-white underline">Volunteer</a>
          </div>
        </div>

        <div> {/* div for third column, contains resouces for parents*/}
          <h3 className="font-semibold text-lg">Support For Parents</h3>
          <div className="flex flex-col items-center">
            <a href="https://d2l.cbe.ab.ca/d2l/loginh/" className="text-white underline">Brightspace</a>
            <a href="https://workspace.google.com/lp/business/" className="text-white underline">Google Workspace</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
