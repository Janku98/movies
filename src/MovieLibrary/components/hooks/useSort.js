export function aTOz (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  };

  export function zTOa (a, b) {
    if (b.title > a.title) {
      return 1;
    }
    if (b.title < a.title) {
      return -1;
    }
    return 0;
  };

  export function ratingSort (a, b) {
    if (b.vote_count > a.vote_count) {
        return 1;
      }
      if (b.vote_count < a.vote_count) {
        return -1;
      }
      return 0;
  };

