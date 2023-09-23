function parseCount(data) {
  let parsedNumber = Number.parseFloat(data);
  if (!!!parsedNumber) {
    throw new Error("Невалидное значение");
  } else {
    return parsedNumber;
  }
}

function validateCount(data) {
  try {
    return parseCount(data);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    if (
      sideA + sideB < sideC ||
      sideA + sideC < sideB ||
      sideB + sideC < sideA
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    } else {
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  }

  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  get area() {
    const halfPerimeter = this.perimeter / 2;
    return +Math.sqrt(
      halfPerimeter *
        (halfPerimeter - this.sideA) *
        (halfPerimeter - this.sideB) *
        (halfPerimeter - this.sideC)
    ).toFixed(3);
  }
}

class ErrorTriangle extends Triangle {
  constructor() {
    super();
    this.errorMessage = "Ошибка! Треугольник не существует";
  }

  get area() {
    return this.errorMessage;
  }
  get perimeter() {
    return this.errorMessage;
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch (error) {
    return new ErrorTriangle();
  }
}
