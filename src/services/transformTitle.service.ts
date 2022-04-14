const transformTitle = (str: string) => {
  var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
  return subst;
};

export default transformTitle;
