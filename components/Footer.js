import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6 mt-6">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-lg">New Generation High School</h3>
          <p>(403) 284-7248</p>
          <p>1301 16 Ave NW, Calgary, AB T2M 0L4</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Parents & Students</h3>
          <p>School Council</p>
          <p>Volunteer</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Support For Parents</h3>
          <a href="https://d2l.cbe.ab.ca/d2l/loginh/" className="text-white underline">Brightspace</a>
          <p>Google Workspace</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
