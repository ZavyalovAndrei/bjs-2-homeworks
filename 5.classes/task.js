class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    if (this.state > 100 || this.state <= 0) {
      return;
    } else {
      this._state *= 1.5;
      if (this._state > 100) {
        return (this.state = 100);
      } else {
        return;
      }
    }
  }

  set state(state) {
    this._state = state;
  }

  get state() {
    return this._state;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let result = this.books.find((book) => book[type] === value);
    if (!!!result) {
      return null;
    } else {
      return result;
    }
  }

  giveBookByName(bookName) {
    const result = this.books.findIndex((book) => book.name === bookName);
    if (result === -1) {
      return null;
    } else {
      return this.books.splice(result, 1)[0];
    }
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  checkSubject(subject) {
    if (Reflect.has(this.marks, [subject])) {
      return true;
    } else {
      return false;
    }
  }

  addMark(mark, subject) {
    if (mark > 5 || mark < 2) {
      return;
    } else {
      if (!this.checkSubject(subject)) {
        this.marks[subject] = [];
      }
      return this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if (!this.checkSubject(subject)) {
      return 0;
    } else {
      return (
        this.marks[subject].reduce(
          (accumulator, item) => accumulator + item,
          0
        ) / this.marks[subject].length
      );
    }
  }
  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    } else {
      let summAverageMarks = 0;
      subjects.forEach((subject) => {
        summAverageMarks += this.getAverageBySubject(subject);
      });
      return summAverageMarks / subjects.length;
    }
  }
}
