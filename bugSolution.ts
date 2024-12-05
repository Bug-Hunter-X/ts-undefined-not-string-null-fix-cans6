function printName(name: string | null | undefined): void {
  if (name !== undefined) {
    if (name) {
      console.log(name.toUpperCase());
    } else {
      console.log('No name provided');
    }
  } else {
    console.log('Name is undefined');
  }
}

printName(null); // Works fine
printName(undefined); // Works fine now
printName('John'); // Works fine