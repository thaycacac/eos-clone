const regex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N']
export function getSets(data) {
  return data.map(item => {
    if (item.definition.length >= item.term.length) {
      item.question = item.definition.trim();
      item.answers = item.term.trim().toUpperCase().split("");
      delete item.definition;
      delete item.term;
    } else {
      item.question = item.term.trim();
      item.answers = item.definition.trim().toUpperCase().split("");
      delete item.definition;
      delete item.term;
    }
    item.choose = [];
    item.number_question = item.question.split("\n").filter(answer => answer).length - 1;
    return item;
  });
}

