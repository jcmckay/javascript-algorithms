function harmlessRansomNote(noteText, magazineText) {
  var noteArray = noteText.split(' ');
  var magazineArray = magazineText.split(' ');
  var magazineObj = {};

  magazineArray.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  noteArray.forEach(word => {
    if (!magazineObj[word] || magazineObj[word] === 0) noteIsPossible = false;
    else magazineObj[word]--;
  });

  return noteIsPossible;
}

harmlessRansomNote(
  'this is text',
  'this is all the magazine text in the magazine'
);
