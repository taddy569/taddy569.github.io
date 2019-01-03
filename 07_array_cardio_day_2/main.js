    // ## Array Cardio Day 2
    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const somePeople = people.some(function(person) {
      const now = new Date();
      const yearOfNow = now.getFullYear();
      if (yearOfNow - person.year >= 19) {
        return true;
      }
    })
    console.log(`somePeople: ${somePeople}`);
    // more shorter
    const somePeople2 = people.some( person => ((new Date()).getFullYear() - person.year) >= 19);
    console.log(`somePeople2: ${somePeople2}`);

    // Array.prototype.every() // is everyone 19 or older?
    const everyPeople = people.every(person => {
      const now = new Date();
      const yearOfNow = now.getFullYear();
      if (yearOfNow - person.year >= 19) {
        return true;
      }
    })
    console.log(`everyPeople: ${everyPeople}`);
    //more shorter
    const everyPeople2 = people.every(person => ((new Date()).getFullYear() - person.year) >= 19);
    console.log(`everyPeople2: ${everyPeople2}`);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const findComments = comments.find(function(comment) {
      if (comment.id === 823423) {
        return comment;
      }
    });
    console.log(`findComments: ${JSON.stringify(findComments)}`);
    //more shorter
    const findComments2 = comments.find(comment => comment.id === 823423);
    console.log(`findComments2: ${JSON.stringify(findComments2)}`);
    
    // Array.prototype.findIndex()
    // Find the comment with this ID
    const findIndex = comments.findIndex(function(comment, index) {
      if (comment.id === 823423) {
        return index;
      }
    });
    console.log(`findIndex: ${findIndex}`);
    //more shorter
    const findIndex2 = comments.findIndex(comment => comment.id === 823423);
    console.log(`findIndex2: ${findIndex2}`);

    // delete the comment with the ID of 823423
    const newComments = [
      ...comments.slice(0, findIndex),
      ...comments.slice(findIndex + 1)
    ];
    console.table(newComments);

    //another way
    comments.splice(findIndex, 1);
    console.table(comments);
        
    

