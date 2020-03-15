import React from 'react';

export default function Footer(props) {
  function copyYearRange() {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();

    if (startYear === currentYear) return startYear;

    return startYear + ' - ' + currentYear;
  }

  return (
    <footer className="mt-3 py-3 bg-light">
      <div className="container">
        <div className="mb-3 pb-3 border-bottom">
          <div>About</div>
        </div>

        <div className="small">&copy; Merch Booth {copyYearRange()}</div>
      </div>
    </footer>
  );
}
