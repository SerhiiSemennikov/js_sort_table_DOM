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
  arrayOf.sort((td1, td2) => {
    if (
      headers[headerIndex].innerHTML === 'Name' ||
      headers[headerIndex].innerHTML === 'Position'
    ) {
      return text(td1).localeCompare(text(td2));
    } else {
      return getNumber(text(td1)) - getNumber(text(td2));
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
