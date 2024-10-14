'use strict';

const headers = document.querySelectorAll('th');
const tBody = document.querySelector('tBody');
const rows = document.querySelectorAll('tBody tr');

const arrayOf = [...rows];

headers.forEach((header) => {
  header.addEventListener('click', function () {
    const headerIndex = event.target.cellIndex;

    sortBy(headerIndex);
  });
});

function sortBy(headerIndex) {
  arrayOf.sort((a, b) => {
    if (
      headers[headerIndex].innerHTML === 'Name' ||
      headers[headerIndex].innerHTML === 'Position'
    ) {
      return text(a).localeCompare(text(b));
    } else {
      return getNumber(text(a)) - getNumber(text(b));
    }
  });

  arrayOf.forEach((tr) => {
    tBody.appendChild(tr);
  });
}

function getNumber(elString) {
  return Number(elString.replace(',', '').replace('$', ''));
}

function text(x) {
  return x.children[event.target.cellIndex].innerHTML;
}
