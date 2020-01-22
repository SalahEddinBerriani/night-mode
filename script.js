function nightMode() {
  console.log('change to dark');
  const element = document.getElementsByTagName('body');
  console.log(element);
  //   element[0].classList.toggle('night');
  if (element[0].classList.contains('light')) {
    element[0].classList.remove('light');
    element[0].classList.add('night');
  } else {
    element[0].classList.remove('night');
    element[0].classList.add('light');
  }
}
