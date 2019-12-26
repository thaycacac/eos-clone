export function getSets(data) {
  return data.map(item => {
    if (item.definition.length >= item.term.length) {
      item.question = item.definition.trim();
      item.answers = item.term
        .trim()
        .toUpperCase()
        .split("");
      delete item.definition;
      delete item.term;
    } else {
      item.question = item.term.trim();
      item.answers = item.definition
        .trim()
        .toUpperCase()
        .split("");
      delete item.definition;
      delete item.term;
    }
    item.choose = [];
    const number_questin =
      item.question.split("\n").filter(answer => answer).length - 1;
    item.number_question = number_questin > 7 ? 7 : number_questin;
    return item;
  });
}
