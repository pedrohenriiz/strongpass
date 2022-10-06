const SYMBOLS = '!@#$%^&*(){}[]=<>/,.';

export function getRandomCharacter(character: string) {
  let randomCharacter;

  switch (character as any) {
    case 'uppercase': {
      randomCharacter = String.fromCharCode(
        Math.floor(Math.random() * 26) + 65
      );

      break;
    }

    case 'letters': {
      randomCharacter = String.fromCharCode(
        Math.floor(Math.random() * 26) + 97
      );
      break;
    }

    case 'numbers': {
      randomCharacter = String.fromCharCode(
        Math.floor(Math.random() * 10) + 48
      );
      break;
    }

    case 'symbols': {
      randomCharacter = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

      break;
    }

    default: {
      break;
    }
  }

  return randomCharacter;
}
