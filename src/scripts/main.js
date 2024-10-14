'use strict';

const headers = document.querySelectorAll('th');
const tBody = document.querySelector('tBody');
const rows = document.querySelectorAll('tBody tr');

const array = [...rows];

headers.forEach((header) => {
  header.onclick = function (e) {
    const index = e.target.cellIndex;

    sortBy(array, index);
  };
});

function sortBy(arrayOf, index) {
  arrayOf.sort((td1, td2) => {
    if (index === 0 || index === 1) {
      return td1.children[index].innerHTML.localeCompare(
        td2.children[index].innerHTML,
      );
    } else {
      return (
        getNumber(td1.children[index].innerHTML) -
        getNumber(td2.children[index].innerHTML)
      );
    }
  });

  arrayOf.forEach((tr) => {
    tBody.appendChild(tr);
  });
}

function getNumber(elString) {
  return Number(elString.replace(',', '').replace('$', ''));
}
