// jakob howard - footer
import React from 'react'; //client side react component

/** Footer page
contains information regarding the school such as name and contact information, as well as resources for parents to use.
Information is seperated into 3 different column with different titles for organization and readability, text is white on a black background to ensure the
footer is accessable and readable for everyone.
**/

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6 mt-6">
      <div className="grid grid-cols-3 gap-8">
        <div> // div for first column, contains school infomation
          <h3 className="font-semibold text-lg">New Generation High School</h3>
          <p>(403) 284-7248</p>
          <p>1301 16 Ave NW, Calgary, AB T2M 0L4</p>
        </div>

        <div> // div for second column, contains volunter and school concil info
          <h3 className="font-semibold text-lg">Parents & Students</h3>
          <a>School Council</a>
          <a>Volunteer</a>
        </div>

        <div> // div for third column, contains resouces for parents
          <h3 className="font-semibold text-lg">Support For Parents</h3>
          <a href="https://d2l.cbe.ab.ca/d2l/loginh/" className="text-white underline">Brightspace</a>
          <a>Google Workspace</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
