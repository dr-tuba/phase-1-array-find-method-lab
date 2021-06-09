function superbowlWin(array) {
    let winYear;
    array.find(object => {
      if (object.result === 'W') {
          winYear = object.year;
      }
    })
    return winYear;
}

